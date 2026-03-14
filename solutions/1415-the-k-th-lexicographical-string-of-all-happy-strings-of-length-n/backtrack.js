// time: O(exponential)
// space: O(exponential)

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getHappyString = (n, k) => {
    const happy = ['a', 'b', 'c'];
    let count = 0;

    const backtrack = (str = '') => {
        if (str.length === n) {
            count++;
            return count === k ? str : '';
        }

        for (let char of happy) {
            if (str.length && str[str.length - 1] === char) continue;
            const result = backtrack(str + char);
            if (result) return result;
        }

        return '';
    };

    return backtrack();
};

