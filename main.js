const myLibrary = [];

function Book(title, author, pages, id){

   if (!new.target){
        throw Error("Cant use with withou new operator");
    };
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();

    this.info = function(){
        console.log(this.title);
        console.log(this.author);
        console.log("This book has ", this.pages, "pages")
    }

}

function addBookToLibrary(title, author, pages){
    const book = new Book(title, author, pages);
    myLibrary.push(book);
}

function displayLibrary(){
    for (let i = 0; i < myLibrary.length; i++)
    {
        console.log(myLibrary[i]);
    }
}

addBookToLibrary("Hobbit", "J.R.R Tolkien", 255);
displayLibrary();