// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums1
 * @return {boolean}
 */
const uniformArray = nums1 => {
    let evenMin = Infinity;
    let oddMin = Infinity;

    for (const num of nums1) {
        if (num & 1) oddMin = Math.min(oddMin, num);
        else evenMin = Math.min(evenMin, num);
    }

    if (oddMin === Infinity || evenMin === Infinity || oddMin < evenMin)
        return true;
    return false;
};

