const { Client, GatewayIntentBits, Partials } = require('discord.js');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Message, Partials.Channel]
});


let stockActual = {
    normal: [],
    mirage: []
}; 

const canalStockID = "1499829754172408039"; 
const listaBusqueda = ["dragon", "kitsune", "control", "yeti", "tiger", "spirit", "gas", "venom", "shadow", "dough", "t-rex", "trex", "t rex", "mammoth", "gravity"];

function extraerFrutas(message) {
    let resultados = {
        tipo: "desconocido",
        frutas: []
    };

    if (message.embeds && message.embeds.length > 0) {
        message.embeds.forEach(embed => {
            const titulo = (embed.title || "").toLowerCase();
            
            
            if (titulo.includes("mirage")) {
                resultados.tipo = "mirage";
            } else if (titulo.includes("normal") || titulo.includes("current")) {
                resultados.tipo = "normal";
            }

            const contenido = [
                embed.title,
                embed.description,
                embed.fields ? embed.fields.map(f => f.name + " " + f.value).join(" ") : ""
            ].join(" ").toLowerCase();

            listaBusqueda.forEach(fruta => {
                if (contenido.includes(fruta)) {
                    let nombreFormateado = ["t-rex", "trex", "t rex"].includes(fruta) 
                        ? "T-Rex" 
                        : fruta.charAt(0).toUpperCase() + fruta.slice(1);
                    
                    if (!resultados.frutas.includes(nombreFormateado)) {
                        resultados.frutas.push(nombreFormateado);
                    }
                }
            });
        });
    }
    return resultados;
}

client.on('messageCreate', (message) => {
    if (message.channel.id === canalStockID) {
        if (message.author.id === client.user.id) return; 

        const data = extraerFrutas(message);
        if (data.frutas.length > 0 && data.tipo !== "desconocido") {
            stockActual[data.tipo] = data.frutas;
            console.log(`✅ ${data.tipo.toUpperCase()} Stock actualizado:`, stockActual[data.tipo]);
        }
    }
});

client.on('messageDelete', (message) => {
    if (message.channel.id === canalStockID) {
        stockActual = { normal: [], mirage: [] }; 
        console.log("🗑️ Stock total limpiado");
    }
});


app.get('/api/stock', (req, res) => {
    res.json(stockActual);
});

client.once('ready', async () => {
    console.log(`✅ Bot conectado como ${client.user.tag}`);
    try {
        const canal = await client.channels.fetch(canalStockID);
        const mensajes = await canal.messages.fetch({ limit: 30 }); 

        for (const msg of mensajes.values()) {
            const data = extraerFrutas(msg);
            
            if (data.frutas.length > 0 && data.tipo !== "desconocido" && stockActual[data.tipo].length === 0) {
                stockActual[data.tipo] = data.frutas;
                console.log(`📦 Stock inicial (${data.tipo}) recuperado`);
            }
            
            if (stockActual.normal.length > 0 && stockActual.mirage.length > 0) break;
        }
    } catch (error) {
        console.error("❌ Error inicial:", error);
    }
});

client.login(process.env.DISCORD_TOKEN);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`🚀 API en puerto ${PORT}`);
});