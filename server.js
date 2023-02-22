const express = require('express');
const app = express();
const port = 3000;

// set view engine to ejs
// https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
app.set('view engine', 'ejs');

// use static folder in directory for serving static files
app.use(express.static('static'));

app.get('/home', (req, res) => {
    res.render('./pages/home', { title: "Home" })
});

app.get('/account', (req, res) => {
    res.render('./pages/account', { title: "Account" })
});

app.get('/list', (req, res) => {
    res.render('./pages/list', { title: "List" })
});

app.get('/results-social', (req, res) => {
    res.render('./pages/results-social', { title: "Resutls-social" })
});

app.get('/results', (req, res) => {
    res.render('./pages/results', { title: "Results" })
});

app.get('/social', (req, res) => {
    res.render('./pages/social', { title: "Social" })
});

app.listen(port, () => {
    console.log("draait op port", port)
});

// error handling for routes not found
// https://expressjs.com/en/starter/faq.html#:~:text=In%20Express%2C%20404%20responses%20are,that%20none%20of%20them%20responded.
app.use((req, res, next) => {
    res.status(404).send("404! The route you searched for was not found!")
});