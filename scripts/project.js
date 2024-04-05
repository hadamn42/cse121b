const pokeElement = document.querySelector("#pokemon");
const pokeURL = "https://pokeapi.co/api/v2/pokemon";
let pokeResults = [];
// let pokeList = [];

const pokeDisplay = (pokeymans) => {
    // console.log(pokeymans);
    let pokeList = pokeymans.results;
    pokeList.forEach(pokemon => {
        let pokeArticle = document.createElement("article");
        let pokeHeader = document.createElement("h2");
        let pokeName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        pokeHeader.innerText = pokeName;
        pokeArticle.appendChild(pokeHeader);
        pokeElement.appendChild(pokeArticle);
        let pokeData = getPokemon(pokemon.url);
        pokeResults = pokeData;
        console.log("PokeData: ", pokeResults);
        let pokePic = document.createElement("img");
        console.log("Poke Img: ", pokeData.sprites.front_default); 
        pokePic.setAttribute("src", `${pokeData.sprites.front_default}`);
        pokePic.setAttribute("alt", `${pokeName}`);
        pokeArticle.appendChild(pokePic);
        let pokeP = document.createElement("p");
        pokeP.innerText = pokeResults.name;
        pokeArticle.appendChild(pokeP);
    });
}

const getPokemonList = async (pokeMons) => {
    const response = await fetch (pokeMons);
    if (response.ok){
        const data = await response.json();
        pokeDisplay(data);
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