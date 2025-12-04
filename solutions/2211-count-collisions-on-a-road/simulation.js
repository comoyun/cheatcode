// time: O(n)
// space: O(1)

/**
 * @param {string} directions
 * @return {number}
 */
const countCollisions = directions => {
    let result = 0;
    let right = 0;
    let c = false;

    for (const d of directions) {
        if (d === 'R') right++;

        if (d === 'S') {
            result += right;
            right = 0;
            c = true;
        }

        if (d === 'L' && right) {
            result += right + 1;
            right = 0;
            c = true;
        } else if (d === 'L' && c) {
            result++;
        }
    }

    return result;
};
