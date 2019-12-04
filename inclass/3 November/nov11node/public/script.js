async function showSongs(){
    let songsJson = await fetch('api/songs');
    let songs = await songsJson.json();
    let songsDiv = document.getElementById("songs");
    console.log(songs);

    for (i in songs){
        songsDiv.append(getSongElem(songs[i]));
    }
}

//gets song Elem information
function getSongElem(song){
    let songDiv = document.createElement("div");
    songDiv.classList.add("song");
    let songTitle = document.createElement("h3");
    songTitle.innerHTML = song.id + ": " + song.name;
    
    let songP = document.createElement("p");

    songDiv.append(songTitle);
    return songDiv;

}

async function getSongElemByID() {
    const inputBoxElem = document.getElementById("song-input");
    // construct the song path based off of inputed id
    let songPath = 'api/songs/'+ inputBoxElem.value;
    // fetch the song
    let songJson = await fetch(songPath);
    let song = await songJson.json();
    
    //remove old song titles
    let oldSongElem = document.getElementById("song-title");
    if (oldSongElem != null){
        oldSongElem.remove();
    }

    // add result to song div
    let songDiv = document.getElementById("songs");
    let songTitle = document.createElement("h3");
    songTitle.innerHTML = song.id + ": " + song.name;
    songTitle.id = "song-title";
    songDiv.append(songTitle);
}

async function addSong(){
    const songName = document.getElementById("title-input").value;
    const songSinger = document.getElementById("singer-input").value;
    const songGenre = document.getElementById("genre-input").value;
    console.log(songName + songGenre+ songSinger);

    let song = {"name":songName, "singer":songSinger, "genre":songGenre};
    let response = await fetch('/api/songs',{
        //changes from get to post request
        method: 'POST',
        // we are passing json code
        header:{
            'Content-type':'application.json;charset-utf-8'
        },
        body: JSON.stringify(song)
    });

    let result = await response.json();
    console.log("Response from server" + result);
}


window.onload = function(){
    //this.showSongs();
    const viewSongButtonElem = this.document.getElementById("view-song");
    viewSongButtonElem.onclick = this.getSongElemByID;

    const addSongButtonElem = this.document.getElementById("add-song");
    addSongButtonElem.onclick = this.addSong;
}