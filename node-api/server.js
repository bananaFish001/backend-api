const express = require('express');
const app = express();
const mongoose = require('mongoose');


// Routes
app.get('/', (req, res) => {
    res.send('Hello Node API')
});

app.get('/blog', (req, res) => {
    res.send('Saying hello in the blog with a big smile')
})



mongoose.connect('mongodb+srv://raj123rs308:g7pBsFmAdqRo5bXB@bananaapi.zvpq8yr.mongodb.net/?retryWrites=true&w=majority&appName=bananaAPI').then(() => {
    console.log('Connected to Mongodb database.');
    app.listen(3000, () => {
        console.log(`Node API app cis running on port 3000   `)
    });
}).catch((error) => {
    console.log(error)
})