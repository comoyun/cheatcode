// time: O()
// space: O()

/**
 * @param {number} n
 * @return {number}
 */
const sumAndMultiply = n => {
    const cook = n => {
        let x = 0;
        let sum = 0;
        while (n) {
            const digit = n % 10;
            n = Math.floor(n / 10);

            if (digit === 0) continue;

            x *= 10;
            x += digit;
            sum += digit;
        }
        return { x, res: x * sum };
    };

    return cook(cook(n).x).res;
};


