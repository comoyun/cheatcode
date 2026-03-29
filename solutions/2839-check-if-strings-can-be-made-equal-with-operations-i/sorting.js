// time: O(n log n)
// space: O(n)

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const canBeEqual = (s1, s2) => {
    const oddA = [];
    const evenA = [];

    const oddB = [];
    const evenB = [];

    for (let i = 1; i < s1.length; i += 2) oddA.push(s1[i]);
    for (let i = 0; i < s1.length; i += 2) evenA.push(s1[i]);

    for (let i = 1; i < s2.length; i += 2) oddB.push(s2[i]);
    for (let i = 0; i < s2.length; i += 2) evenB.push(s2[i]);

    oddA.sort();
    evenA.sort();
    oddB.sort();
    evenB.sort();

    return oddA.join('') === oddB.join('') && evenA.join('') === evenB.join('');
};
