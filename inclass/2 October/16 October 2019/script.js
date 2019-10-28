"using strict"

// Passes in the event, remember that "animal-table" is whole table, we only want td
function highlightCell(event){
    let callerName = event.target.tagName;
    //console.log(callerName);

    if(callerName.toLowerCase() != "td") {
        return;
    }

    event.target.classList.add("highlight");

}

function unhighlightCell(event){
    let callerName = event.target.tagName;
    //console.log(callerName);

    if(callerName.toLowerCase() != "td") {
        return;
    }

    event.target.classList.remove("highlight");

}

function displayInfo(){
    //Query selector, let you pick things with css syntax in js
    let animalTDs = document.querySelectorAll("#animal-table td");
    let p = document.createElement("p");
    this.after(p);
    for(let animalTD of animalTDs) {
        p.innerHTML += animalTD.innerHTML + ", ";
    }
}

function stylePara(){
    console.log("Entered");
    //let p = document.querySelector(".special");
    let p = document.getElementsByClassName("special")[0];
    p.classList.add("hightlight");
}

window.onload = function(){
    this.document.getElementById("animal-table").onmouseover = this.highlightCell;
    this.document.getElementById("animal-table").onmouseout = this.unhighlightCell;

    //Alternate, lets you do multiple listeners to event object. Properites cant don multiple.
    // this.document.getElementById("animal-table").addEventListener("mouseover", highlightCell);

    this.document.getElementById("show-info").addEventListener("click", displayInfo);
    this.document.getElementById("style").addEventListener("click", stylePara);
    //this.setInterval(this.stylePara,1000);

}
