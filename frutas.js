const frutas = [
    { 
        nombre: "Dragon", 
        tipo: "Bestia", 
        precio: "15,000,000",
        precioRobux: "5,000", 
        rareza: "Mitica",
        imagen: "./images/Dragon_Fruit.jpg" 
    },
    { 
        nombre: "Control", 
        tipo: "Natural", 
        precio: "9,000,000",
        precioRobux: "4,000", 
        rareza: "Mitica",
        imagen: "./images/Control_Fruit.jpg" 
    },
    { 
        nombre: "Kitsune", 
        tipo: "Bestia", 
        precio: "8,000,000",
        precioRobux: "4,000", 
        rareza: "Mitica",
        imagen: "./images/Kitsune_Fruit.jpg"
    },
    { 
        nombre: "Yeti", 
        tipo: "Bestia", 
        precio: "5,000,000",
        precioRobux: "3,000", 
        rareza: "Mitica",
        imagen: "./images/Yeti_Fruit.jpg"
    },
    { 
        nombre: "Tiger", 
        tipo: "Bestia", 
        precio: "5,000,000",
        precioRobux: "3,000", 
        rareza: "Mitica",
        imagen: "./images/Tiger_Fruit.jpg"
    },
    { 
        nombre: "Spirit", 
        tipo: "Natural", 
        precio: "3,400,000",
        precioRobux: "2,550", 
        rareza: "Mitica",
        imagen: "./images/Spirit_Fruit.jpg"
    },
    { 
        nombre: "Gas", 
        tipo: "Elemental", 
        precio: "3,200,000", 
        precioRobux: "2,500",
        rareza: "Mitica",
        imagen: "./images/Gas_Fruit.jpg"
    },
    { 
        nombre: "Venom", 
        tipo: "Natural", 
        precio: "3,000,000", 
        precioRobux: "2,450",
        rareza: "Mitica",
        imagen: "./images/Venom_Fruit.jpg"
    },
    { 
        nombre: "Shadow", 
        tipo: "Natural", 
        precio: "2,900,000", 
        precioRobux: "2,425",
        rareza: "Mitica",
        imagen: "./images/Shadow_Fruit.jpg"
    },
    { 
        nombre: "Dough", 
        tipo: "Elemental", 
        precio: "2,800,000", 
        precioRobux: "2,400",
        rareza: "Mitica",
        imagen: "./images/Dough_Fruit.jpg"
    },
    { 
        nombre: "T-Rex", 
        tipo: "Bestia", 
        precio: "2,700,000", 
        precioRobux: "2,350",
        rareza: "Mitica",
        imagen: "./images/T-Rex_Fruit.jpg"
    },
    { 
        nombre: "Mammoth", 
        tipo: "Bestia", 
        precio: "2,700,000", 
        precioRobux: "2,350",
        rareza: "Mitica",
        imagen: "./images/Mammoth_Fruit.jpg"
    },
    { 
        nombre: "Gravity", 
        tipo: "Natural", 
        precio: "2,500,000", 
        precioRobux: "2,300",
        rareza: "Mitica",
        imagen: "./images/Gravity_Fruit.jpg"
    },
    { 
        nombre: "Blizzard", 
        tipo: "Elemental", 
        precio: "2,400,000", 
        precioRobux: "2,250",
        rareza: "Legendaria",
        imagen: "./images/Blizzard_Fruit.jpg"
    },
    { 
        nombre: "Pain", 
        tipo: "Natural", 
        precio: "2,300,000", 
        precioRobux: "2,200",
        rareza: "Legendaria",
        imagen: "./images/Pain_Fruit.jpg"
    },
    { 
        nombre: "Lightning", 
        tipo: "Elemental", 
        precio: "2,100,000", 
        precioRobux: "2,100",
        rareza: "Legendaria",
        imagen: "./images/Lightning_Fruit.jpg"
    },
    { 
        nombre: "Portal", 
        tipo: "Natural", 
        precio: "1,900,000", 
        precioRobux: "2,000",
        rareza: "Legendaria",
        imagen: "./images/Portal_Fruit.jpg"
    },
    { 
        nombre: "Phoenix", 
        tipo: "Bestia", 
        precio: "1,800,000", 
        precioRobux: "2,000",
        rareza: "Legendaria",
        imagen: "./images/Phoenix_Fruit.jpg"
    },
    { 
        nombre: "Sound", 
        tipo: "Natural", 
        precio: "1,700,000", 
        precioRobux: "1,900",
        rareza: "Legendaria",
        imagen: "./images/Sound_Fruit.jpg"
    },
    { 
        nombre: "Spider", 
        tipo: "Natural", 
        precio: "1,500,000", 
        precioRobux: "1,800",
        rareza: "Legendaria",
        imagen: "./images/Spider_Fruit.jpg"
    },
    { 
        nombre: "Creation", 
        tipo: "Natural", 
        precio: "1,400,000", 
        precioRobux: "1,750",
        rareza: "Legendaria",
        imagen: "./images/Creation_Fruit.jpg"
    },
    { 
        nombre: "Love", 
        tipo: "Natural", 
        precio: "1,300,000", 
        precioRobux: "1,700",
        rareza: "Legendaria",
        imagen: "./images/Love_Fruit.jpg"
    },
    { 
        nombre: "Buddha", 
        tipo: "Bestia", 
        precio: "1,200,000", 
        precioRobux: "1,650",
        rareza: "Legendaria",
        imagen: "./images/Buddha_Fruit.jpg"
    },
    { 
        nombre: "Quake", 
        tipo: "Natural", 
        precio: "1,000,000", 
        precioRobux: "1,500",
        rareza: "Legendaria",
        imagen: "./images/Quake_Fruit.jpg"
    },
    { 
        nombre: "Magma", 
        tipo: "Elemental", 
        precio: "960,000", 
        precioRobux: "1,300",
        rareza: "Rara",
        imagen: "./images/Magma_Fruit.jpg"
    },
    { 
        nombre: "Ghost", 
        tipo: "Natural", 
        precio: "940,000", 
        precioRobux: "1,275",
        rareza: "Rara",
        imagen: "./images/Ghost_Fruit.jpg"
    },
    { 
        nombre: "Rubber", 
        tipo: "Natural", 
        precio: "750,000", 
        precioRobux: "1,200",
        rareza: "Rara",
        imagen: "./images/Rubber_Fruit.jpg"
    },
    { 
        nombre: "Light", 
        tipo: "Elemental", 
        precio: "650,000", 
        precioRobux: "1,100",
        rareza: "Rara",
        imagen: "./images/Light_Fruit.jpg"
    },
    { 
        nombre: "Diamond", 
        tipo: "Natural", 
        precio: "600,000", 
        precioRobux: "1,000",
        rareza: "Poco Común",
        imagen: "./images/Diamond_Fruit.jpg"
    },
    { 
        nombre: "Eagle", 
        tipo: "Bestia", 
        precio: "550,000", 
        precioRobux: "975",
        rareza: "Poco Común",
        imagen: "./images/Eagle_Fruit.jpg"
    },
    { 
        nombre: "Dark", 
        tipo: "Elemental", 
        precio: "500,000", 
        precioRobux: "950",
        rareza: "Poco Común",
        imagen: "./images/Dark_Fruit.jpg"
    },
    { 
        nombre: "Sand", 
        tipo: "Elemental", 
        precio: "420,000", 
        precioRobux: "850",
        rareza: "Poco Común",
        imagen: "./images/Sand_Fruit.jpg"
    },
    { 
        nombre: "Ice", 
        tipo: "Elemental", 
        precio: "350,000", 
        precioRobux: "750",
        rareza: "Poco Común",
        imagen: "./images/Ice_Fruit.jpg"
    },
    { 
        nombre: "Flame", 
        tipo: "Elemental", 
        precio: "250,000", 
        precioRobux: "550",
        rareza: "Poco Común",
        imagen: "./images/Flame_Fruit.jpg"
    },
    { 
        nombre: "Spike", 
        tipo: "Natural", 
        precio: "180,000", 
        precioRobux: "380",
        rareza: "Común",
        imagen: "./images/Spike_Fruit.jpg"
    },
    { 
        nombre: "Smoke", 
        tipo: "Elemental", 
        precio: "100,000", 
        precioRobux: "250",
        rareza: "Común",
        imagen: "./images/Smoke_Fruit.jpg"
    },
    { 
        nombre: "Bomb", 
        tipo: "Natural", 
        precio: "80,000", 
        precioRobux: "220",
        rareza: "Común",
        imagen: "./images/Bomb_Fruit.jpg"
    },
    { 
        nombre: "Spring", 
        tipo: "Natural", 
        precio: "60,000", 
        precioRobux: "180",
        rareza: "Común",
        imagen: "./images/Spring_Fruit.jpg"
    },
    { 
        nombre: "Blade", 
        tipo: "Natural", 
        precio: "30,000", 
        precioRobux: "100",
        rareza: "Común",
        imagen: "./images/Blade_Fruit.jpg"
    },
    { 
        nombre: "Spin", 
        tipo: "Natural", 
        precio: "7,500", 
        precioRobux: "75",
        rareza: "Común",
        imagen: "./images/Spin_Fruit.jpg"
    },
    { 
        nombre: "Rocket", 
        tipo: "Natural", 
        precio: "5,000", 
        precioRobux: "50",
        rareza: "Común",
        imagen: "./images/Rocket_Fruit.jpg"
    }
];

const contenedor = document.getElementById('lista-frutas');
const inputBuscador = document.getElementById('buscador');


function mostrarFrutas(lista) {
    
    contenedor.innerHTML = '';

    
    if (!lista || lista.length === 0) {
        contenedor.innerHTML = '<p class="no-results">No se encontró ninguna fruta con ese nombre.</p>';
        return;
    }

    lista.forEach(fruta => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.setAttribute('data-rareza', fruta.rareza.toLowerCase().replace(" ", "-"));

        card.innerHTML = `
            <div class="contenedor-img">
                <img src="${fruta.imagen}" alt="${fruta.nombre}" class="img-fruta">
            </div>
            <h3>${fruta.nombre}</h3>
            <div class="info">
                <p>Tipo: <span>${fruta.tipo}</span></p>
                <p>Rareza: <strong>${fruta.rareza}</strong></p>
                <p class="robux-val">Precio Robux: 💸 ${fruta.precioRobux}</p> 
            </div>
            <span class="price">Beli: ${fruta.precio} B$</span>
        `;
        
        contenedor.appendChild(card);
    });
}


const inputBuscador = document.getElementById('inputBuscador');

if (inputBuscador) {
    inputBuscador.addEventListener('keyup', () => {
        const textoUsuario = inputBuscador.value.toLowerCase();
        
        const frutasFiltradas = frutas.filter(fruta => {
            return fruta.nombre.toLowerCase().includes(textoUsuario);
        });

        mostrarFrutas(frutasFiltradas);
    });
}
mostrarFrutas(frutas);


function revisarUrl() {
    const parametros = new URLSearchParams(window.location.search);
    const frutaABuscar = parametros.get('buscar');

    if (frutaABuscar) {
        
        inputBuscador.value = frutaABuscar;

        
        const filtradas = frutas.filter(f => f.nombre.toLowerCase().includes(frutaABuscar));

        
        mostrarFrutas(filtradas);
    } else {
      
        mostrarFrutas(frutas);
    }
}


revisarUrl();

function filtrarPorRareza(rareza) {
    if (rareza === 'todas') {
        mostrarFrutas(frutas);
    } else {
        const filtradas = frutas.filter(f => f.rareza === rareza);
        mostrarFrutas(filtradas);
    }
}

function filtrarPorTipo(tipo) {
    const filtradas = frutas.filter(f => f.tipo === tipo);
    mostrarFrutas(filtradas);
}