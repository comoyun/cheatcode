// time: O(n log n)
// space: O(n)

/**
 * @param {string} s
 * @return {string}
 */
const sortVowels = s => {
    const ws = [];
    s = s.split('');
    let idx = 0;

    const vowels = 'aeiouAEIOU';

    for (const char of s) {
        if (vowels.includes(char)) {
            ws.push(char.charCodeAt(0));
        }
    }

    ws.sort((a, b) => a - b);

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (vowels.includes(char)) {
            s[i] = String.fromCharCode(ws[idx++]);
        }
    }

    return s.join('');
};

