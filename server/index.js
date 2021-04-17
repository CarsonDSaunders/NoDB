const express = require('express');
const search = require('./controllers/searchController');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.static('build'));

let searchResults = [];
let userList = [];
let itemId = 0;

//* Get Spotify Results
app.get('/search', async (req, res) => {
    searchResults = []
    const { searchTerm, searchType } = req.query;

    let results = await search.searchResults(searchType, searchTerm)
    searchResults = results;
    res.status(200).send(searchResults)
})

//* Interactions with UserList
app.get('/list', (req, res) => {
    res.status(200).send(userList);
})

app.post('/list/', (req, res) => {
    let newItem = req.body;
    newItem.listId = itemId;
    itemId++;
    userList.push(newItem);
    res.status(200).send(userList);
})

app.put('/list/:id', (req, res) => {
    const itemID  =  Number(req.params.id);
    let correctID = userList.findIndex((ele, i) => (userList[i].listId === itemID))
    userList[correctID].userNote = req.body.userNote;
    res.status(200).send(userList);
})

app.delete('/list/:id', (req, res) => {
    const itemID = req.params.id;
    let correctID = userList.findIndex((ele, i) => (userList[i].listId === itemID))
    userList.splice(correctID, 1)
    res.status(200).send(userList);
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));