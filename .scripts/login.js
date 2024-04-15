const axios = require("axios");
const baseUrl = bru.getEnvVar("baseUrl");

async function login(username, password) {
    const options = {
        method: "POST",
        url: `${baseUrl}/users/login`,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json, text/plain, */*",
            "Connection": "keep-alive"
        },
        data: {
            "user": {
                "email": username,
                "password": password
            }
        }
    }
    const response = await axios.request(options);
    return response.data.user.token;
}

module.exports = login;