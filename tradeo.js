const tusSlots = document.getElementById('tus-slots');
const susSlots = document.getElementById('sus-slots');
const resultadoDiv = document.getElementById('resultado-trade');

function crearSlots(contenedor, prefijo) {
    for (let i = 1; i <= 4; i++) {
        const divSlot = document.createElement('div');
        divSlot.className = 'slot-item';

        const select = document.createElement('select');
        select.id = `${prefijo}-slot-${i}`;
        select.className = 'select-trade';
        select.onchange = calcularTradeMultifruta;

        select.add(new Option("Vacío", "0"));

        frutas.forEach(f => {
            select.add(new Option(f.nombre, f.nombre));
        });

        const imgPreview = document.createElement('div');
        imgPreview.id = `img-${prefijo}-${i}`;
        imgPreview.className = 'mini-preview';

        divSlot.appendChild(select);
        divSlot.appendChild(imgPreview);
        contenedor.appendChild(divSlot);
    }
}

function calcularTradeMultifruta() {
    let sumaTu = 0;
    let sumaSu = 0;

    for (let i = 1; i <= 4; i++) {
        const val = document.getElementById(`tu-slot-${i}`).value;
        const imgDiv = document.getElementById(`img-tu-${i}`);
        if (val !== "0") {
            const fruta = frutas.find(f => f.nombre === val);
            sumaTu += parseInt(fruta.precio.replace(/,/g, ''));
            imgDiv.innerHTML = `<img src="${fruta.imagen}" width="50">`;
        } else {
            imgDiv.innerHTML = "";
        }
    }

    for (let i = 1; i <= 4; i++) {
        const val = document.getElementById(`su-slot-${i}`).value;
        const imgDiv = document.getElementById(`img-su-${i}`);
        if (val !== "0") {
            const fruta = frutas.find(f => f.nombre === val);
            sumaSu += parseInt(fruta.precio.replace(/,/g, ''));
            imgDiv.innerHTML = `<img src="${fruta.imagen}" width="50">`;
        } else {
            imgDiv.innerHTML = "";
        }
    }

    document.getElementById('total-tu').innerText = sumaTu.toLocaleString();
    document.getElementById('total-su').innerText = sumaSu.toLocaleString();

    evaluarResultado(sumaTu, sumaSu);
}

function evaluarResultado(t1, t2) {
    if (t1 === 0 && t2 === 0) {
        resultadoDiv.innerHTML = "Selecciona las frutas para evaluar el trato.";
        resultadoDiv.style.color = "#ffffff";
        return;
    }

    const diferencia = t2 - t1;
    const ratio = t2 / t1;

    if (t1 > 0 && ratio >= 0.9 && ratio <= 1.1) {
        resultadoDiv.innerHTML = `⚖️ ¡Trato Justo!<br>Diferencia: ${diferencia.toLocaleString()} B$`;
        resultadoDiv.style.color = "#ffd700";
    } else if (t2 > t1) {
        resultadoDiv.innerHTML = `✅ ¡Ganancia!<br>Ganas: ${Math.abs(diferencia).toLocaleString()} B$`;
        resultadoDiv.style.color = "#2ecc71";
    } else {
        resultadoDiv.innerHTML = `❌ Estás perdiendo valor<br>Pierdes: ${Math.abs(diferencia).toLocaleString()} B$`;
        resultadoDiv.style.color = "#ff4d4d";
    }
}

crearSlots(tusSlots, 'tu');
crearSlots(susSlots, 'su');