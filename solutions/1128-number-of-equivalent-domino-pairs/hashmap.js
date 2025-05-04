/*
 * @title: Hashmap
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = dominoes => {
    const map = {};
    let pairs = 0;
    for (let [d1, d2] of dominoes) {
        if (d1 > d2) [d1, d2] = [d2, d1];
        const key = `${d1},${d2}`;
        map[key] = (map[key] || 0) + 1;
    }

    for (const key in map) 
        pairs += (map[key] * (map[key] - 1)) / 2;

    return pairs;
};
