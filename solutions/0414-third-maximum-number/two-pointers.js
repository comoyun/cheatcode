/*
 * @title: Two Pointers
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = nums => {
    let first = -Infinity,
        second = -Infinity,
        third = -Infinity;

    for (const num of nums) {
        if (num === first || num === second || num === third) continue;

        if (num > first) [first, second, third] = [num, first, second];
        else if (num > second) [second, third] = [num, second];
        else if (num > third) third = num;
    }

    return third === -Infinity ? first : third;
};

