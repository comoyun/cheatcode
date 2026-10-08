// time: O(n)
// space: O(n)

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = (encoded, first) => {
    const result = [first];

    for (const num of encoded) result.push(result.at(-1) ^ num);

    return result;
};

