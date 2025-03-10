const myLibrary = [];

function Book(title, author, pages, id){

   /* if(!new.target){
        throw Error("Cant use with withou new operator");
    };*/
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.info = function(){
        console.log(this.title);
        console.log(this.author);
        console.log("This book has ", this.pages, "pages")
    }

}

function addBookToLibrary(title, author, pages){
    Book.title = title;
    Book.author = author;
    Book.pages = pages;
    Book.id = crypto.randomUUID();
    myLibrary.push(Book);
}

function displayLibrary(){
    for (let i = 0; i < myLibrary.length; i++)
    {
        console.log (myLibrary[i]);
    }
}

addBookToLibrary("Hobbit", "J.R.R Tolkien", 255);
displayLibrary();