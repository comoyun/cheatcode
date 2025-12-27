// time: O(N * M)
// space: O(N)

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = arr => {
    // I feel stupid. The target is obviously total / 3
    // This is what happens when you code without thinking first

    const sums = {};
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        sums[sum] ??= i;
    }

    sum = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        sum += arr[i];

        if (sum in sums && sums[sum] < i) {
            const left = sums[sum];
            const right = i;
            let mid = null;

            for (let j = left + 1; j < right; j++) {
                if (mid === null) mid = 0;
                mid += arr[j];
            }

            if (mid === sum) return true;
        }
    }

    return false;
};
