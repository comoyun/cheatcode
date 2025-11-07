// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = s => {
    const lFreq = Array.from({ length: 26 }, (_, id) => [0, id, 'l']);
    const uFreq = Array.from({ length: 26 }, (_, id) => [0, id, 'u']);
    const dFreq = Array.from({ length: 10 }, (_, id) => [0, id, 'd']);
    let result = '';

    for (const char of s) {
        const code = char.charCodeAt(0);

        if (char >= '0' && char <= '9') dFreq[code - 48][0]++;
        else if (char >= 'A' && char <= 'Z') uFreq[code - 65][0]++;
        else lFreq[code - 97][0]++;
    }

    const combined = [...lFreq, ...uFreq, ...dFreq];
    combined.sort((a, b) => b[0] - a[0]);

    for (const [occ, idx, type] of combined) {
        const code =
            type === 'l' ? 97 + idx : type === 'u' ? 65 + idx : 48 + idx;
        result += String.fromCharCode(code).repeat(occ);
    }

    return result;
};

