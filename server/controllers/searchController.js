const axios = require('axios');

const auth = require('./auth');



module.exports = {
    searchResults: async (searchType, searchTerm) => {
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
                .then(async (response) => {
                    if (searchType === 'album') {
                        results = response.data.albums.items
                        for (let i = 0; i < results.length; i++) {
                            let currentItem = {}
                            currentItem.artist = results[i].artists[0].name;
                            currentItem.id = results[i].id;
                            currentItem.thumbnail = results[i].images[1].url;
                            currentItem.title = results[i].name;
                            const popResponse = await axios.get(
                                `https://api.spotify.com/v1/albums/${currentItem.id}`,
                                headers
                            )
                                .then(response => currentItem.popularity = response.data.popularity);
                            formattedResults.push(currentItem);
                        }
                    } else if (searchType === 'artist') {
                        results = response.data.artists.items
                        for (let i = 0; i < results.length; i++) {
                            let currentItem = {}
                            currentItem.id = results[i].id;
                            currentItem.thumbnail = results[i].images[1].url;
                            currentItem.name = results[i].name;
                            currentItem.popularity = results[i].popularity;
                            formattedResults.push(currentItem);
                        }
                    } else if (searchType ==="track") {
                        results = response.data.tracks.items
                        for (let i = 0; i < results.length; i++) {
                            let currentItem = {}
                            currentItem.artist = results[i].artists[0].name;
                            currentItem.id = results[i].id;
                            currentItem.thumbnail = results[i].album.images[1].url;
                            currentItem.title = results[i].name;
                            currentItem.popularity = results[i].popularity;
                            formattedResults.push(currentItem);
                        }
                    }
                })
            return formattedResults;
        } catch (error) {
            console.log(error);
        }
    }
}