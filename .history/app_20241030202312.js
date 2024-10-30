const express = require('express');

const app = express();

app.set

// routing for the app express is a function that returns an object
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})