console.log("Hola pokedex");
const fetchPokemon = (urlPokemon) => {
    const url = urlPokemon;
    // Funcion para consultar el api, devuelve el resultado de la consulta
    // Progrmación asincrona
    fetch(url).then((res) => {
        if (res.status != 200) {
            console.log("Revise el nombre del pokemon");
            cambiarImg("llorando.jpg");
        }
        else {
            return res.json();
        }
    })
        .then((data) => {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let poneNombre = data.forms[0].name;
            let tipo = data.types[0].type.name;
            let vida = data.stats[0].base_stat;
            let ataque = data.stats[1].base_stat;
            let defensa = data.stats[2].base_stat;
            let velocidad = data.stats[5].base_stat;
            let mov_1 = data.moves[0].move.name;
            let mov_2 = data.moves[1].move.name;
            cambiarDatos(poneNombre, tipo, vida, ataque, defensa, velocidad, mov_1, mov_2);
            console.log(pokeImg);
            cambiarImg(pokeImg);
        })
};

const cambiarImg = (url) => {
    const pokeImg = document.getElementById("poke_img");
    pokeImg.src = url;
}

const cambiarDatos = (nombre, tipo, vida, ataque, defensa, velocidad, mov_1, mov_2) => {
    document.getElementById("nombre_pokemon").innerHTML = nombre;
    document.getElementById("tipo_pokemon").innerHTML = tipo;
    document.getElementById("estadisticas").innerHTML = "Estadistica";
    document.getElementById("vida_pokemon").innerHTML = "Vida";
    document.getElementById("ataque_pokemon").innerHTML = "Ataque";
    document.getElementById("defensa_pokemon").innerHTML = "Defensa";
    document.getElementById("velocidad_pokemon").innerHTML = "Velocidad";
    document.getElementById("vida_valor").innerHTML = vida;
    document.getElementById("ataque_valor").innerHTML = ataque;
    document.getElementById("defensa_valor").innerHTML = defensa;
    document.getElementById("velocidad_valor").innerHTML = velocidad;
    document.getElementById("movimientos").innerHTML = "Movimientos";
    document.getElementById("movimiento_1").innerHTML = "Movimiento 1";
    document.getElementById("movimiento_2").innerHTML = "Movimiento 2";
    document.getElementById("mov1_valor").innerHTML = mov_1;
    document.getElementById("mov2_valor").innerHTML = mov_2;
}

const buscarPokemon = () => {
    const pokeName = document.getElementById("Poke_name");
    let pokemon = pokeName.value.toLowerCase();
    console.log("Selecciono: " + pokemon);
    if (pokemon == "") {
        pokemon.concat("default")
    }
    pokemonBuscar = "https://pokeapi.co/api/v2/pokemon/".concat(pokemon)
    fetchPokemon(pokemonBuscar);

}
