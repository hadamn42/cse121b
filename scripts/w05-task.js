/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let templeArticle = document.createElement("article");
        let templeHeader = document.createElement("h3");
        templeHeader.innerText = temple.templeName;
        let templePic = document.createElement("img");
        templePic.setAttribute("src", `${temple.imageUrl}`);
        templePic.setAttribute("alt", `${temple.location}`);
        templeArticle.appendChild(templeHeader);
        templeArticle.appendChild(templePic);
        templesElement.appendChild(templeArticle);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = function() {
    templesElement.innerHTML = "";
}   

/* filterTemples Function */
const filterTemples = function(temples){
    reset();
    const filly = document.querySelector("#filtered").value;
    switch (filly) {
        case "utah":
            displayTemples(temples.filter(temp => temp.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temp => !temp.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temp => new Date(1950, 0, 1) > new Date(temp.dedicated)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            break;
    }

}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener( "change", () => { filterTemples(templeList) });