const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('Hello Node API')
});

app.get('/blog', (req, res) => {
    res.send('Saying hello in the blog with a big smile')
})

app.listen(3000, () => {
    console.log(`Node API app cis running on port 3000   `)
})