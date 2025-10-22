// time: O(sqrt(n))
// space: O(1)

/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = num => {
    if (num === 1) return false;

    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }

    return sum === num;
};
