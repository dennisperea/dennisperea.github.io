"using strict"

async function showBobateas(){
    let response = await fetch('api/bobateas/');
    let bobateas = await response.json();
    let bobateasDiv = document.getElementById("creations-div");
    bobateasDiv.innerHTML = "";

    for(i in bobateas){
        bobateasDiv.append(getBobateaElem(bobateas[i]));
    }
}

function getBobateaElem(bobatea){
    let bobateaDiv = document.createElement("div");
    bobateaDiv.classList.add("boba-tea-creations");
    let bobateaNameElem = document.createElement("h3");
    bobateaNameElem.innerHTML = bobatea.name;
    
    let bobaCreatorElem = document.createElement("p");
    let bobaInfoUl = document.createElement("ul");
    let teaFlavorElem = document.createElement("li");
    let pearlFlavorElem = document.createElement("li");
    let colorElem = document.createElement("li");
    let toppingsElem = document.createElement("li")

    bobaCreatorElem.innerHTML = "Created by " + bobatea.creator;
    teaFlavorElem.innerHTML = "Tea Flavor: " + bobatea.teaFlavor;
    pearlFlavorElem.innerHTML = "Pearl Flavor: " + bobatea.bobaPearlFlavor;
    colorElem.innerHTML = "Color: " + bobatea.color;

    let toppingsString ="Toppings: ";
    for (let i = 0; i < bobatea.toppings.length;i++){
        if (i != bobatea.toppings.length-1){
        toppingsString += bobatea.toppings[i]+",";
    } else {
        toppingsString += bobatea.toppings[i]
    }
    }
    toppingsElem.innerHTML = toppingsString;

    bobateaDiv.append(bobateaNameElem);
    bobaInfoUl.append(teaFlavorElem);
    bobaInfoUl.append(pearlFlavorElem);
    bobaInfoUl.append(colorElem);
    bobaInfoUl.append(toppingsElem);
    bobateaDiv.append(bobaInfoUl);

    return bobateaDiv;
}

//delay helper function
const delay = ms => new Promise(res => setTimeout(res, ms));

async function addBobatea(){
    const name = document.getElementById("name-input").value;
    const creator = document.getElementById("creator-input").value;
    const teaFlavor = document.getElementById("tea-input").value;
    const pearlFlavor = document.getElementById("boba-input").value;
    const color = document.getElementById("color-input").value;
    const toppings = document.getElementById('toppings-input').value;

    let bobatea = {"name":name, "creator":creator, "teaFlavor":teaFlavor, "bobaPearlFlavor":pearlFlavor, "color":color, "toppings":toppings}

    let response = await fetch('/api/bobateas/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(bobatea),
    });

    const feedbackP = document.getElementById("feedback");
    if (feedbackP != null) {
        feedbackP.classList.remove("error");
        feedbackP.classList.remove("success");
        feedbackP.classList.remove("hidden");
    }

    if(response.status != 200){
        feedbackP.innerHTML = "Error Adding Videogame";
        feedbackP.classList.add("error");
        await delay(3000);
        feedbackP.remove();
        return;
    }

    let result = await response.json();
    if (feedbackP != null) {
    feedbackP.innerHTML = "Successfully Added Videogame";
    feedbackP.classList.add("success");
    }
    showBobateas();

    //Wait 3 seconds then remove the result
    await delay(3000);
    feedbackP.remove();    
}


function toggleFormBtn(){
    let formDiv = document.getElementById("create-boba");
    formDiv.classList.toggle("hidden");
}

window.onload = function(){
    this.showBobateas();

    const addButton = this.document.getElementById("add-boba-btn");
    addButton.onclick = addBobatea;
    let formBtn = this.document.getElementById("create-form-btn");
    formBtn.onclick = this.toggleFormBtn;
}