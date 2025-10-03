// time: O(nm)
// space: O(1)

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
    let result = 0;
    for (const stone of stones) if (jewels.indexOf(stone) !== -1) result++;
    return result;
};

