// time: O((num2−num1)log(num2))
// space: O(1)

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const totalWaviness = (num1, num2) => {
    let result = 0;
    const getDigits = num => {
        const digits = [];

        while (num) {
            const digit = num % 10;
            num = Math.floor(num / 10);
            digits.push(digit);
        }

        return digits;
    };

    const getWaviness = num => {
        const digits = getDigits(num);
        let result = 0;

        for (let i = 1; i < digits.length - 1; i++) {
            const prev = digits[i - 1];
            const curr = digits[i];
            const next = digits[i + 1];

            if ((prev > curr && next > curr) || (prev < curr && next < curr))
                result++;
        }
        return result;
    };

    for (let i = num1; i <= num2; i++) result += getWaviness(i);

    return result;
};

