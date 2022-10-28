const axios = require('axios');
// GET request:
axios.get('https://www.anapioficeandfire.com/api/characters')
    .then(function (res) {
        console.log(res)
    })
    .catch(function (error) {
        console.log(error)
    });
