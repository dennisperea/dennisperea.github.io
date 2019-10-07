"using strict"

function displayCount(){

    // Create unordered list, append to content div on page
    let ulElem = document.createElement("ul");
    let contentElem = document.getElementById("content");
    contentElem.append(ulElem);

    let i=1;
    while (i<=10){
        console.log(i);
        let liElem = document.createElement("li");
        liElem.innerText = i;
        ulElem.append(liElem);
        i++
    }
}

function displayLinks(){
    let ulElem = document.createElement("ul");
    let linksElem = document.getElementById("links")
    linksElem.append(ulElem);

    for (let i = 1; i < 6; i++) {
        let aElem = document.createElement("a");
        linksElem.append(aElem);
        aElem.innerText = `Page${i}  `;
        aElem.href =`#${i}`;
    }
}

function displayTime(){
    //reminder, 'this' is the button bc 'this' executed this function
    let tableElem = document.createElement("table");
    this.after(tableElem);
    tableElem.id = "dfds";

    //loop through and create the rows
    for (let i = 1; i <= 10;i++) {
        let cellRow = document.createElement("tr");
        tableElem.append(cellRow);

        for (let j = 1; j <=10;j++){
            let cellElem = document.createElement("td");
            cellRow.append(cellElem);
            cellElem.innerText = i * j;
        }
    }
}

window.onload= function(){
    this.displayCount();
    this.displayLinks();

    let multiplyBtn = this.document.getElementById("timesTable");
    multiplyBtn.onclick = displayTime;
}
