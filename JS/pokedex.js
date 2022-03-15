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
            console.log(pokeImg);
            cambiarImg(pokeImg);
        })
};

const cambiarImg = (url) => {
    const pokeImg = document.getElementById("poke_img");
    pokeImg.src = url;
}

const buscarPokemon = () => {
    const pokeName = document.getElementById("Poke_name");
    let pokemon = pokeName.value.toLowerCase();
    console.log("Selecciono: " + pokemon);
    pokemonBuscar = "https://pokeapi.co/api/v2/pokemon/".concat(pokemon)
    fetchPokemon(pokemonBuscar);
}
