const express = require('express');
const router = express.Router();
const books = require('../booksdb');
router.get('/', function (req, res) {
return res.status(200).json(books);
});
router.get('/isbn/:isbn', function (req, res) {
const isbn = req.params.isbn;
return res.status(200).json(books[isbn]);
});
router.get('/author/:author', function (req, res) {
const author = req.params.author;

const filteredBooks = Object.values(books).filter(
(book) => book.author === author
);
return res.status(200).json(filteredBooks);
});
router.get('/title/:title', function (req, res) {
const title = req.params.title;
const filteredBooks = Object.values(books).filter(
(book) => book.title === title
);
return res.status(200).json(filteredBooks);
});
router.get('/review/:isbn', function (req, res) {
const isbn = req.params.isbn;
return res.status(200).json({
reviews: books[isbn].reviews
});
});
module.exports = router;