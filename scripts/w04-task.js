/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Adam Neil Humes",
    photo: "images/adamkun.jpg",
    favoriteFoods: [
        "Pizza", 
        "My Wife's Fried Chicken", 
        "French Fries", 
        "Braised Pork", 
        "Ice Cream",
        "Steak"
    ],
    hobbies: [
        "Reading",
        "Writing",
        "Watching movies"
    ],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Utah",
        length: "15"
    }
);
myProfile.placesLived.push(
    {
        place: "Minnesota",
        length: "8"
    }
);
myProfile.placesLived.push(
    {
        place: "Kansas",
        length: "2"
    }
);
myProfile.placesLived.push(
    {
        place: "Washington",
        length: "12"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("img").setAttribute('src', myProfile.photo);
document.querySelector("img").setAttribute('alt', myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement("dt");
    // object is a list/array itself, so we need to call the array and
    // then specify which piece of data we want.
    dt.textContent = placeLived.place;
    document.querySelector("#places-lived").appendChild(dt);
    
    let dd = document.createElement("dd");
    dd.textContent = placeLived.length;    
    document.querySelector("#places-lived").appendChild(dd);

});

