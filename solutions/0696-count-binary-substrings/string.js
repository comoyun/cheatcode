// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = s => {
    const arr = [];
    let lastChar = null;
    let count = 0;
    let result = 0;

    for (const char of s) {
        if (lastChar && char !== lastChar) {
            arr.push(count);
            count = 0;
        }

        lastChar = char;
        count++;
    }

    if (count) arr.push(count);

    for (let i = 0; i < arr.length - 1; i++)
        result += Math.min(arr[i], arr[i + 1]);

    return result;
};

/*

alternative:
const countBinarySubstrings = s => {
    const arr = [1];
    let result = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) arr[arr.length - 1]++;
        else arr.push(1);
    }

    for (let i = 0; i < arr.length - 1; i++)
        result += Math.min(arr[i], arr[i + 1]);

    return result;
};

*/

