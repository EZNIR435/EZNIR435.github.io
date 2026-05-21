const pistolas = [
    { 
        nombre: "Slingshot", 
        rareza: "Común",
        obtencion: "Primer Sea (Weapon Dealer)", 
        precio: "5,000",
        moneda: "beli",
        imagen: "./images/slingshot.jpg" 
    },
    { 
        nombre: "Flintlock", 
        rareza: "Poco Común",
        obtencion: "Primer Sea (Weapon Dealer)", 
        precio: "10,000",
        moneda: "beli",
        imagen: "./images/flintlock.jpg" 
    },
    { 
        nombre: "Musket", 
        rareza: "Poco Común",
        obtencion: "Primer Sea (Weapon Dealer)", 
        precio: "8,000",
        moneda: "beli",
        imagen: "./images/musket.jpg" 
    },
    { 
        nombre: "Acidum Rifle", 
        rareza: "Rara",
        obtencion: "Segundo sea (Factory Raid)", 
        precio: "drop de Factory Raid",
        moneda: "especial",
        imagen: "./images/acidum_rifle.jpg" 
    },
    { 
        nombre: "Bizzare Revolver", 
        rareza: "Rara",
        obtencion: "Segundo sea (El Rodolfo)", 
        precio: "25 Ectoplasma",
        moneda: "especial",
        imagen: "./images/bizarre_revolver.jpg" 
    },
    { 
        nombre: "Cannon", 
        rareza: "Rara",
        obtencion: "Primer sea (Avanced Weapon Dealer)", 
        precio: "100,000",
        moneda: "beli",
        imagen: "./images/cannon.jpg" 
    },
    { 
        nombre: "Dual Flintlock", 
        rareza: "Rara",
        obtencion: "Primer sea (Avanced Weapon Dealer)", 
        precio: "65,000",
        moneda: "beli",
        imagen: "./images/dual_flintlock.jpg" 
    },
    { 
        nombre: "Magma Blaster", 
        rareza: "Rara",
        obtencion: "Primer sea (Magma Admiral)", 
        precio: "drop de Magma Admiral",
        moneda: "especial",
        imagen: "./images/magma_blaster.jpg" 
    },
    { 
        nombre: "Refined Slingshot", 
        rareza: "Rara",
        obtencion: "Primer sea (Advanced Weapon Dealer)", 
        precio: "30,000",
        moneda: "beli",
        imagen: "./images/refined_slingshot.jpg" 
    },
    { 
        nombre: "Bazooka", 
        rareza: "Legendaria",
        obtencion: "Primer sea (Wysper)", 
        precio: "drop de Wysper",
        moneda: "especial",
        imagen: "./images/bazooka.jpg" 
    },
    { 
        nombre: "Dragonstorm", 
        rareza: "Legendaria",
        obtencion: "Tercer sea (Dragon Hunter)", 
        precio: "2 Dragon Egg, 10 Dinosaur Bones, 5 Dragon Scales, 30 Blaze Ember",
        moneda: "especial",
        imagen: "./images/dragonstorm.jpg"
    },
    { 
        nombre: "Kabucha", 
        rareza: "Legendaria",
        obtencion: "Segundo sea (The Strongest God)", 
        precio: "1,500 fragmentos",
        moneda: "fragmentos",
        imagen: "./images/kabucha.jpg"
    },
    { 
        nombre: "Venom Bow", 
        rareza: "Legendaria",
        obtencion: "Tercer sea (Hydra Leader)", 
        precio: "drop de Hydra Leader",
        moneda: "especial",
        imagen: "./images/venom_bow.jpg"
    },
    { 
        nombre: "Skull Guitar", 
        rareza: "Mítica",
        obtencion: "Tercer Sea (Weird Machine)", 
        precio: "1 Dark Fragment, 250 Ectoplasm, 500 Bones, 5,000 Fragments",
        moneda: "materiales",
        imagen: "./images/skull_guitar.jpg" 
    }
];

const contenedor = document.getElementById('lista-pistolas');
const inputBuscador = document.getElementById('buscador');

function mostrarPistolas(lista) {
    contenedor.innerHTML = '';

    if (!lista || lista.length === 0) {
        contenedor.innerHTML = '<p class="no-results">No se encontró ninguna pistola con ese nombre.</p>';
        return;
    }

    lista.forEach(pistola => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-rareza', pistola.rareza.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(" ", "-"));

        let textoCosto = '';
        let claseMoneda = 'price';

        if (pistola.moneda === 'beli') {
          textoCosto = `$${pistola.precio}`;
        } else if (pistola.moneda === 'fragmentos') {
             textoCosto = `✨ ${pistola.precio}`;
             claseMoneda = 'price fragmentos';
        } else if (pistola.moneda === 'materiales') {
                 textoCosto = pistola.precio;
                 claseMoneda = 'price materiales';
        } else {
             textoCosto = pistola.precio;
        }

        card.innerHTML = `
            <div class="contenedor-img">
                <img src="${pistola.imagen}" alt="${pistola.nombre}" class="img-pistola">
            </div>
            <h3>${pistola.nombre}</h3>
            <div class="info">
                <p>Rareza: <strong>${pistola.rareza}</strong></p>
                <p>Obtención: <span>${pistola.obtencion}</span></p>
            </div>
            <span class="${claseMoneda}">Costo: ${textoCosto}</span>
        `;
        
        contenedor.appendChild(card);
    });
}

inputBuscador.addEventListener('keyup', () => {
    const textoUsuario = inputBuscador.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filtradas = pistolas.filter(pistola => {
        const nombreLimpio = pistola.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return nombreLimpio.includes(textoUsuario);
    });
    mostrarPistolas(filtradas);
});

function filtrarPorRareza(rareza) {
    if (rareza === 'todas') {
        mostrarPistolas(pistolas);
    } else {
        const rarezaFormateada = rareza.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const filtradas = pistolas.filter(p => {
            const rarezaElemento = p.rareza.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return rarezaElemento === rarezaFormateada;
        });
        mostrarPistolas(filtradas);
    }
}

mostrarPistolas(pistolas);