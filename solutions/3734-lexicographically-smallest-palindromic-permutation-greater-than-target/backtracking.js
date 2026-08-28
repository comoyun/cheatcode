// time: O(exponential)
// space: O(exponential)

/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
const lexPalindromicPermutation = (s, target) => {
    // WARNING: throws TLE
    const n = s.length;
    const freq = new Array(26).fill(0);
    const used = new Array(26).fill(0);
    const perm = [];
    const half = Math.floor(n / 2);
    let result = '';
    let odd = 0;
    let mid = '';

    const getIdx = char => char.charCodeAt(0) - 97;
    const getChar = idx => String.fromCharCode(idx + 97);

    for (const char of s) freq[getIdx(char)]++;
    for (const f of freq) odd += f & 1;

    if (n % 2 === 0 && odd) return '';
    if (n & 1 && odd !== 1) return '';

    for (let i = 0; i < freq.length; i++) {
        if (freq[i] & 1) {
            mid = getChar(i);
            break;
        }
    }

    const backtrack = (idx, tight = true) => {
        if (idx === half) {
            const str = perm.join('');
            const palindrome = str + mid + str.split('').reverse().join('');

            if (palindrome <= target) return;
            if (result === '' || palindrome < result) result = palindrome;
            return;
        }

        const char = target[idx];
        const i = getIdx(char);

        for (let j = tight ? i : 0; j < freq.length; j++) {
            if (!freq[j]) continue;
            const rem = freq[j];
            const use = used[j];

            if (use + 1 > rem) continue;

            freq[j]--;
            used[j]++;
            perm.push(getChar(j));
            backtrack(idx + 1, tight && j === i);
            perm.pop();
            freq[j]++;
            used[j]--;
        }
    };

    backtrack(0);
    return result;
};

