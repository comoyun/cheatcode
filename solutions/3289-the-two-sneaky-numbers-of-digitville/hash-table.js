// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSneakyNumbers = nums => {
    const freq = new Array(100).fill(0);
    const repeated = [];

    for (const num of nums) 
        if (++freq[num] === 2) repeated.push(num);

    return repeated;
};
