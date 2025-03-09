function Book(title, author, pages){

    if(!new.target){
        throw Error("Cant use with withou new operator");
    };
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.info = function(){
        console.log(this.title);
        console.log(this.author);
        console.log("This book has ", this.pages)
    }

}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295);

