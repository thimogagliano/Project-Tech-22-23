const express = require('express');
const app = express();
const port = 3000;

// use static folder in directory for serving static files
app.use(express.static('static'));

app.get('/home', (req, res) => {
    res.send('home')
});

app.get('/account', (req, res) => {
    res.send('account')
});

app.get('/list', (req, res) => {
    res.send('list')
});

app.get('/rsults-social', (req, res) => {
    res.send('results-social')
});

app.get('/results', (req, res) => {
    res.send('results')
});

app.get('/social', (req, res) => {
    res.send('social')
});

app.listen(port, () => {
    console.log("draait op port", port)
});

// error handling for routes not found
// https://expressjs.com/en/starter/faq.html#:~:text=In%20Express%2C%20404%20responses%20are,that%20none%20of%20them%20responded.
app.use((req, res, next) => {
    res.status(404).send("404! The route you searched for was not found!")
});