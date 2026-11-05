// time: O(n log n)
// space: O(m)

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = (arr1, arr2, d) => {
    const sorted = [...arr2].sort((a, b) => a - b);
    const m = sorted.length;
    let result = 0;

    for (const target of arr1) {
        let left = 0,
            right = m - 1,
            found = false;

        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            if (sorted[mid] > target) right = mid - 1;
            else if (sorted[mid] < target) left = mid + 1;
            else {
                found = true;
                break;
            }
        }

        if (found) continue;

        const diff = Math.min(
            right >= 0 ? target - sorted[right] : Infinity,
            left < m ? sorted[left] - target : Infinity
        );

        if (diff > d) result++;
    }

    return result;
};
