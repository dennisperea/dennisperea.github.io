"using strict"

//on call iterates through all movies in json and appends to content div
async function displayMovie(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/movies.json");
    let movieJson = await response.json();
    let contentDiv = this.document.getElementById("movie-content");
    
    for (i in movieJson){
        let movie = movieJson[i];
        contentDiv.append(getMovie(movie));
    }
}

//returns a section containing the movie info
function getMovie(movie){
    let movieSectionElem = document.createElement("section");
    // for style sheet later
    movieSectionElem.className = "movie-section";

    //append image first
    movieSectionElem.append(addImg(movie.img));
    //append movie title
    movieSectionElem.append(addPara(movie.title));
    //append movie details
    movieSectionElem.append(addMovieDetails(movie));
    return movieSectionElem;
}
/* add image given url
*  path: movie.img
*/
function addImg(path){
    const basePath = "https://portiaportia.github.io/csce242/json/";
    let fullPath = basePath + path;
    let imgElem = document.createElement("img");
    imgElem.src = fullPath;
    return imgElem;
}

function addPara(text){
    let paraElem = document.createElement("p");
    paraElem.innerText = text;
    return paraElem;
}

function addMovieDetails(movie){
    let ulElem = document.createElement("ul");
    
    //Director
    let directorLiElem = document.createElement("li");
    directorLiElem.innerHTML = "<b>Director: </b>" + movie.director;
    ulElem.append(directorLiElem);

    //Actors
    let actorsLiElem = document.createElement("li");
    let actorString = "<b>Actors: </b>";
    for (i in movie.actors){
        if ( i != 0){
            actorString += ", " + movie.actors[i];
        } else {
            actorString += movie.actors[i];
        }
    }
    actorsLiElem.innerHTML = actorString;
    ulElem.append(actorsLiElem);

    //Year
    let yearLiElem = document.createElement("li");
    yearLiElem.innerHTML = "<b>Year: </b>" + movie.year;
    ulElem.append(yearLiElem);

    //Genre
    let genreLiElem = document.createElement("li");
    let genreString = "<b>Genres: </b>";
    for (i in movie.genres){
        if ( i != 0){
            genreString += ", " + movie.genres[i];
        } else {
            genreString += movie.genres[i];
        }
    }
    genreLiElem.innerHTML = genreString;
    ulElem.append(genreLiElem);

    //Review
    let reviewLiElem = document.createElement("p");
    reviewLiElem.innerHTML = movie.description;
    ulElem.append(reviewLiElem);
    
    return ulElem;
}

window.onload = function(){
    this.displayMovie();
}