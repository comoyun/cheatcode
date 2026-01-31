// time: O(log N)
// space: O(1)

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
    let left = 0;
    let right = letters.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (letters[mid] > target) right = mid - 1;
        else left = mid + 1;
    }

    return left === letters.length ? letters[0] : letters[left];
};

