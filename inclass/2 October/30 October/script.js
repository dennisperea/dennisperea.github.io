"using strict"

async function displayShoe(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/shoes.json");
    let shoesJson = await response.json();
    let contentDiv = this.document.getElementById("content");

    for (i in shoesJson){
        let shoe = shoesJson[i];
        contentDiv.append(getShoeItem(shoe));
    }

}

function getShoeItem(shoe){
    let shoeSection = document.createElement("section");
    shoeSection.className = "shoe";
    let shoeTitle = document.createElement("h3");
    shoeTitle.innerHTML = shoe.name;
    shoeSection.innerHTML = "Hi me!";
    shoeSection.append(shoeTitle);
    shoeSection.append(createShoePara("$"+shoe.price));
    shoeSection.append(createShoePara(shoe.material));
    shoeSection.append(createShoePara(shoe.description));

    let ulElem = document.createElement("ulElem");
    shoeSection.append(ulElem);

    for (i in shoe.reviews){
        let liElem = document.createElement("li");
        liElem.innerHTML = shoe.reviews[i];
        ulElem.append(liElem);
    }
    return shoeSection;
}

function createShoePara(text){
    let shoeP = document.createElement("p");
    shoeP.innerHTML = text;
    return shoeP;
}
window.onload = function(){
    this.displayShoe();
    
}