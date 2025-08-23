class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


const books = new Map();

const createBook = (title, author, isbn) => {
    const existingBook = books.has(isbn);

    if (existingBook) {
        return books.get(isbn);
    }
};

const createBook2 = (title, author, isbn) => {
    const existingBook = books.has(isbn);

    if (existingBook) {
        return books.get(isbn);
    }

    const book = new Book(title, author, isbn);
    books.set(isbn, book);

    return book;
};