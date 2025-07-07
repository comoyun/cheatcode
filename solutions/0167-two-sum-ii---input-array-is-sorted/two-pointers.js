/*
 * @title: Two Pointers
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const a = numbers[left];
        const b = numbers[right];
        if (a + b > target) right--;
        else if (a + b < target) left++;
        else return [left + 1, right + 1];
    }

    return [-1, -1];
};
