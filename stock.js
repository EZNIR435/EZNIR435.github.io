const contenedorStock = document.getElementById('contenedor-stock');
const timerDisplay = document.getElementById('proximo-reset');

const frutasDeseadas = ["Dragon", "Control", "Kitsune", "Yeti", "Tiger", "Spirit", "Gas", "Venom", "Shadow", "Dough", "T-Rex", "Mammoth", "Gravity"];

function actualizarTimer() {
    const ahora = new Date();
    const horas = ahora.getUTCHours();
    const proximoReseteo = Math.ceil((horas + 0.1) / 4) * 4;
    
    const meta = new Date(ahora);
    meta.setUTCHours(proximoReseteo, 0, 0, 0);
    
    const dif = meta - ahora;
    
    const h = Math.floor(dif / (1000 * 60 * 60));
    const m = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((dif % (1000 * 60)) / 1000);
    
    timerDisplay.innerText = `${h}h ${m}m ${s}s`;
}

function renderizarStock(listaDelBot) {
    contenedorStock.innerHTML = "";
    
   
    const frutasParaMostrar = listaDelBot.filter(f => frutasDeseadas.includes(f));

    if (frutasParaMostrar.length === 0) {
        contenedorStock.innerHTML = "<p class='no-stock'>No hay frutas especiales en el stock actual de la tienda.</p>";
        return;
    }

    frutasParaMostrar.forEach(nombreFruta => {
        const fruta = frutas.find(f => f.nombre === nombreFruta);
        if (fruta) {
            const card = document.createElement('div');
            card.className = 'stock-card';
            card.innerHTML = `
                <img src="${fruta.imagen}" alt="${fruta.nombre}">
                <p>${fruta.nombre}</p>
                <span>${fruta.precio} B$</span>
            `;
            contenedorStock.appendChild(card);
        }
    });
}

setInterval(actualizarTimer, 1000);
actualizarTimer();

async function cargarStockDesdeServidor() {
    try {
        
        const respuesta = await fetch('http://localhost:3000/api/stock');
        const datos = await respuesta.json();
        
        
        renderizarStock(datos.frutas);
    } catch (error) {
        console.error("Error: El servidor de Node.js no responde.");
    }
}


cargarStockDesdeServidor();