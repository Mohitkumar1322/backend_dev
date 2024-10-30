const express = require('express');
const morgan = require('morgan');
const app = express();
//this is the view engine that we are using  for the app

app.use(morgan('dev'))
//this is the view engine that we are using  for the app this morgan is used to log the request that we are making to the server
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

app.get('form-data', (req, res) => {
    res.render(req.query);
    res.send('form data');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})