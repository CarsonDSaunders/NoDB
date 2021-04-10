const express = require('express');
const search = require('./controllers/searchController');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.static('build'));

let searchResults = [];
let userList = [];
let itemId = 0;

//Get Spotify Results
app.get('/search', async (req, res) => {
    searchResults = []
    const { searchTerm, searchType } = req.query;

    let results = await search.searchResults(searchType, searchTerm)
    searchResults = results;
    res.status(200).send(searchResults)
})

app.get('/list', (req, res) => {
    res.status(200).send(userList);
})

app.post('/list/:id', (req, res) => {
    let currentId = req.params.id;
    let newItem = { ...searchResults[currentId] };
    newItem.listId = itemId;
    itemId++;
    userList.push(newItem);
    res.status(200).send(userList);
})

app.put('/list', (req, res) => {
    userList[1].note = req.body.note; //req.body.note
    res.status(200).send(userList);
})

app.delete('/list', (req, res) => {
    userList.splice(1, 1)
    res.status(200).send(userList);
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));