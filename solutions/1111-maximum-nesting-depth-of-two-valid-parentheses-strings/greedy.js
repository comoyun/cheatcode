// time: O(n)
// space: O(n)

/**
 * @param {string} seq
 * @return {number[]}
 */
const maxDepthAfterSplit = seq => {
    const n = seq.length;
    const map = new Array(n).fill(-1);
    const result = new Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
        const char = seq[i];

        if (char === '(') stack.push(i);
        else map[stack.pop()] = i;
    }

    let max = 0;
    let balance = 0;

    for (const p of seq) {
        if (p === '(') balance++;
        else balance--;

        max = Math.max(max, balance);
    }

    const mid = Math.floor(max / 2);
    balance = 0;

    for (let i = 0; i < n; i++) {
        const twin = map[i];
        const p = seq[i];

        if (p === '(') balance++;
        else balance--;
        if (twin === -1) continue;

        const group = balance <= mid ? 0 : 1;
        result[i] = group;
        result[twin] = group;
    }

    return result;
};

