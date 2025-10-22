// time: O(n)
// space: O(1)

/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = num => {
    let sum = 0;
    for (let i = 1; i < num; i++) 
        if (num % i === 0) sum += i;
    return sum === num;
};
