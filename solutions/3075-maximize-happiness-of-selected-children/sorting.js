// time: O(N)
// space: O(log N)

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
const maximumHappinessSum = (happiness, k) => {
    let result = 0;
    happiness.sort((a, b) => b - a);
    for (let i = 0; i < k && happiness[i] > i; i++) {
        result += happiness[i] - i;
    }
    return result;
};

