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

client.on('messageCreate', (message) => {
    if (message.channel.id === canalStockID) {
        const contenido = message.content.toLowerCase();
        const frutasEncontradas = [];
        const listaBusqueda = ["dragon", "kitsune", "control", "yeti", "tiger", "spirit", "gas", "venom", "shadow", "dough", "t-rex", "trex", "t rex", "mammoth", "gravity"];
        
        listaBusqueda.forEach(fruta => {
            if (contenido.includes(fruta)) {
                let nombreFormateado = (fruta === "t-rex" || fruta === "trex" || fruta === "t rex") ? "T-Rex" : fruta.charAt(0).toUpperCase() + fruta.slice(1);
                if (!frutasEncontradas.includes(nombreFormateado)) frutasEncontradas.push(nombreFormateado);
            }
        });

        if (frutasEncontradas.length > 0) {
            stockActual = frutasEncontradas;
            console.log("¡Stock actualizado!", stockActual);
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
        const mensajes = await canal.messages.fetch({ limit: 1 });
        const ultimoMensaje = mensajes.first();

        if (ultimoMensaje) {
            const contenido = ultimoMensaje.content.toLowerCase();
            const frutasEncontradas = [];
            const listaBusqueda = ["kitsune", "dragon", "control", "yeti", "tiger", "spirit", "gas", "venom", "shadow", "dough", "t-rex", "trex", "t rex", "mammoth", "gravity"];

            listaBusqueda.forEach(fruta => {
                if (contenido.includes(fruta)) {
                    let nombreFormateado = (fruta === "t-rex" || fruta === "trex" || fruta === "t rex") ? "T-Rex" : fruta.charAt(0).toUpperCase() + fruta.slice(1);
                    if (!frutasEncontradas.includes(nombreFormateado)) frutasEncontradas.push(nombreFormateado);
                }
            });

            if (frutasEncontradas.length > 0) {
                stockActual = frutasEncontradas;
                console.log("📦 Stock inicial cargado:", stockActual);
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