"using strict"
async function getMusicJson(){
    let response = await fetch("https://gist.githubusercontent.com/jasonbaldridge/2668632/raw/e56320c485a33c339791a25cc107bf70e7f1d763/music.json");
    let musicsJson = await response.json();
    let musicDiv = document.getElementById("music-div");

    console.log(musicsJson);
    for (i in musicsJson){
        //console.log(musicsJson[i].name);
        musicDiv.append(getInfo(musicsJson[i]));
    }
}

function getInfo(music){
    let infoDiv = document.createElement("div");
    infoDiv.className = "info-div";

    //Title Elem
    let bandNameElem = document.createElement("h2");
    bandNameElem.innerHTML = music.name;
    infoDiv.append(bandNameElem);

    /*
    *   Album Title
    *       Song Name
    */
    let albumArray = music.albums;
    // Each Album displays name and songs
    for (i in albumArray){
        infoDiv.append(getAlbumInfo(albumArray[i]));
    }
    
    
    return infoDiv;
}

function getAlbumInfo(musicAlbum){
    // Makes a div that has the album's titles
    let albumDiv = document.createElement("div");
    albumDiv.className = "album-div";
    let albumTitleElem = document.createElement("h3");
    albumTitleElem.innerHTML = musicAlbum.title;
    albumDiv.append(albumTitleElem);
    return albumDiv;
}
window.onload = function(){
    this.getMusicJson();
}