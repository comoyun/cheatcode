// time: O()
// space: O()

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const maxBottlesDrunk = (numBottles, numExchange) => {
    let drunk = 0;
    let empty = 0;
    let full = numBottles;

    while (full > 0 || empty >= numExchange) {
        drunk += full;
        empty += full;
        full = 0;

        if (empty >= numExchange) {
            empty -= numExchange;
            full += 1;
        }
    }

    return drunk;
};

