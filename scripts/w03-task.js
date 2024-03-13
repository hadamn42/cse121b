/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}


/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2;
}

const subtractNumbers = function (){
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

function divideNumbers(){
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}

/* Decision Structure */
function getTotal(){
    let subtoots = Number(document.querySelector("#subtotal").value);
    if (document.querySelector("#member").checked === true){
        subtoots = subtoots * 0.8;
    }
    document.querySelector("#total").innerText = `${new Intl.NumberFormat("en-US", {style: "currency", currency: "USD",}).format(subtoots)}`;
}


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = numbersArray.join();

/* Output Odds Only Array */
let oddArray = numbersArray.filter((number) => number % 2 === 1);
document.querySelector("#odds").innerHTML = oddArray.join();

/* Output Evens Only Array */
let evenArray = numbersArray.filter((number) => number % 2 === 0);
document.querySelector("#evens").innerHTML = evenArray.join();

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector("#sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map((number) => number * 2);
document.querySelector("#multiplied").innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
let multiplieds = numbersArray.map((number) => number * 2);
let sumOfMultiplied = multiplieds.reduce((sum, number) => sum + number);
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied;

document.querySelector("#addNumbers").addEventListener("click", addNumbers);
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
document.querySelector("#getTotal").addEventListener("click", getTotal);