/*
 * @title: Array
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {string} s
 * @return {string}
 */
const makeFancyString = s => {
    const result = [];
    let i = 0;
    while (i < s.length) {
        let count = 1;

        while (i + count < n && s[i + count] === s[i]) count++;

        if (count > 2) result.push(s[i].repeat(2));
        else result.push(s[i].repeat(count));

        i += count;
    }

    return result.join('');
};
