// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const minOperations = s => {
    const n = s.length;

    let min = 0;
    let max = 0;
    let sorted = true;

    for (let i = 1; i < n; i++) {
        if (s[i] < s[i - 1]) sorted = false;
        if (s[min] > s[i]) min = i;
        if (s[max] <= s[i]) max = i;
    }

    if (sorted) return 0;
    if (n === 2) return -1;
    if (min === 0 || max === n - 1) return 1;
    if (min === n - 1 && max === 0) return 3;
    return 2;
};
