// time: O(N)
// space: O(N)

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = arr => {
    // I feel stupid. The target is obviously total / 3
    // This is what happens when you code without thinking first

    const sums = {};
    const prefix = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        sums[sum] ??= i;
    }

    sum = 0;
    for (const num of arr) {
        sum += num;
        prefix.push(sum);
    }

    sum = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        sum += arr[i];

        if (sum in sums && sums[sum] < i - 1) {
            const left = sums[sum];
            const right = i;
            const mid = prefix[right - 1] - prefix[left];
            if (mid === sum) return true;
        }
    }

    return false;
};
