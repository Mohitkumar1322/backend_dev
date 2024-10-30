const mongoose = require('mongoose');
//this is the mongoose that we are using for the app to connect to the database
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    gender:{
        type: String
    }
    

})