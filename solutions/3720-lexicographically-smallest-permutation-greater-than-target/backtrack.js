// time: O(n^2)
// space: O(n)

/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
const lexGreaterPermutation = (s, target) => {
    const n = s.length;
    const freq = new Array(26).fill(0);
    let result = '';

    for (const char of s) freq[char.charCodeAt(0) - 97]++;
    const perm = [];

    const backtrack = start => {
        for (let i = start; i < n; i++) {
            const char = target[i];
            const code = char.charCodeAt(0);
            const idx = code - 97;

            for (let j = idx; j < freq.length; j++) {
                if (!freq[j]) continue;

                if (j === idx) {
                    perm.push(j);
                    freq[j]--;

                    backtrack(i + 1);

                    perm.pop();
                    freq[j]++;

                    if (result) return;
                } else {
                    freq[j]--;

                    const temp = [...perm, j];

                    for (let c = 0; c < 26; c++) {
                        while (freq[c]--) temp.push(c);
                        freq[c]++;
                    }

                    result = temp
                        .map(x => String.fromCharCode(x + 97))
                        .join('');

                    freq[j]++;
                    return;
                }
            }

            return;
        }
    };

    backtrack(0);
    return result;
};

