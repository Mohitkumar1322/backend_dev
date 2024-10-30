const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/men').then(() => {
    console.log('Database is connected');
} ).catch((err) => {
    console.log('Database is not connected');
})
    