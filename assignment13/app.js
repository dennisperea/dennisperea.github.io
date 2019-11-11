"using strict"

async function displayPokemon(){
    let response = await fetch("https://dennisperea.github.io/assignment13/pokemon.json");
    let pokemonJson = await response.json();
    let contentDiv = this.document.getElementById("content");
    
    for (i in pokemonJson){
        let pokemon = pokemonJson[i];
        contentDiv.append(getPokemon(pokemon));
    }
}

function getPokemon(pokemon){
    let pokemonSectionElem = document.createElement("section");
    // for style sheet later
    pokemonSectionElem.className = "pokemon-section";

    //append image first
    pokemonSectionElem.append(addImg(pokemon.img));
 
    //append details
   // pokemonSectionElem.append(addpokemonDetails(pokemon));
    return pokemonSectionElem;
}

function addImg(path){
    let imgElem = document.createElement("img");
    imgElem.src = path;
    return imgElem;
}

function addPara(text){
    let paraElem = document.createElement("p");
    paraElem.innerText = text;
    return paraElem;
}

function addPokemonDetails(Pokemon){
    let ulElem = document.createElement("ul");
    return null;
}

window.onload = function(){
    this.displayPokemon();
}