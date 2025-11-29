// time: O()
// space: O()

/**
 * @param {string} s
 * @return {string}
 */
const reorganizeString = s => {
    const chars = Array.from({ length: 26 }, () => []);
    const result = [];

    for (const char of s) {
        const idx = char.charCodeAt(0) - 97;
        chars[idx].push(char);
    }

    while (true) {
        while (chars.length && chars[chars.length - 1].length === 0)
            chars.pop();

        if (!chars.length) break;

        chars.sort((a, b) => b.length - a.length);

        const first = chars[0].pop();

        if (result.length && result[result.length - 1] === first) {
            if (chars.length < 2 || chars[1].length === 0) return '';
            const second = chars[1].pop();
            result.push(second);
            result.push(first);
        } else {
            result.push(first);
        }
    }

    return result.join('');
};
