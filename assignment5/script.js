"using strict"

const name = prompt("What is your name?");
const numOfCoffee = prompt("How much coffee would you like to order?");
const tip = prompt("Would you like to leave a tip?");
const tax = 0.07;

const priceCoffee = 3.00;
let cofeeTotal = numOfCoffee*priceCoffee; 
let coffeeWithTax = cofeeTotal + (cofeeTotal*tax);
let coffeeWithTaxAndTip = (coffeeWithTax + parseFloat(tip));

let total = document.getElementById("total");
total.innerHTML = `${name} ordered ${numOfCoffee} coffees, total is: ${coffeeWithTaxAndTip}`;
