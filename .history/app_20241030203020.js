const express = require('express');
const 
const app = express();
//this is the view engine that we are using  for the app
app.set('view engine', 'ejs');


//this is middlware that we are using for the app 
app.use((req, res, next) => {
    console.log('Middleware is running')
    //this is the next function that we are using for the app which is used to move to the next middleware
    return next();
    
})


// routing for the app express is a function that returns an object
app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})