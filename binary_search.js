/**
 * Given an ordered array, implement binary search to find an item
 */



function binary_search(arr, search_term){
    const middle_index = Math.round(arr.length/2)-1;
    const middle_item = arr[middle_index];
    if( middle_item ===search_term){
        return middle_item;
    }
    else if( search_term<middle_item){
        return binary_search(arr.slice(0,middle_index), search_term)

    }
    else if( search_term>middle_item){
        return binary_search(arr.slice(middle_index+1), search_term)

    }

    return undefined;
}

module.exports = binary_search;