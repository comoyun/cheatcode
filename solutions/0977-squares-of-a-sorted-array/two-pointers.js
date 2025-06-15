/*
 * @title: Two Pointers
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = nums => {
    const negatives = [],
        positives = [],
        result = [];

    for (const num of nums) {
        const square = num ** 2;
        if (num < 0) negatives.push(square);
        else positives.push(square);
    }

    negatives.reverse();

    const nlen = negatives.length,
        plen = positives.length;

    let left = 0,
        right = 0;
    while (left < nlen || right < plen) {
        const a = left < nlen ? negatives[left] : Infinity,
            b = right < plen ? positives[right] : Infinity;
        if (a < b) {
            result.push(a);
            left++;
            continue;
        }
        right++;
        result.push(b);
    }

    return result;
};

