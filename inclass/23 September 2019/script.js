"using strict"

function displayResult(){
    const resultElem = document.getElementById("result");
    
    let present = document.getElementById("gift").value;
    present = present.toLowerCase().trim();

    switch(present) {
        case "doll":
            resultElem.textContent = "No I'm Broke";
            break;
        case "car":
            resultElem.textContent = "I love cars";
            break;
        default:
            resultElem.textContent = "I will consider it";
            break;
    }

    console.log(`showing gift`);
}

// Once all the html and css load on the page
window.onload = function(){
    this.console.log("hello");
    //get the button
    const btnResult = document.getElementById("btn-results");
    btnResult.onclick = displayResult;
    
    /*
    btnResult.onclick = function() {
        const resultElem = document.getElementById("result");
        resultElem.textContent = `No I'm broke`;
    }
    */
}


