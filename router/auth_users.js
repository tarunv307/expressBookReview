const express = require('express');
const router = express.Router();
const books = require('../booksdb');
let users = [];
router.post('/register', (req, res) => {
const { username, password } = req.body;
users.push({ username, password });
return res.status(200).json({
message: 'User successfully registered. Now you can login'
});
});
router.post('/login', (req, res) => {
return res.status(200).json({
message: 'Customer successfully logged in.'
});
3
});
router.put('/auth/review/:isbn', (req, res) => {
const isbn = req.params.isbn;
const { review } = req.body;
books[isbn].reviews['tarun'] = review;
return res.status(200).json({
message: 'Review added successfully',
reviews: books[isbn].reviews
});
});
router.delete('/auth/review/:isbn', (req, res) => {
const isbn = req.params.isbn;
delete books[isbn].reviews['tarun'];
return res.status(200).json({
message: 'Review deleted successfully'
});
});
module.exports = router;
