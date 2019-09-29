"using strict"

function compareAge(){
    // Gets the name and age elements
    const name1Elem = document.getElementById("first-name").value;
    const age1Elem = document.getElementById("first-age").value;
    const name2Elem = document.getElementById("second-name").value;
    const age2Elem = document.getElementById("second-age").value;
    const name3Elem = document.getElementById("third-name").value;
    const age3Elem = document.getElementById("third-age").value;

    // Fills the agelist with the individual ages
    // Sorts the ageList from greatest to least
    let ageList =  [age1Elem,age2Elem,age3Elem];
    ageList.sort(function(a , b){return b-a});

    // Converts the list from numbers to names
    let i;
    for (i = 0;i<ageList.length;i++){
        if(ageList[i] === age1Elem){
            ageList[i] = name1Elem;
        } 
        
        if(ageList[i] === age2Elem){
            ageList[i] = name2Elem;
        } 
        
        if(ageList[i] === age3Elem){
            ageList[i] = name3Elem;
        }
    }

    // This calculates the resorts then prints it
    let compareAgeResult = document.getElementById("ageResult");
    compareAgeResult.innerText = `Oldest to Youngest: ${ageList[0]},${ageList[1]},${ageList[2]}`;
}

function translate(){
    // Grabs the inputted language
    const selectedLanguageElem = document.getElementById("selected-language");
    let selectedLanguage = selectedLanguageElem.value;
    selectedLanguage = selectedLanguage.toLowerCase().trim();
    
    // Grab the result span
    let translateResultElem = document.getElementById("translateResult");

    // Checks which language
    if (selectedLanguage == "french"){
        translateResultElem.innerText = "Bonjour le monde";
    } else if(selectedLanguage == "korean"){
        translateResultElem.innerText = "Annyeonghaseyo woldeu";
    } else if(selectedLanguage == "spanish"){
        translateResultElem.innerText = "Hola mundo";
    } else if(selectedLanguage == "klingon"){
        translateResultElem.innerText = "qo' vIvan";
    } else {
        translateResultElem.innerText = "Please select French, Korean, Spanish, or  Klingon"
    }
}

function pluralize(){
    const numOfItems = document.getElementById("num-of-items").value;
    const itemName = document.getElementById("item-name").value;
    let pluralizeResultElem = document.getElementById("pluralizeResult");

    if (numOfItems <= 1) {
        pluralizeResultElem.innerText = `You ordered ${numOfItems} ${itemName}`;
    } else {
        pluralizeResultElem.innerText = `You ordered ${numOfItems} ${itemName}s`;
    }

    //if the error is showing, remove it
    let errorSpan = document.getElementById("error-neg-num");

    if(errorSpan != null) {
        errorSpan.remove();
    }

    if (numOfItems < 0) {
        //creating error object
        errorSpan = document.createElement("span");
        errorSpan.id = "error-neg-num";
        errorSpan.innerHTML = "* Negative Number";
        errorSpan.classList.add("error");
        //Adds after
        this.after(errorSpan);
    }
}


window.onload = function(){
    //This gets the button to compare ages, calls function onclick
    const compareAgeButton = document.getElementById("compare-ages");
    compareAgeButton.onclick = compareAge;

    //This gets the button to translate the given language, calls function onclick
    const translateButton = document.getElementById("translate");
    translateButton.onclick = translate; 

    //This gets the button to pluralize the results, call function on click
    const pluralizeButton = document.getElementById("pluralize");
    pluralizeButton.onclick = pluralize;
}