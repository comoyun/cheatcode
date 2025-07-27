// time: O(n)
// space: O(1)

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = arr => {
    let max = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        arr[i] = max;
        max = Math.max(max, num);
    }
    return arr;
};
