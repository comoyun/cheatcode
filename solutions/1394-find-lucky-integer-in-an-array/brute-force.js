// time: O(n ^ 2)
// space: O(1)

/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = arr => {
    let max = -1;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        let count = 0;
        for (let j = 0; j < arr.length; j++) arr[j] === num && count++;
        if (num === count) max = Math.max(max, num);
    }
    return max;
};
