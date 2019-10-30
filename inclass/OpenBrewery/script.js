"using strict"

async function displayBrewery(){
    let response = await fetch("https://api.openbrewerydb.org/breweries");
    let breweryJson = await response.json();
    let contentDiv = this.document.getElementById("content");

    for (i in breweryJson){
        // each brewery in brewery array
        let brewery = breweryJson[i];
        //append section
        contentDiv.append(getBrewery(brewery))
    }
}

//returns a section with info
function getBrewery(brewery){
    let brewerySectionElem = document.createElement("section");
    brewerySectionElem.className = "brewery-section";
    
    let breweryTitle = document.createElement("h3");
    breweryTitle.innerHTML = brewery.name;
    brewerySectionElem.append(breweryTitle);

    brewerySectionElem.append(addPara("Brewery Type:" + brewery.brewery_type));
    brewerySectionElem.append(addPara(`Address: ${brewery.street}, ${brewery.city}, ${brewery.state} ${brewery.postal_code} ${brewery.country}`));
    brewerySectionElem.append(addPara("Longitude:" + brewery.longitude));
    brewerySectionElem.append(addPara("Latitude" + brewery.latitude));
    brewerySectionElem.append(addPara("Phone: " + brewery.phone));
    brewerySectionElem.append(addURL(brewery.website_url));
    brewerySectionElem.append(addPara("Updated:" + brewery.updated_at));
   /* if (brewery.brewery_type == "micro"){
        let imgElem = document.createElement("img");
        imgElem.href("./small-brew.jpg");
        brewerySectionElem.append(imgElem);
    }*/

    return brewerySectionElem;
}

//adds paragraphs

function addPara(text){
    let paraElem = document.createElement("p");
    paraElem.innerText = text;
    return paraElem;

}

function addURL(url){
    let urlElem = document.createElement("a");
    urlElem.innerText = "Website Link";
    urlElem.href = url;
    return urlElem;
}

window.onload = function(){
    this.displayBrewery();
}