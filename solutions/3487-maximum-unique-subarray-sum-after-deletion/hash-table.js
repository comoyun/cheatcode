// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSum = nums => {
    const set = new Set([...nums]);
    let pos = -Infinity;
    let neg = -Infinity;
    for (const num of set) {
        if (num > 0) {
            if (pos === -Infinity) pos = 0;
            pos += num;
            continue;
        }
        neg = Math.max(neg, num);
    }
    return Math.max(pos, neg);
};
