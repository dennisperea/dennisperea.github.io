"using strict"
const myName = "Dennis";
console.log(`Hello ${myName}`);

//used for when it is regular text and not an input
//const fruit2Elem = document.getElementById("fruit2").textContent;

function displayFruits(){
    const fruit1Elem = document.getElementById("fruit1").value;
    const fruit2Elem = document.getElementById("fruit2").value;
    const fruit3Elem = document.getElementById("fruit3").value;
    console.log(`First fruit ${fruit1Elem}`);
    console.log(`Second fruit ${fruit2Elem}`);
    console.log(`Third fruit ${fruit3Elem}`);
    const resultElem = document.getElementById("result");
    resultElem.textContent = `You like ${fruit1Elem}, ${fruit2Elem}, and ${fruit3Elem}`;
}

//displayFruits();

//get button
const btnResult = document.getElementById("btn-results");
btnResult.onclick = displayFruits; 
