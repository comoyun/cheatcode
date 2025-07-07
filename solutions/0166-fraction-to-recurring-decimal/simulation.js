/*
 * @title: Type
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
const fractionToDecimal = (numerator, denominator) => {
    const sign = numerator * denominator >= 0;
    const memo = {};
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    numerator = numerator.toString();
    denominator = Number(denominator);

    let ptr = 0;
    let result = '';
    let carry = '';
    let dotUsed = false;
    let hasRepeatingDigits = false;
    let start = -1;

    while (ptr < numerator.length) {
        carry += numerator[ptr];
        carry = carry.replace(/^0+/, '');

        if (dotUsed && carry in memo) {
            hasRepeatingDigits = true;
            start = memo[carry];
            break;
        }

        const digit = Math.floor(Number(carry) / denominator);
        const sub = Number(carry) - denominator * digit;
        if (dotUsed) memo[carry] = result.length - result.indexOf('.') - 1;
        carry = sub.toString();
        result += digit;

        if (ptr === numerator.length - 1 && carry !== '0') {
            if (!dotUsed) {
                result += '.';
                dotUsed = true;
            }
            numerator += '0';
        }

        ptr++;
    }

    if (hasRepeatingDigits) {
        const dotIndex = result.indexOf('.') + 1;
        const left = result.slice(0, dotIndex + start);
        const pattern = result.slice(dotIndex + start);
        result = `${left}(${pattern})`;
    }

    while (result.length && result[0] === '0') result = result.slice(1);
    if (!result.length || result[0] === '.') result = '0' + result;
    if (!sign && result !== '0') result = '-' + result;

    return result;
};

