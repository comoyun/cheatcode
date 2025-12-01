// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = s => {
    const check = skipLeft => {
        let left = 0;
        let right = s.length - 1;
        let skip = false;

        while (left <= right) {
            if (s[left] === s[right]) {
                left++;
                right--;
                continue;
            }

            if (skip) return false;

            skip = true;
            skipLeft ? left++ : right--;
        }

        return true;
    };

    return check(true) || check(false);
};

/*

to be refactored

const validPalindrome = s => {
    let left = 0;
    let right = s.length - 1;
    let skip = -1;

    while (left <= right) {
        const lc = s[left];
        const rc = s[right];

        if (lc !== rc && skip === -1) {
            left++;
            skip = 0;
            continue;
        }

        if (lc !== rc && skip === 0) {
            skip = 1;
            break;
        }

        left++;
        right--;
    }

    if (skip <= 0) return true;
    skip = -1;
    left = 0;
    right = s.length - 1;

    while (left <= right) {
        const lc = s[left];
        const rc = s[right];

        if (lc !== rc && skip === -1) {
            right--;
            skip = 0;
            continue;
        }

        if (lc !== rc && skip === 0) {
            skip = 1;
            break;
        }

        left++;
        right--;
    }

    if (skip <= 0) return true;

    return false;
};

*/
