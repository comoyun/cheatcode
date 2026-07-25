// time: O(d^2)
// space: O(d)

/**
 * @param {number} n
 * @return {number}
 */
const maxProduct = n => {
    const str = n.toString();
    const len = str.length;
    let result = 0;

    for (let i = 0; i < len - 1; i++)
        for (let j = i + 1; j < len; j++)
            result = Math.max(result, Number(str[i]) * Number(str[j]));

    return result;
};

