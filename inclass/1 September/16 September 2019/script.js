"using strict"

//alert("Intruder Alert");
// const username = prompt("Enter your name");
// alert("Hi " + username);
// alert(`Whats up ${username}`);

const myP = document.getElementById("target");
// myP.innerHTML = "hi me";

const item1Li = document.getElementById("item1");
const item2Li = document.getElementById("item2");
const item3Li = document.getElementById("item3");

item1Li.innerHTML = "Penguin";
item2Li.innerHTML = "Frog";
item3Li.innerHTML = "Moose";

const cat1 = prompt("What is your first Cat's name?");
const cat2 = prompt("What is your second Cat's name?");
let catP = document.getElementById("catprompt");
catP.innerHTML = `My cats are named ${cat1} and ${cat2}.`;