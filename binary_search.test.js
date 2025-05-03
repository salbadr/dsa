const { describe, it } = require('node:test');
const assert = require('node:assert');

const binary_search = require('./binary_search');

describe('binary_search', ()=>{
    it('should return 2', ()=>{
        const input = [1,2,3];
        const search_term = 2
        const result = binary_search(input, search_term)
        const expectation = 2
        assert.strictEqual(result, expectation);
    })
});