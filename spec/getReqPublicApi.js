const axios = require('axios');

// GET test:
describe('GET request', () => {


    it('Check body', (done) => {
        axios.get('https://www.anapioficeandfire.com/api/characters')
            .then(function (response) {
                expect(Array.isArray(response.data)).toBe(true);
                done();
            })
    });
    it('Check status', (done) => {
        axios.get('https://www.anapioficeandfire.com/api/characters')
            .then(function (response) {
                expect(response.status).toBe(200);
                done();
            })
    });
});