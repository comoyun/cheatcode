// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const maxDifference = s => {
    let oddMax, evenMin;
    const freq = new Array(26).fill(0);
    const getId = c => c.charCodeAt(0) - 97;

    evenMin = Infinity;
    oddMax = -Infinity;

    for (const char of s) freq[getId(char)]++;

    for (const count of freq) {
        if (!count) continue;
        const isOdd = count & 1;
        if (isOdd) {
            oddMax = Math.max(oddMax, count);
            continue;
        }
        evenMin = Math.min(evenMin, count);
    }

    return oddMax - evenMin;
};
