const express = require('express');
const main = require('./controllers/mainController')
const search = require('./controllers/searchController');
const PORT = process.env.PORT || 8080;

const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static('build'));

let results = search.searchResults()

//Get Spotify Results
app.get('/search', )
// app.get('/api/', main.get)

app.listen(PORT, () => console.log(`listening on port ${PORT}`));