// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
const prefixesDivBy5 = nums => {
    const result = [];
    let n = 0;

    for (const num of nums) {
        n = (n * 2 + num) % 5;
        if (n === 0) result.push(true);
        else result.push(false);
    }

    return result;
};

