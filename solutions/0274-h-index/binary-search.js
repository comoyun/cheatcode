// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = citations => {
    let left = 0;
    let right = citations.length;
    let result = 0;

    const getCount = num => {
        let count = 0;
        for (const n of citations) if (n >= num) count++;
        return count;
    };

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (getCount(mid) >= mid) {
            result = mid;
            left = mid + 1;
            continue;
        }
        right = mid - 1;
    }

    return result;
};

