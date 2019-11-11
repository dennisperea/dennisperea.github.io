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
    const basePath = "https://portiaportia.github.io/csce242/json/";
    let fullPath = basePath + path;
    let imgElem = document.createElement("img");
    imgElem.src = fullPath;
    return imgElem;
}

window.onload = function(){
    this.displayPokemon();
}