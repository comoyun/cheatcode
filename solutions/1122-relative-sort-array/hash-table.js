// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
    const set = new Set(arr2);
    const freq = {};
    const unknown = [];
    let idx = 0;

    for (const num of arr1) {
        if (!set.has(num)) {
            unknown.push(num);
            continue;
        }
        freq[num] = (freq[num] || 0) + 1;
    }

    unknown.sort((a, b) => a - b);

    for (const num of arr2) while (freq[num]--) arr1[idx++] = num;
    for (const num of unknown) arr1[idx++] = num;

    return arr1;
};
