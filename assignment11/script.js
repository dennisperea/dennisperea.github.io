"using strict"

class Book {
    constructor(bookName,author,genre,yearPublished, rating) {
        this._bookname = bookName; //string
        this._author = author; //string
        this._genre = genre; //string
        this._yearPublished = yearPublished; //int
        this._rating = rating;  //int
    }

    getBookName(){
        return this._bookname;
    }

    getAuthor(){
        return "by " + this._author;
    }

    getGenre(){
        return "genre:" + this._genre;
    }

    getYearPublished(){
        return "written in " + this._yearPublished;
    }

    getRating(){
        if (this.rating == 1) {
            return "rated" + this._rating + "star";
        }

        return "rated " + this._rating + " stars";
    }

    getDetails(){
       let result = `${this.getBookName()} ${this.getAuthor()}, ${this.getGenre()}, ${this.getYearPublished()}, ${this.getRating()}`;
       return result;
    }
}

function resolveBookImage(imageElem, bookObj) {
    switch(bookObj.getBookName()) {
        case "The Lord of the Rings":
            imageElem.src = './img/lotr.jpg';
            break;
        case "Neuromancer":
            imageElem.src = './img/neuromancer.jpg';
            break;
        case "True Grit":
            imageElem.src = './img/truegrit.jpg';
            break;
        case "Pride and Prejudice":
            imageElem.src = './img/prideandprejudice.jpg';
            break;
        case "Frankenstein":
            imageElem.src = './img/frankenstein.jpg';
            break;
        default:
            break;
    }
}

function displayBook(bookObj) {
    const bookDivElem = document.getElementById("book-div");
    let newDivForBookElem = document.createElement("div");
    newDivForBookElem.className = "book-container";
    let imageElem = document.createElement("img");
    let bookParaElem = document.createElement("span");
    resolveBookImage(imageElem, bookObj);
    bookParaElem.innerText = bookObj.getDetails();
    bookDivElem.after(newDivForBookElem);
    newDivForBookElem.append(imageElem);
    imageElem.after(bookParaElem);


}
window.onload = function(){
    one = new Book("The Lord of the Rings", "J.R.R. Tolkien", "Fantasy", 1954, 4);
    this.displayBook(one);

    two = new Book("Neuromancer", "William Gibson", "Sci-Fi", 1984, 3);
    this.displayBook(two);

    three = new Book("True Grit", "Charles Portis", "Western", 1968, 5);
    this.displayBook(three);

    four = new Book("Pride and Prejudice", "Jane Austen", "Romance", 1813, 1);
    this.displayBook(four);

    five = new Book("Frankenstein", "Mary Shelley", "Horror", 1823, 4);
    this.displayBook(five);
}