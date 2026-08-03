const book = {
    title: "JavaScript",
    author: "John Smith",
    pages: 350
};

console.log (book.title);
console.log (book.author);
console.log (book.pages);

book.price = 29.99;

console.log(book.publisher);
console.log(book.price);

delete book.author;
console.log (book);