// time: O(n ^ 2)
// space: O(n)

/**
 * @param {number[]} arr
 * @return {number}
 */
const subarrayBitwiseORs = arr => {
    /* WARNING: This solution gives TLE */
    const n = arr.length;
    const set = new Set();

    for (let i = 0; i < n; i++) {
        let or = 0;
        for (let j = i; j < n; j++) {
            or |= arr[j];
            set.add(or);
        }
    }

    return set.size;
};

