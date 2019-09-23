"using strict"
// Getting the elements data
const firstNameElem = document.getElementById("firstName").innerText;
const lastNameElem = document.getElementById("lastName").innerText;
const prodNameElem = document.getElementById("prodName").innerText;
const prodCountElem = document.getElementById("prodCount").innerText;
const prodPriceElem = document.getElementById("prodPrice").innerText;
const taxElem = document.getElementById("tax").innerText;

// Shows Results
const resultElem = document.getElementById("result");
resultElem.textContent = `${firstNameElem} ${lastNameElem} ordered ${prodCountElem} ${prodNameElem}(s)`;

//Calculating Total
const totalElem = document.getElementById("total");
const totalPrice = prodCountElem*prodPriceElem;
const totalTax = totalPrice*taxElem;
const finalTotal = (totalPrice) + totalTax;
// Round to two digits
const finalTotalRounded = finalTotal.toFixed(2);
totalElem.textContent = `${finalTotalRounded}`;