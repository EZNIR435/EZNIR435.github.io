const titulo = document.getElementById('main-title');

const mensajes = [
    "Domina los Mares de Blox Fruits",
    "Encuentra las Frutas más Raras",
    "Conviértete en el Rey de los Mares"
];

let indice = 0;


window.onload = function() {
    alert("¡Bienvenido a Blox Fruits! Prepárate para aprender sobre las frutas.");
};


function rotarTitulo() {
    titulo.innerText = mensajes[indice];
    titulo.style.color = (indice === 0) ? "#8a2be2" : (indice === 1) ? "#ffd700" : "#ffffff";
    indice = (indice + 1) % mensajes.length;
}

setInterval(rotarTitulo, 3000);


titulo.addEventListener('mouseover', () => {
    titulo.style.transform = "scale(1.05)";
    titulo.style.transition = "0.3s";
});

titulo.addEventListener('mouseout', () => {
    titulo.style.transform = "scale(1)";
});


function explorarAleatorio() {
    const frutasRapidas = ["Dragon", "Control", "Kitsune", "Yeti", "Tiger", "Spirit", "Gas", "Venom", "Shadow", "Dough", "T-Rex", "Mammoth", "Gravity", "Blizzard", "Pain", "Lightning", "Portal", "Phoenix", "Sound", "Spider", "Creation", "Love", "Buddha", "Quake", "Magma", "Ghost", "Rubber", "Light", "Diamond", "Eagle", "Dark", "Sand", "Ice", "Flame", "Spike", "Smoke", "Bomb", "Spring", "Blade", "Spin", "Rocket"];
    const elegida = frutasRapidas[Math.floor(Math.random() * frutasRapidas.length)];
    
    alert("¡Felicidades! Has encontrado la fruta: " + elegida);

    window.location.href = `frutas.html?buscar=${elegida.toLowerCase()}`;
}