const express = require('express');
const app = express();
const port = 3000;

// source for use of objects in javascript: https://www.w3schools.com/js/js_objects.asp
const genres = ['Techno', 'House', 'Hardstyle', 'Hardcore', 'R&B', 'Up-tempo', 'Pop', 'Hip-hop', 'Rock', 'Reggae'];

const users = [
    {
        gebruikersnaam: 'Festival fanaat',
        leeftijd: 23,
        muziekgenres: ['Techno', 'House', 'Hip-hop'],
    },
    {
        gebruikersnaam: 'Muziekliefhebber',
        leeftijd: 21,
        muziekgenres: ['Techno', 'House', 'Hardcore', 'Pop', 'Rock', 'Reggae'],
    },
    {
        gebruikersnaam: 'Partyy',
        leeftijd: 24,
        muziekgenres: ['Hardcore', 'Up-tempo'],
    },
    {
        gebruikersnaam: 'Techno4life',
        leeftijd: 19,
        muziekgenres: ['Techno'],
    },
    {
        gebruikersnaam: 'OnlyHouse',
        leeftijd: 26,
        muziekgenres: ['House'],
    },
    {
        gebruikersnaam: 'festivalrookie',
        leeftijd: 18,
        muziekgenres: ['Techno', 'House', 'Hardstyle', 'Hardcore', 'R&B', 'Up-tempo', 'Pop', 'Hip-hop', 'Rock', 'Reggae'],
    },
    {
        gebruikersnaam: 'Muziekveteraan',
        leeftijd: 23,
        muziekgenres: ['R&B', 'Pop', 'Reggae'],
    },
    {
        gebruikersnaam: 'Neverskiphouse',
        leeftijd: 23,
        muziekgenres: ['Techno', 'House'],
    }
];

// set view engine to ejs
// https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
app.set('view engine', 'ejs');

// use static folder in directory for serving static files
app.use(express.static('static'));

// source { title: "Home" }: https://stackoverflow.com/questions/52244909/ejs-node-express-having-a-header-partial-how-to-change-title-for-each-page
app.get('/home', (req, res) => {
    res.render('./pages/home', {title: "Home"})
});

app.get('/account', (req, res) => {
    res.render('./pages/account', {title: "Account"})
});

app.get('/list', (req, res) => {
    res.render('./pages/list', {title: "List"})
});

app.get('/results-social', (req, res) => {
    res.render('./pages/results-social', {title: "Results-social"})
});

app.get('/results', (req, res) => {
    res.render('./pages/results', {title: "Results"})
});

app.get('/social', (req, res) => {
    res.render('./pages/social', {title: "Social", users, genres},)
});

app.listen(port, () => {
    console.log("draait op port", port)
});

// error handling for routes not found
// https://expressjs.com/en/starter/faq.html#:~:text=In%20Express%2C%20404%20responses%20are,that%20none%20of%20them%20responded.
app.use((req, res, next) => {
    res.status(404).send("404! The route you searched for was not found!")
});