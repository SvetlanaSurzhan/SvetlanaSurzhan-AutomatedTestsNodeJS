const axios = require('axios');

// GET test:
describe('GET request', () => {
    it('GET data', (done) => {
        axios.get('https://www.anapioficeandfire.com/api/characters')
            .then(function (res) {
                expect(Array.isArray(res.data)).toBe(true);
                done();
            })
    });
});