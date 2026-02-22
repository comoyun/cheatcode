// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParityII = nums => {
    const arr = [[], []];
    const result = [];

    for (const num of nums) arr[num % 2].push(num);
    for (let i = 0; i < arr[0].length; i++) {
        result.push(arr[0][i]);
        result.push(arr[1][i]);
    }

    return result;
};

