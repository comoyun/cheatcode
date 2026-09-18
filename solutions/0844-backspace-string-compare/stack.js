// time: O(n + m)
// space: O(n + m)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
    const s1 = [];
    const s2 = [];

    for (const char of s) {
        if (char === '#') {
            s1.pop();
            continue;
        }
        s1.push(char);
    }
    for (const char of t) {
        if (char === '#') {
            s2.pop();
            continue;
        }
        s2.push(char);
    }

    return s1.toString() === s2.toString();
};

