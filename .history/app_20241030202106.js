const express = require('express');

const app = express();

// routing for the app express is a function that returns an object
app.get('/', (req, res) => {
    res.send('Hello World');
})