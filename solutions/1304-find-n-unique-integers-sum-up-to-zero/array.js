// time: O()
// space: O()

/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = n => {
    const mid = Math.floor(n / 2);
    const result = [];

    for (let i = -mid; i <= mid; i++) {
        if (i === 0 && n % 2 === 0) continue;
        result.push(i);
    }

    return result;
};
