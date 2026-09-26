// time: O(n + m)
// space: O(n + m)

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
const evaluate = (s, knowledge) => {
    const n = s.length;
    const map = {};
    const result = [];
    let start = -1;

    for (const [key, value] of knowledge) map[key] = value;

    for (let i = 0; i < n; i++) {
        const char = s[i];

        if (char === '(') {
            start = i;
            continue;
        }

        if (char === ')') {
            const key = s.slice(start + 1, i);
            result.push(key in map ? map[key] : '?');
            start = -1;
            continue;
        }

        if (start > -1) continue;

        result.push(char);
    }

    return result.join('');
};

