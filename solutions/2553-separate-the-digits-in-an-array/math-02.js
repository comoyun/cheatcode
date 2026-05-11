// time: O(n * d)
// space: O(n * d)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const separateDigits = nums => {
    const result = [];

    const build = num => {
        if (!num) return;
        build((num / 10) | 0);
        result.push(num % 10);
    };

    for (let num of nums) build(num);

    return result;
};
