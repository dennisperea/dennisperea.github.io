"using strict"

function computeAscii() {
    let asciiInput = document.getElementById("ascii-input").value;
    let asciiResultElem = document.getElementById("ascii-result");
    let resultString = "";

    for(let i =0; i <asciiInput.length;i++) {
        if (i != asciiInput.length-1) {
            resultString = resultString + asciiInput.charCodeAt(i) + ", ";
        } else {
            resultString = resultString + asciiInput.charCodeAt(i);
        }
    }

    asciiResultElem.innerText = resultString;
}

function computeSum() {
    let sumInput = document.getElementById("sum-input").value;
    let sumResultElem = document.getElementById("sum-result");
    let total = 0;

    for(let i =0; i <= sumInput ; i++) {
        if (i%2 == 0) {
            total+= i;
        }
    }

    sumResultElem.innerText = total;
}


window.onload = function() {
    /* Get buttons and run function on click*/
    const asciiButtonElem = this.document.getElementById("ascii-button");
    asciiButtonElem.onclick = this.computeAscii;

    const sumButtonElem = this.document.getElementById("sum-button");
    sumButtonElem.onclick = this.computeSum;
}