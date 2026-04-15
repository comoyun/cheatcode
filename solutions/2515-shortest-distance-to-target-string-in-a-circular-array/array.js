// time: O(n)
// space: O(1)

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
const closestTarget = (words, target, startIndex) => {
    let res = Infinity;
    const n = words.length;

    for (let i = 0; i < n; i++) {
        if (words[i] === target) {
            const dist = Math.abs(i - startIndex);
            res = Math.min(res, dist, n - dist);
        }
    }

    return res === Infinity ? -1 : res;
};
