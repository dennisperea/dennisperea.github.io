"using strict"

async function showVideogames(){
    let response = await fetch('api/videogames/');
    let videogames = await response.json();
    let videogamesDiv = document.getElementById("videogames-div");
    videogamesDiv.innerHTML ="";

    for(i in videogames){
        videogamesDiv.appendChild(getVideogameElem(videogames[i]));
    }
}

function getVideogameElem(videogame){
    let videogameDiv = document.createElement("div");
    videogameDiv.classList.add("videogame");
    let videogameName = document.createElement("h3");
    videogameName.innerHTML = videogame.name;

    let videoGameInfoUl = document.createElement("ul");
    let videoGamePublisher = document.createElement("li");
    let videoGameConsole = document.createElement("li");
    let videoGameGenre = document.createElement("li");
    let videoGameCharacters = document.createElement("li");
    let videoGameDescription = document.createElement("p");

    videoGamePublisher.innerHTML = "Publilsher: " + videogame.publisher;
    videoGameConsole.innerHTML = "Console: " + videogame.gameconsole;
    videoGameGenre.innerHTML = "Genre: " + videogame.genre;
    videoGameDescription = videogame.description;
    
    let characterResultString = "Characters: ";
    for (let i = 0; i < videogame.characters.length;i++){
            if (i != videogame.characters.length-1){
            characterResultString += videogame.characters[i]+",";
        } else {
            characterResultString += videogame.characters[i]
        }
    }
    videoGameCharacters.innerHTML = characterResultString;
    
    //append everything to the li that is needed
    videoGameInfoUl.append(videoGamePublisher);
    videoGameInfoUl.append(videoGameGenre);
    videoGameInfoUl.append(videoGameConsole);
    videoGameInfoUl.append(videoGameCharacters);

    
    videogameDiv.append(videogameName);
    videogameDiv.append(videoGameInfoUl);
    videogameDiv.append(videoGameDescription);
    
    return videogameDiv;
}

//delay helper function
const delay = ms => new Promise(res => setTimeout(res, ms));

async function addVideogame(){
    console.log("in addVideo");
    const name = document.getElementById("name-input").value;
    const publisher = document.getElementById("publisher-input").value;
    const consoleInput = document.getElementById("console-input").value;
    const genre = document.getElementById("genre-input").value;
    const description = document.getElementById("description-input").value;
    const characters = document.getElementById("characters-input").value;

    let videogame = {"name": name, "publisher":publisher, "gameconsole":consoleInput, "genre":genre, "description":description,"characters":characters}
    console.log(videogame);

    let response = await fetch('/api/videogames/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(videogame),
    });

    const feedbackP = document.getElementById("feedback");
    feedbackP.classList.remove("error");
    feedbackP.classList.remove("success");
    feedbackP.classList.remove("hidden");


    if(response.status != 200){
        feedbackP.innerHTML = "Error Adding Videogame";
        feedbackP.classList.add("error");
        await delay(3000);
        feedbackP.remove();
        return;
    }

    let result = await response.json();
    feedbackP.innerHTML = "Successfully Added Videogame";
    feedbackP.classList.add("success");
    showVideogames();

    //Wait 3 seconds then remove the result
    await delay(3000);
    feedbackP.remove();
}

function toggleAddVideoGame(){
    let addVideoGameDiv = document.getElementById("add-videogame");
    addVideoGameDiv.classList.toggle("hidden");
}
window.onload = function(){
    this.showVideogames();
    this.toggleAddVideoGame();
    const addButton = this.document.getElementById("btn-add-videogame");
    addButton.onclick = this.addVideogame;

    const toggleElem = this.document.getElementById("toggle");
    toggleElem.onclick = this.toggleAddVideoGame;
}