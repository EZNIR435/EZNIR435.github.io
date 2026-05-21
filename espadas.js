const espadas = [
    { 
        nombre: "Cutlass", 
        rareza: "Común",
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
    { 
        nombre: "Bisento", 
        rareza: "Legendaria",
        obtencion: "Master Sword Dealer (Sea 1)", 
        precio: "1,000,000",
        imagen: "./images/bisento.jpg" 
    },
    { 
        nombre: "Buddy Sword", 
        rareza: "Legendaria",
        obtencion: "Cake Queen (Sea 3)", 
        precio: "drop de Cake Queen",
        imagen: "./images/buddy_sword.jpg" 
    },
    { 
        nombre: "Canvander", 
        rareza: "Legendaria",
        obtencion: "Beautiful Pirate (Sea 3)", 
        precio: "drop de Beautiful Pirate",
        imagen: "./images/canvander.jpg" 
    },
    { 
        nombre: "Dark Dagger", 
        rareza: "Legendaria",
        obtencion: "rip_indra True Form (Sea 3)", 
        precio: "drop de rip_indra True Form",
        imagen: "./images/dark_dagger.jpg" 
    },
    { 
        nombre: "Dragonheart", 
        rareza: "Legendaria",
        obtencion: "Dragon Hunter (Sea 3)", 
        precio: "Conseguir 1 Dragon Egg, 6 Dinosaur Bones y 15 Blaze Ember",
        imagen: "./images/dragonheart.jpg" 
    },
    { 
        nombre: "Fox Lamp", 
        rareza: "Legendaria",
        obtencion: "Kitsune Shrine (Sea 3)", 
        precio: "15+ Azure Ember (Random Drop)",
        imagen: "./images/fox_lamp.jpg" 
    },
    { 
        nombre: "Koko", 
        rareza: "Legendaria",
        obtencion: "Order (Sea 2)", 
        precio: "drop de Order",
        imagen: "./images/koko.jpg"
    },
    { 
        nombre: "Midnight Blade", 
        rareza: "Legendaria",
        obtencion: "El Admin (Sea 2)", 
        precio: "100 Ectoplasma",
        imagen: "./images/midnight_blade.jpg" 
    },
    { 
        nombre: "Oroshi", 
        rareza: "Legendaria",
        obtencion: "Legendary Sword Dealer (Sea 2)", 
        precio: "2,000,000",
        imagen: "./images/oroshi.jpg" 
    },
    { 
        nombre: "Pole (1st Form)", 
        rareza: "Legendaria",
        obtencion: "Thunder God (Sea 1)", 
        precio: "drop de Thunder God",
        imagen: "./images/pole_29.jpg" 
    },
    { 
        nombre: "Pole (2nd Form)", 
        rareza: "Legendaria",
        obtencion: "Rough Sea (Sea 3)", 
        precio: "Ser golpeado por un trueno en Rough Sea mientras tienes la Pole equipada",
        imagen: "./images/pole_v2.jpg" 
    },
    { 
        nombre: "Rengoku", 
        rareza: "Legendaria",
        obtencion: "Ice Castle (Sea 2)", 
        precio: "usa la Hidden Key",
        imagen: "./images/rengoku.jpg" 
    },
    { 
        nombre: "Saber", 
        rareza: "Legendaria",
        obtencion: "Saber Expert (Sea 1)", 
        precio: "derrota a Saber Expert",
        imagen: "./images/saber.jpg" 
    },
    { 
        nombre: "Saishi", 
        rareza: "Legendaria",
        obtencion: "Legendary Sword Dealer (Sea 2)", 
        precio: "2,000,000",
        imagen: "./images/saishi.jpg" 
    },
    { 
        nombre: "Shark Anchor", 
        rareza: "Legendaria",
        obtencion: "Anchor Terrorshark(Sea 3)", 
        precio: "usa el Monster Magnet y derrota a Anchor Terrorshark",
        imagen: "./images/shark_anchor.jpg" 
    },
    { 
        nombre: "Shizu", 
        rareza: "Legendaria",
        obtencion: "Legendary Sword Dealer (Sea 2)", 
        precio: "2,000,000",
        imagen: "./images/shizu.jpg" 
    },
    { 
        nombre: "Spikey Trident", 
        rareza: "Legendaria",
        obtencion: "Cake Prince o Dough King(Sea 3)", 
        precio: "drop de Cake Prince o Dough King",
        imagen: "./images/spikey_trident.jpg" 
    },
    { 
        nombre: "Tushita", 
        rareza: "Legendaria",
        obtencion: "Longma(Sea 3)", 
        precio: "derrota a Longma",
        imagen: "./images/tushita.jpg" 
    },
    { 
        nombre: "Yama", 
        rareza: "Legendaria",
        obtencion: "Completa 20-30 Elite/Player Hunter quests(Sea 3)", 
        precio: "N/A",
        imagen: "./images/yama.jpg" 
    },
    { 
        nombre: "Cursed Dual Katana", 
        rareza: "Mitica",
        obtencion: "Terminación de las Scroll Trials(Sea 3)", 
        precio: "N/A",
        imagen: "./images/cursed_dual_katana.jpg" 
    },
    { 
        nombre: "Dark Blade", 
        rareza: "Mitica",
        obtencion: "Tienda", 
        precio: "1,200 Robux",
        imagen: "./images/dark_blade.jpg" 
    },
    { 
        nombre: "Hallow Scythe", 
        rareza: "Mitica",
        obtencion: "Soul Reaper (Sea 3)", 
        precio: "drop de Soul Reaper",
        imagen: "./images/hallow_scythe.jpg" 
    },
    { 
        nombre: "Triple Dark Blade", 
        rareza: "Mitica",
        obtencion: "N/A", 
        precio: "N/A",
        imagen: "./images/triple_dark_blade.jpg" 
    },
     { 
        nombre: "True Triple Katana", 
        rareza: "Mitica",
        obtencion: "Mysterious Man (Sea 2)", 
        precio: "2,000,000",
        imagen: "./images/true_triple_katana.jpg" 
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