const pokeElement = document.querySelector("#pokemon");
const pokeURL = "https://pokeapi.co/api/v2/pokemon";
let pokeLost = [];

function compareNum(a, b){
    return a[0] - b[0];
}

const pokeDisplay = (pokey) => {
    pokey.sort(compareNum);
    console.log('pokemonlisto', pokey);
    pokey.forEach(pokemon => {
        
        let pokeArticle = document.createElement("article");
        let pokeHeader = document.createElement("h2");
        let pokeName = pokemon[1].charAt(0).toUpperCase() + pokemon[1].slice(1);
        pokeHeader.innerText = pokeName;
        pokeArticle.appendChild(pokeHeader);
        pokeElement.appendChild(pokeArticle);
        let pokePic = document.createElement("img");
        pokePic.setAttribute("src", `${pokemon[2]}`);
        pokePic.setAttribute("alt", `${pokeName}`);
        pokeArticle.appendChild(pokePic);
        let typeTitle =document.createElement("h3");
        typeTitle.innerText = "Type";
        pokeArticle.appendChild(typeTitle);
        let typeList = document.createElement("ul");
        let typeUnit = document.createElement("li");
        typeUnit.innerText = pokemon.type[0].charAt(0).toUpperCase() + pokemon.type[0].slice(1);
        typeList.appendChild(typeUnit);
        if (pokemon.type.length > 1 ){
            let typeUnit2 = document.createElement("li");
            typeUnit2.innerText += pokemon.type[1].charAt(0).toUpperCase() + pokemon.type[1].slice(1);
            typeList.appendChild(typeUnit2);
        }
        pokeArticle.appendChild(typeList);
    });
}

const getPokemonList = async (pokeMons) => {
    const response = await fetch (pokeMons);
    if (response.ok){
        const data = await response.json();
        let pokeList = data.results;
        let kun = buildPokeArray(pokeList);
        kun.then(()=> {
            console.log("Pokemon array", pokeLost);
            setTimeout(() => {pokeDisplay(pokeLost);}, 100);
        });
    }
}

const getPokemon = async (pokeMon) => {
    const response = await fetch (pokeMon);
    if (response.ok){
        const data = await response.json();
        return data;
    }
}

async function buildPokeArray(pokeList){
    let testArray = []
    await pokeList.forEach(poke => {            
        let poketData = getPokemon(poke.url);
        poketData.then((poketData) =>{
            let monArray = [];
            monArray.push(parseInt(poketData.id));
            monArray.push(poke.name);
            monArray.push(poketData.sprites.front_default);
            let typeList = [];
            if (poketData.types.length > 1){
                for( let i = 0; i < poketData.types.length; i++){
                    typeList.push(poketData.types[i].type.name);
                }
            }
            else{
                typeList.push(poketData.types[0].type.name);
            }
            let typeKey = {type : typeList};
            Object.assign(monArray, typeKey);
            testArray.push(monArray);
            pokeLost.push(monArray);
        })
    })
    return testArray;

}

function reset(){
    pokeElement.innerHTML = "";
}

const selectSubject = function(){
    reset();
    const selly = document.querySelector("#selection").value;
    switch (selly) {
        case "bug":
            pokeDisplay(pokeLost.filter(pokemon => pokemon.type.includes("bug")));
            break;
        case "fire":
            pokeDisplay(pokeLost.filter(pokemon => pokemon.type.includes("fire")));
            break;
        case "flying":
            pokeDisplay(pokeLost.filter(pokemon => pokemon.type.includes("flying")));
            break;
        case "grass":
            pokeDisplay(pokeLost.filter(pokemon => pokemon.type.includes("grass")));
            break;
        case "normal":
            pokeDisplay(pokeLost.filter(pokemon => pokemon.type.includes("normal")));
            break;
        case "poison":
            pokeDisplay(pokeLost.filter(pokemon => pokemon.type.includes("poison")));
            break;
        case "water":
            pokeDisplay(pokeLost.filter(pokemon => pokemon.type.includes("water")));
            break;
        case "all":
            pokeDisplay(pokeLost);
            break;
        default:
            break;
    }
}

getPokemonList(pokeURL);
document.querySelector("#selection").addEventListener( "change", () => { selectSubject() });