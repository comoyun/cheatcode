// time: O(N * N)
// space: O(N)

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
    for (let i = 0; i < s.length - 1; i++) {
        const left = s.slice(0, i + 1);
        const right = s.slice(i + 1);
        if (right + left === goal) return true;
    }

    return s === goal;
};

