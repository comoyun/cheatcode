// time: O(n^2)
// space: O(n)

/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
const lexPalindromicPermutation = (s, target) => {
    const n = s.length;

    if (n === 1) return s > target ? s : '';

    const freq = new Array(26).fill(0);
    const result = new Array(n).fill('');
    const getIdx = char => char.charCodeAt(0) - 97;
    const getChar = idx => String.fromCharCode(idx + 97);

    let left = 0;
    let right = n - 1;
    let odd = 0;
    let mid = '';

    for (const char of s) freq[getIdx(char)]++;

    for (let i = 0; i < 26; i++) {
        if (freq[i] & 1) {
            odd++;
            mid = getChar(i);
        }
    }

    if (n % 2 === 0 && odd) return '';
    if (n % 2 && odd > 1) return '';

    const fillRest = (left, right, dec = false, mut = true) => {
        for (let i = dec ? 25 : 0; dec ? i >= 0 : i < 26; i += dec ? -1 : 1) {
            const char = getChar(i);
            let count = freq[i];

            while (count > 1) {
                result[left++] = char;
                result[right--] = char;

                count -= 2;
                if (mut) freq[i] -= 2;
            }
        }

        if (mid) result[left] = mid;
    };

    const findGreater = idx => {
        for (let i = idx + 1; i < 26; i++) if (freq[i] > 1) return i;
        return -1;
    };

    while (left < right) {
        const idx = getIdx(target[left]);

        if (freq[idx] > 1) {
            freq[idx] -= 2;

            result[left] = target[left];
            result[right] = target[left];

            fillRest(left + 1, right - 1, true, false);

            if (result.join('') > target) {
                left++;
                right--;
                continue;
            }

            freq[idx] += 2;

            const greater = findGreater(idx);
            if (greater === -1) return '';

            const char = getChar(greater);

            result[left++] = char;
            result[right--] = char;
            freq[greater] -= 2;

            fillRest(left, right);
            return result.join('');
        }

        const greater = findGreater(idx);
        if (greater === -1) return '';

        const char = getChar(greater);

        result[left++] = char;
        result[right--] = char;
        freq[greater] -= 2;

        fillRest(left, right);
        break;
    }

    return result.join('');
};
