// time: O(log n)
// space: O(1)

/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = citations => {
    let left = 0;
    let right = citations.length - 1;
    let result = 0;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const count = citations.length - mid;

        if (citations[mid] >= count) {
            result = count;
            right = mid - 1;
            continue;
        }

        left = mid + 1;
    }

    return result;
};
