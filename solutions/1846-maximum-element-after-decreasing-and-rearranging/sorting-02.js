// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumElementAfterDecrementingAndRearranging = arr => {
    const n = arr.length;
    const smaller = [];
    let bigger = 0;

    for (const num of arr) {
        if (num >= n) bigger++;
        else smaller.push(num);
    }

    smaller.push(0);
    smaller.sort((a, b) => a - b);

    for (let i = 1; i < smaller.length; i++) {
        const prev = smaller[i - 1];
        const curr = smaller[i];

        if (curr - prev > 1) smaller[i] = prev + 1;
    }

    return bigger + smaller[smaller.length - 1];
};
