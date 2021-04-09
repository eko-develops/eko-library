//Get the form form the DOM
const form = document.querySelector('#library-form');

//Is form the best way to do this exercise?*
form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBook(event);
});



//Set an empty array for the library
let library = [];

/*Purpose:
This function will be used when the form is submitted.
It will get the values from the inputs using the event object
and create a new 'Book' object based on the values. The newly
created object will then be inserted into the library array.
*/ 
function addBook(event){
    //console.log(event);

    //Get the data from the event object
    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    const pages = event.target.elements.pages.value;
    
    //Create a new book object everytime a new submission is made
    const book = new Book(title, author, pages);
    library.push(book);
    

    const div = document.createElement('div');
    div.classList.toggle('book-card');

    const bookTitle = document.createElement('h2');
    const titleSpan = document.createElement('span');
    bookTitle.classList.toggle('book-title');
    bookTitle.textContent = book.title;
    titleSpan.textContent = 'Title: ';


    const bookAuthor = document.createElement('h3');
    const authorSpan = document.createElement('span');
    bookAuthor.classList.toggle('book-author');
    bookAuthor.textContent = book.author;
    authorSpan.textContent = 'Author: ';
    

    const bookPages = document.createElement('span');
    const pagesSpan = document.createElement('span');
    bookPages.classList.toggle('book-pages');
    bookPages.textContent = book.pages;
    pagesSpan.textContent = 'How many pages read: ';

    const deleteBook = document.createElement('button');
    deleteBook.classList.add('delete-book', 'submit-book');
    deleteBook.textContent = 'Delete Book';

    
    div.append(titleSpan);
    div.append(bookTitle);
    div.append(authorSpan);
    div.append(bookAuthor);
    div.append(pagesSpan);
    div.append(bookPages);
    div.append(deleteBook);

    document.querySelector('#library-collection').append(div);
}

/*Purpose:
This function is an object constructor for creating a
'Book' object. It accepts 3 parameters, title (text), author (text),
pages (int). It is used when the function addBook is called.
*/ 
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

