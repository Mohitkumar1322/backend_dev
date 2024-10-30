const express = require('express');
const morgan = require('morgan');
const app = express();
const dbConnection = require('./config/db');
const userModel = require('./models/user');
//this is the view engine that we are using  for the app

app.use(morgan('dev'))
//this is the view engine that we are using  for the app this morgan is used to log the request that we are making to the server
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
//this is the middleware that we are using for the app to parse the data that we are sending to the server
app.use(express.static('public'))
//this is the middleware that we are using for the app to use the static files that we are using for the app
app.use(express.json())


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

app.get('/register',(req, res) => {
    res.render('register')
})
app.post('/register',(req,res)=>{
    console.log(req.body)
    res.send('data recieved')
})


app.post('/form-data', async(req, res) => {
    console.log(req.body)
    //this is the object that we are using for the app to get the data that we are sending to the server

    const {username, email, password} = req.body;
    await userModel.create({
        username: username,
        email: email,
        password: password
    })

    //here i used await and 
    res.send('data recieves')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})