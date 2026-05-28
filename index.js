const express = require('express');
const bodyParser = require('body-parser');
const public_users = require('./router/general');
const regd_users = require('./router/auth_users');

const app = express();

app.use(bodyParser.json());

app.use('/', public_users);
app.use('/customer', regd_users);

// optional but good
app.get('/', (req, res) => {
    res.send("Book Review API is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});