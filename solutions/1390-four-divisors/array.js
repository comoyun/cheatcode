// time: O(N * sqrt(K))
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const sumFourDivisors = nums => {
    let result = 0;

    const divisorSum = num => {
        let sum = 0;
        let count = 0;
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                count++;
                sum += i;

                if (num / i !== i) {
                    count++;
                    sum += num / i;
                }
            }

            if (count > 4) return 0;
        }

        if (count === 4) return sum;
        return 0;
    };

    for (const num of nums) result += divisorSum(num);

    return result;
};
