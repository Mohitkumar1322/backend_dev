const express = require('express');

const app = express();

// routing for the app express is 
app.get('/', (req, res) => {
    res.send('Hello World');
})