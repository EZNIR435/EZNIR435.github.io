const estilos = [
    { 
        nombre: "Combat", 
        mar: "Sea 1", 
        precio: "N/A",
        fragmentos: "0",
        requisitos: "None",
        localizacion: "N/A",
        imagen: "./images/Combat.jpg" 
    },
    { 
        nombre: "Dark Step", 
        mar: "Sea 1", 
        precio: "150,000",
        fragmentos: "0",
        requisitos: "None",
        localizacion: "Dark Step Teacher", 
        imagen: "./images/Dark_Step.jpg" 
    },
    { 
        nombre: "Electric", 
        mar: "Sea 1", 
        precio: "500,000",
        fragmentos: "0",
        requisitos: "None",
        localizacion: "Mad Scientist", 
        imagen: "./images/Electric.jpg" 
    },
    { 
        nombre: "Water Kung Fu", 
        mar: "Sea 1", 
        precio: "750,000",
        fragmentos: "0",
        requisitos: "None", 
        localizacion: "Water Kung Fu Teacher",
        imagen: "./images/Water_Kung_Fu.jpg" 
    },
    { 
        nombre: "Dragon Breath", 
        mar: "Sea 2", 
        precio: "0",
        fragmentos: "1,500",
        requisitos: "None",
        localizacion: "Sabi", 
        imagen: "./images/Dragon_Breath.jpg" 
    },
    { 
        nombre: "Super Human", 
        mar: "Sea 2", 
        precio: "3,000,000",
        fragmentos: "0",
        requisitos: "Mastery 300 Dark Step, Electric, Water Kung Fu y Dragon Breath",
        localizacion: "Martial Arts Master", 
        imagen: "./images/Superhuman.jpg" 
    },
    { 
        nombre: "Death Step", 
        mar: "Sea 2", 
        precio: "2,500,000",
        fragmentos: "5,000",
        requisitos: "Mastery 400 Dark Step",
        localizacion: "Phoeyu, the Reformed", 
        imagen: "./images/Death_Step.jpg" 
    },
    { 
        nombre: "Sharkman Karate", 
        mar: "Sea 2", 
        precio: "2,500,000",
        fragmentos: "5,000",
        requisitos: "Mastery 400 Water Kung Fu, dar Water Key a Sharkman Teacher",
        localizacion: "Sharkman Teacher", 
        imagen: "./images/Sharkman_Karate.jpg" 
    },
    { 
        nombre: "Electric Claw", 
        mar: "Sea 3", 
        precio: "3,000,000",
        fragmentos: "5,000",
        requisitos: "Mastery 400 Electric, Completar la mision contrarreloj del Previous hero",
        localizacion: "Previous Hero", 
        imagen: "./images/Electric_Claw.jpg" 
    },
    { 
        nombre: "Dragon Talon", 
        mar: "Sea 3", 
        precio: "3,000,000",
        fragmentos: "5,000",
        requisitos: "Mastery 400 Dragon Breath, dar Fire Essence a Uzoth",
        localizacion: "Uzoth",
        imagen: "./images/Dragon_Talon.jpg" 
    },
    { 
        nombre: "GodHuman", 
        mar: "Sea 3", 
        precio: "5,000,000",
        fragmentos: "5,000",
        requisitos: "Mastery 400 Death Step, Electric Claw, Sharkman Karate, Dragon Talon, SuperHuman <br> 20 Fish Tail, 20 Magma Ore, 10 Dragon Scale y 10 Mystic Droplet",
        localizacion: "Ancient Monk", 
        imagen: "./images/Godhuman.jpg" 
    },
    { 
        nombre: "Sanguine Art", 
        mar: "Sea 3", 
        precio: "5,000,000",
        fragmentos: "5,000",
        requisitos: "Corazón de Leviatán <br> 2 Dark Fragments, 20 Demonic Wisps, 20 Vampire Fangs",
        localizacion: "Shafi", 
        imagen: "./images/Sanguine_Art.jpg" 
    }
];

const contenedor = document.getElementById('lista-estilos');
const inputBuscador = document.getElementById('buscador');

function mostrarEstilos(lista) {
    contenedor.innerHTML = '';

    if (!lista || lista.length === 0) {
        contenedor.innerHTML = '<p class="no-results">No se encontró ningún estilo.</p>';
        return;
    }

    lista.forEach(estilo => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const fragHTML = estilo.fragmentos !== "0" 
            ? `<p class="frag-val" style="color: #ae00ff; font-weight: bold;">✨ Fragmentos: ${estilo.fragmentos}</p>` 
            : '';

        card.innerHTML = `
            <div class="contenedor-img">
                <img src="${estilo.imagen}" alt="${estilo.nombre}" class="img-fruta">
            </div>
            <h3>${estilo.nombre}</h3>
            <div class="info">
                <p>Ubicación: <span>${estilo.mar}</span></p>
                <p>Vendedor: <span style="color: #50fa7b;">${estilo.localizacion}</span></p> 
                
                <p style="font-size: 0.8em; color: #ccc; margin-top: 8px;">
                    <strong>Requisitos y Materiales:</strong><br>${estilo.requisitos}
                </p>
                ${fragHTML}
            </div>
            <span class="price">Precio: ${estilo.precio} B$</span>
        `;
        contenedor.appendChild(card);
    });
}


inputBuscador.addEventListener('keyup', () => {
    const texto = inputBuscador.value.toLowerCase();
    const filtrados = estilos.filter(e => e.nombre.toLowerCase().includes(texto));
    mostrarEstilos(filtrados);
});


function filtrarPorMar(mar) {
    if (mar === 'todas') {
        mostrarEstilos(estilos);
    } else {
        const filtrados = estilos.filter(e => e.mar === mar);
        mostrarEstilos(filtrados);
    }
}


mostrarEstilos(estilos);
  