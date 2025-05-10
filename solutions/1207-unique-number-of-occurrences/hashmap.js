/*
 * @title: Hashmap
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = arr => {
    const freq = {},
        counts = new Array(arr.length).fill(0);

    for (const num of arr) freq[num] = (freq[num] || 0) + 1;

    for (const num in freq) {
        const count = freq[num];
        if (counts[count - 1]) return false;
        counts[count - 1]++;
        delete freq[num];
    }

    return true;
};
