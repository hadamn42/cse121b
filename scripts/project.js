const pokeElement = document.querySelector("#pokemon");
const pokeURL = "https://pokeapi.co/api/v2/pokemon";
let pokeLost = [];

const pokeDisplay = (pokey) => {
    pokey.forEach(pokemon => {
        console.log('pokemonlisto', pokemon);
        let pokeArticle = document.createElement("article");
        let pokeHeader = document.createElement("h2");
        let pokeName = pokemon[0];
        pokeHeader.innerText = pokeName;
        pokeArticle.appendChild(pokeHeader);
        pokeElement.appendChild(pokeArticle);
        let pokePic = document.createElement("img");
        pokePic.setAttribute("src", `${pokemon[1]}`);
        pokePic.setAttribute("alt", `${pokeName}`);
        pokeArticle.appendChild(pokePic);
        let pokeP = document.createElement("p");
        pokeP.innerText = pokemon[2];
        // pokeData.types[0].type.name.charAt(0).toUpperCase() + pokeData.types[0].type.name.slice(1);
        pokeArticle.appendChild(pokeP);
    });
}

const getPokemonList = async (pokeMons) => {
    const response = await fetch (pokeMons);
    if (response.ok){
        const data = await response.json();
        let pokeList = data.results;
        pokeList.forEach(poke => {            
            let poketData = getPokemon(poke.url);
            poketData.then((poketData) =>{
                let monArray = [];
                monArray.push(poke.name);
                monArray.push(poketData.sprites.front_default);
                if (poketData.types.length > 1){
                    for( let i = 0; i < poketData.types.length; i++){
                        monArray.push(poketData.types[i].type.name);
                    }
                }
                else{
                    monArray.push(poketData.types[0].type.name);
                }
                pokeLost.push(monArray);
            })
        })
        console.log("Pokemon array", pokeLost);
        pokeDisplay(pokeLost);
    }
}

const getPokemon = async (pokeMon) => {
    const response = await fetch (pokeMon);
    if (response.ok){
        const data = await response.json();
        return data;
    }
}


// const selectSubject = function(){
//     // reset();
//     const selly = document.querySelector("#selection").value;
//     switch (selly) {
//         case "bear":
//             getPictures("https://placebear.com/200/300");
//             break;
//         case "city":
//             getPictures("city");
//             break;
//         case "older":
//             displayTemples(temples.filter(temp => new Date(1950, 0, 1) > new Date(temp.dedicated)));
//             break;
//         case "all":
//             displayTemples(temples);
//             break;
//         default:
//             break;
//     }
// }

getPokemonList(pokeURL);
document.querySelector("#selection").addEventListener( "change", () => { selectSubject() });