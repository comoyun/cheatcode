// time: O()
// space: O()

/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
const pyramidTransition = (bottom, allowed) => {
    const map = {};

    for (const str of allowed) {
        const a = str[0];
        const b = str[1];
        const c = str[2];
        map[a + b] ??= [];
        map[a + b].push(c);
    }

    const getCombs = (arr, i = 0, comb = []) => {
        if (comb.length > 1 && !(comb.at(-2) + comb.at(-1) in map)) return [];
        if (i === arr.length) return [comb.join('')];

        const res = [];
        for (const ch of arr[i])
            res.push(...getCombs(arr, i + 1, [...comb, ch]));
        return res;
    };

    const memo = new Map();

    const dfs = str => {
        if (str.length === 1) return true;
        if (memo.has(str)) return memo.get(str);

        const row = [];

        for (let i = 0; i < str.length - 1; i++) {
            const key = str[i] + str[i + 1];
            if (key in map) row.push(map[key]);
            else {
                memo.set(str, false);
                return false;
            }
        }

        const combs = getCombs(row);
        for (const comb of combs) {
            if (dfs(comb)) {
                memo.set(str, true);
                return true;
            }
        }

        memo.set(str, false);
        return false;
    };

    return dfs(bottom);
};

