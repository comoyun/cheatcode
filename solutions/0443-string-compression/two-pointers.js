// time: O(n)
// space: O(1)

/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = chars => {
    let i = 0, k = 0;
    while (i < chars.length) {
        let count = 0;
        while (i + count < chars.length && chars[i] === chars[i + count])
            count++;

        chars[k++] = chars[i];

        if (count > 1) 
            for (const c of String(count)) chars[k++] = c;

        i += count;
    }
    return k;
};
