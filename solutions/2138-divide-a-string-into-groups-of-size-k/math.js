// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
const divideString = (s, k, fill) =>
    Array.from({ length: Math.ceil(s.length / k) }, (_, i) => {
        const chunk = s.slice(i * k, (i + 1) * k);
        return chunk.length < k ? chunk + fill.repeat(k - chunk.length) : chunk;
    });

