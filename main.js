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
    displayLibrary();
}

function displayLibrary(){
    const libraryDisplay = document.getElementById("libraryDisplay");
    libraryDisplay.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement("div");
        bookElement.innerHTML= `<p><strong>${book.title} </strong> by ${book.author} - ${book.pages} pages</p>
        <button onclick="removeBook(${index})">Remove</button>
        `;
        libraryDisplay.appendChild(bookElement);
    });
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayLibrary();
}

document.getElementById("bookForm").addEventListener("submit", function(event){
    event.preventDefault();

    const title= document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = document.getElementById("pages").value.trim();

    if (title && author && pages) {
        addBookToLibrary(title, author, parseInt(pages));
        this.reset(); // Clears form after submission
    }
    displayLibrary();
});