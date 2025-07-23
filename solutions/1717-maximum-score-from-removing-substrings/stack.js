// time: O(n)
// space: O(n)

const maximumGain = (s, x, y) => {
    const stack = [];

    let result = 0;
    let maxSub = 'ab';
    let minSub = 'ba';

    if (y > x) {
        maxSub = 'ba';
        minSub = 'ab';

        const temp = x;
        x = y;
        y = temp;
    }

    const chars = { a: 0, b: 0 };

    for (const char of s) {
        if ('ab'.indexOf(char) !== -1) {
            chars[char]++;
            stack.push(char);
        } else {
            const a = chars.a;
            const b = chars.b;
            chars.a = 0;
            chars.b = 0;
            stack.length = 0;
            result += Math.min(a, b) * y;
        }

        while (stack.length >= 2 && stack.at(-2) + stack.at(-1) === maxSub) {
            result += x;
            chars[stack.pop()]--;
            chars[stack.pop()]--;
        }
    }

    return Math.min(chars.a, chars.b) * y + result;
};

