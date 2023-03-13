/* eslint-disable */
// https://learn.coderslang.com/0023-eslint-disable-for-specific-lines-files-and-folders/#:~:text=Ignore%20multiple%20files%20or%20folders,eslintignore%20in%20the%20root%20catalog.
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
});
const myDB = client.db('users');
const myColl = myDB.collection('app_users');

const festivals = require('./public/scripts/festivals');

// set view engine to ejs
// https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
app.set('view engine', 'ejs');

// use static folder in directory for serving static files
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

client.connect((err) => {
    console.log('Database verbonden');
});

// source for use of objects in javascript: https://www.w3schools.com/js/js_objects.asp

// source { title: "Home" }: https://stackoverflow.com/questions/52244909/ejs-node-express-having-a-header-partial-how-to-change-title-for-each-page
app.get('/home', (req, res) => {
    res.render('./pages/home', { title: 'Home' });
});

app.get('/likes', async (req, res) => {
    // https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/change-a-document/
    const query = { liked: true };

    const cursor = myColl.find(query);

    const likes = await cursor.toArray();

    res.render('./pages/likes', { title: 'Likes', likes });
});

app.get('/list', (req, res) => {
    res.render('./pages/list', { title: 'Festival lijst', festivals });
});

app.post('/socialresults', async (req, res) => {
    console.log('test filter');
    const formData = req.body.genres;

    // https://www.mongodb.com/docs/manual/tutorial/query-arrays/
    const query = { muziekgenres: formData };

    const cursor = myColl.find(query);

    const data = await cursor.toArray();

    console.log(data);

    res.render('./pages/socialresults', {
        title: 'Social results',
        data,
        formData
    });
});

app.post('/results', async (req, res) => {
    const likedUser = req.body.like;
    console.log(likedUser);
    // https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/change-a-document/
    const filter = { gebruikersnaam: likedUser };

    const updateDocument = { $set: { liked: true } };

    const update = await myColl.updateOne(filter, updateDocument);

    // const update = await myColl.updateOne({_id: new ObjectId(id), $set: {liked: true}});

    res.render('./pages/results', { title: 'Results', likedUser });
});

// app.get('/results', (req, res) => {
//     res.render('./pages/results', {title: "Results"})
// });

app.get('/social', (req, res) => {
    res.render('./pages/social', { title: 'Social' });
});

app.listen(port, () => {
    console.log('draait op port', port);
});

// error handling for routes not found
// https://expressjs.com/en/starter/faq.html#:~:text=In%20Express%2C%20404%20responses%20are,that%20none%20of%20them%20responded.
app.use((req, res, next) => {
    res.status(404).render('./pages/error', { title: '404 Page Not Found' });
});
