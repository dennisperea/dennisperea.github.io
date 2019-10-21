"using strict"


function showFood() {
    let foods = ["popcorn", "cherries"];
    let ulElem = document.createElement("ul");
    this.after(ulElem);
    
    for (let i = 0; i < foods.length;i++) {
        let liElem = document.createElement("li");
        liElem.innerText = foods[i];
        ulElem.append(liElem);
    }
}

function listFood() {
    // This is an example of a get Element by Class Name , creates an array
    let foodPs = document.getElementsByClassName("food");
    // let foodPs = document.getElementsByTagName("p");
    let resultStr = "I like "

    // for of loop, the for each loop is deprecated in javascript
    for (let foodElem of foodPs) {
        resultStr+= `${foodElem.innerText},`;
    }
    resultStr = resultStr.substring(0, resultStr.length -1);
    console.log(resultStr);
}

function randomNum() {
    let num=Math.floor(Math.random()*10+1);
    this.after(num);
}

window.onload = function () {
    let foodBtn = this.document.getElementById("show-food");
    foodBtn.onclick = showFood;

    this.listFood();

    let randNumBtn = this.document.getElementById("random-num");
    randNumBtn.onclick = this.randomNum;

}