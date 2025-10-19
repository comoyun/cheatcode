// time: O(n log n + m log m)
// space: O(1)

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (g, s) => {
    let result = 0;
    g.sort((a, b) => b - a);
    s.sort((a, b) => b - a);

    while (g.length && s.length) {
        const child = g.pop();
        const cookie = s.pop();

        if (cookie >= child) result++;
        else g.push(child);
    }

    return result;
};

