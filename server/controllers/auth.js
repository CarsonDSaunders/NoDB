const axios = require('axios');
const querystring = require('querystring');

module.exports = {
    getAuthKey: async () => {
        const clientId = 'b8da2c4a3dfe4490b4b37d5568d36213';
        const clientSecret = 'fd278899e58c401dbd9eba880a256beb';
        let token = '';

        const headers = {
            headers: {
                'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
        const data = {
            grant_type: 'client_credentials',
        };

        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            querystring.stringify(data),
            headers
        )
        return response;
    }
}