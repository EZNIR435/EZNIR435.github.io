const espadas = [
    { 
        nombre: "Cutlass", 
        rareza: "Comùn",
        obtencion: "Sword Dealer (Sea 1)", 
        precio: "1,000",
        imagen: "./images/cutlass.jpg" 
    },
    { 
        nombre: "Dual Katana", 
        rareza: "Común",
        obtencion: "Sword Dealer of the West (Sea 1)", 
        precio: "12,000",
        imagen: "./images/dual_katana.jpg" 
    },
    { 
        nombre: "Katana", 
        rareza: "Común",
        obtencion: "Sword Dealer (Sea 1)", 
        precio: "1,000",
        imagen: "./images/katana.jpg" 
    },
    { 
        nombre: "Iron Mace", 
        rareza: "Poco Común",
        obtencion: "Sword Dealer of the West (Sea 1)", 
        precio: "25,000",
        imagen: "./images/iron_mace.jpg" 
    },
    { 
        nombre: "Shark Saw", 
        rareza: "Común",
        obtencion: "Derrota a The Saw (Sea 1)", 
        precio: "1,000",
        imagen: "./images/shark_saw.jpg" 
    },
    { 
        nombre: "Triple Katana", 
        rareza: "Poco Común",
        obtencion: "Sword Dealer of the East (Sea 1)", 
        precio: "60,000",
        imagen: "./images/triple_katana.jpg" 
    },
    { 
        nombre: "Twin Hooks", 
        rareza: "Poco Común",
        obtencion: "Captain Elephant (Sea 3)", 
        precio: "Drop de Captain Elephant",
        imagen: "./images/twin_hooks.jpg" 
    },
    { 
        nombre: "Dragon Trident", 
        rareza: "Rara",
        obtencion: "Tide Keeper (Sea 2)", 
        precio: "Drop de Tide Keeper",
        imagen: "./images/dragon_trident.jpg" 
    },
    { 
        nombre: "Dual-Headed Blade", 
        rareza: "Rara",
        obtencion: "Master Sword Dealer (Sea 1)", 
        precio: "400,000",
        imagen: "./images/dual-headed_blade.jpg" 
    },
    { 
        nombre: "Flail", 
        rareza: "Rara",
        obtencion: "Smoke Admiral (Sea 2)", 
        precio: "Drop de Smoke Admiral",
        imagen: "./images/flail.jpg" 
    },
    { 
        nombre: "Gravity Blade", 
        rareza: "Rara",
        obtencion: "Orbitus (Sea 2)", 
        precio: "Drop de Orbitus",
        imagen: "./images/gravity_blade.jpg" 
    },
    { 
        nombre: "Longsword", 
        rareza: "Rara",
        obtencion: "Diamond (Sea 2)", 
        precio: "Drop de Diamond",
        imagen: "./images/longsword.jpg" 
    },
    { 
        nombre: "Pipe", 
        rareza: "Rara",
        obtencion: "Sword Dealer of the East (Sea 1)", 
        precio: "100,000",
        imagen: "./images/pipe.jpg" 
    },
    { 
        nombre: "Soul Cane", 
        rareza: "Rara",
        obtencion: "Living Skeleton (Sea 1)", 
        precio: "750,000",
        imagen: "./images/soul_cane.jpg" 
    },
    { 
        nombre: "Trident", 
        rareza: "Rara",
        obtencion: "Fishman Lord (Sea 1)", 
        precio: "drop de Fishman Lord",
        imagen: "./images/trident.jpg" 
    },
    { 
        nombre: "Wardens Sword", 
        rareza: "Rara",
        obtencion: "Chief Warden (Sea 1)", 
        precio: "drop de Chief Warden",
        imagen: "./images/wardens_sword.jpg" 
    },
];

const contenedor = document.getElementById('lista-espadas');
const inputBuscador = document.getElementById('buscador');

function mostrarEspadas(lista) {
    contenedor.innerHTML = '';

    if (!lista || lista.length === 0) {
        contenedor.innerHTML = '<p class="no-results">No se encontró ninguna espada con ese nombre.</p>';
        return;
    }

    lista.forEach(espada => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        
        card.setAttribute('data-rareza', espada.rareza.toLowerCase().replace(" ", "-"));

        card.innerHTML = `
            <div class="contenedor-img">
                <img src="${espada.imagen}" alt="${espada.nombre}" class="img-espada">
            </div>
            <h3>${espada.nombre}</h3>
            <div class="info">
                <p>Rareza: <strong>${espada.rareza}</strong></p>
                <p>Obtención: <span>${espada.obtencion}</span></p>
            </div>
            <span class="price">Costo: ${espada.precio}</span>
        `;
        
        contenedor.appendChild(card);
    });
}


inputBuscador.addEventListener('keyup', () => {
    const textoUsuario = inputBuscador.value.toLowerCase();
    const filtradas = espadas.filter(espada => 
        espada.nombre.toLowerCase().includes(textoUsuario)
    );
    mostrarEspadas(filtradas);
});


function filtrarPorRareza(rareza) {
    if (rareza === 'todas') {
        mostrarEspadas(espadas);
    } else {
        const filtradas = espadas.filter(e => e.rareza === rareza);
        mostrarEspadas(filtradas);
    }
}


mostrarEspadas(espadas);