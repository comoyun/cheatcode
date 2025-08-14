// time: O(n)
// space: O(1)

/**
 * @param {string} num
 * @return {string}
 */
const largestGoodInteger = num => {
    let result = '';

    for (let i = 2; i < num.length; i++)
        if (num[i] === num[i - 1] && num[i] === num[i - 2])
            result = Math.max(result, num.slice(i - 2, i + 1));

    return result;
};
