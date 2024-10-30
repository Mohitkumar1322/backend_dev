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
    

})

const userModal = mongoose.model('user', userSchema);  //this is the model that we are using for the app to create the schema for the app
module.exports = userModal; //this is the module that we are using for the app to export the model that we are using for the app
