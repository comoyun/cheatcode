// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {boolean}
 */
const checkOnesSegment = s => {
    let i = 0;
    const n = s.length;
    while (i < n && s[i] === '1') i++;
    while (i < n && s[i] === '0') i++;
    return i === n ? true : false;
};

