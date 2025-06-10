/*
 * @title: Sorting
 * @time: O(n log n)
 * @space: O(1)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    s = s.split('');
    t = t.split('');
    s.sort();
    t.sort();
    s = s.join('');
    t = t.join('');
    return s === t;
};

