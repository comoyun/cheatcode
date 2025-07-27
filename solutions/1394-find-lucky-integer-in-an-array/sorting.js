// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = arr => {
    arr.sort((a, b) => b - a);
    let i = 0;

    while (i < arr.length) {
        const num = arr[i];
        let count = 0;

        while (i < arr.length && arr[i] === num) {
            count++;
            i++;
        }

        if (num === count) return num;
    }

    return -1;
};
