const axios = require('axios');

const auth = require('./auth');

const searchType = 'album';
const searchTerm = 'OK Or'

module.exports = {
    searchResults: async () => {
        let results = [];
        let formattedResults = [];
        const authKey = await auth.getAuthKey().then((response) => response.data.access_token)
        const headers = {
            headers: {
                'Authorization': 'Bearer ' + authKey,
            }
        }

        try {
            const response = await axios.get(
                `https://api.spotify.com/v1/search?q=${searchTerm}&type=${searchType}&market=US&limit=3`,
                headers
            )
            .then(response => {
                results = response.data.albums.items
                for (let i = 0; i < results.length; i++) {
                    let currentItem = {}
                    currentItem.artist = results[i].artists[0].name;
                    currentItem.id = results[i].id;
                    currentItem.thumbnail = results[i].images[1];
                    currentItem.name = results[i].name;
                    formattedResults.push(currentItem);
                }
            })
            return results;
        } catch (error) {
            console.log(error);
        }
    }
}