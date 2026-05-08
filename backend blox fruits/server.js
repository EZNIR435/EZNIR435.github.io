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

let stockActual = []; 
const canalStockID = "1499829754172408039"; 
const listaBusqueda = ["dragon", "kitsune", "control", "yeti", "tiger", "spirit", "gas", "venom", "shadow", "dough", "t-rex", "trex", "t rex", "mammoth", "gravity"];


function extraerFrutas(message) {
    let textoTotal = message.content.toLowerCase();

    
    if (message.embeds.length > 0) {
        message.embeds.forEach(embed => {
            const contenidoEmbed = (embed.description || "") + 
                                  (embed.fields ? embed.fields.map(f => f.value).join(" ") : "") +
                                  (embed.title || "");
            textoTotal += " " + contenidoEmbed.toLowerCase();
        });
    }

    const encontradas = [];
    listaBusqueda.forEach(fruta => {
        if (textoTotal.includes(fruta)) {
            let nombreFormateado = (fruta === "t-rex" || fruta === "trex" || fruta === "t rex") 
                ? "T-Rex" 
                : fruta.charAt(0).toUpperCase() + fruta.slice(1);
            if (!encontradas.includes(nombreFormateado)) encontradas.push(nombreFormateado);
        }
    });
    return encontradas;
}

client.on('messageCreate', (message) => {
    if (message.channel.id === canalStockID) {
        
       
        if (message.author.id === client.user.id) return; 

        const frutas = extraerFrutas(message);

        if (frutas.length > 0) {
            stockActual = frutas;
            console.log("¡Stock actualizado desde mensaje!", stockActual);
        }
    }
});

app.get('/api/stock', (req, res) => {
    res.json({ frutas: stockActual });
});

client.once('ready', async () => {
    console.log(`✅ Bot conectado como ${client.user.tag}`);
    try {
        const canal = await client.channels.fetch(canalStockID);
        const mensajes = await canal.messages.fetch({ limit: 10 }); 
        

        for (const msg of mensajes.values()) {
            const frutas = extraerFrutas(msg);
            if (frutas.length > 0) {
                stockActual = frutas;
                console.log("📦 Stock inicial cargado:", stockActual);
                break; 
            }
        }
    } catch (error) {
        console.error("Error al cargar stock inicial:", error);
    }
});

client.login(process.env.DISCORD_TOKEN);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor API activo en puerto ${PORT}`);
});