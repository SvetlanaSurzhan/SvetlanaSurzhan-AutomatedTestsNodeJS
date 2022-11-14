const axios = require('axios');
// POST request:
axios({
    method: 'post',
    url: 'https://api.checklistsl.com/api/checklist',
    data: {
        name: 'Kroger'
    },
    auth: {
        username: 'lana',
        password: 'lanabanana22'
    }
});
// GET request:
axios({
    method: 'get',
    url: 'https://api.checklistsl.com/api/checklist',
    responseType: 'json'
})
    .then(function (response) {
        console.log(response);
    });