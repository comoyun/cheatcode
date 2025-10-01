// time: O()
// space: O()

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = (numBottles, numExchange) => {
    let result = 0;
    let full = numBottles;
    let empty = 0;

    while (full) {
        result += full;
        empty += full;
        full = Math.floor(empty / numExchange); 
        empty = empty % numExchange; 
    }

    return result;
};
