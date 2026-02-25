// time: O(n log n)
// space: O(log n)

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = arr => {
    arr.sort(
        (a, b) =>
            a.toString(2).split('1').length -
                1 -
                (b.toString(2).split('1').length - 1) || a - b
    );

    return arr;
};
