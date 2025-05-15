/*
 * @title: Greedy
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
const getNonRepeatingGroupSubsequence = (words, groups) => {
    const res = [words[0]];
    for (let i = 1; i < groups.length; i++)
        if (groups[i] !== groups[i - 1]) 
            res.push(words[i]);
    return res;
};

