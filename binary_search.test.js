const { describe, it } = require('node:test');
const assert = require('node:assert');

const binary_search = require('./binary_search');

describe('binary_search', ()=>{
    it('should return 2 when input = [1,2,3] and item exists', ()=>{
        const input = [1,2,3];
        const search_term = 2
        const result = binary_search(input, search_term)
        const expectation = 2
        assert.strictEqual(result, expectation);
    });

    it('should return 2 when input = [2,3,4] and item exists', ()=>{
        const input = [2,3,4];
        const search_term = 2
        const result = binary_search(input, search_term)
        const expectation = 2
        assert.strictEqual(result, expectation);
    })

    it('should return 4 when input = [2,3,4] and item exists', ()=>{
        const input = [2,3,4];
        const search_term = 4
        const result = binary_search(input, search_term)
        const expectation = 4
        assert.strictEqual(result, expectation);
    })

    it('should return undefined when input = []', ()=>{
        const input = [];
        const search_term = 4
        const result = binary_search(input, search_term)
        const expectation = undefined
        assert.strictEqual(result, expectation);
    })

    it('should return undefined when input = [1,2,3] and item does not exist', ()=>{
        const input = [1,2,3];
        const search_term = 4
        const result = binary_search(input, search_term)
        const expectation = undefined
        assert.strictEqual(result, expectation);
    })

    it('should return 5 when input = [1,2,3,4,5,6,7,8,9,10] and item doesgit  exist', ()=>{
        const input = [1,2,3,4,5,6,7,8,9,10];
        const search_term = 5
        const result = binary_search(input, search_term)
        const expectation = 5
        assert.strictEqual(result, expectation);
    })
});