// time: O(n)
// space: O(n)

/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */

const findSubtreeSizes = (parent, s) => {
    const n = parent.length;
    const children = Array.from({ length: n }, () => new Set());
    const result = new Array(n).fill(0);
    const chars = Array.from({ length: n }, () => new Int32Array(26).fill(-2));

    for (let i = 1; i < n; i++) children[parent[i]].add(i);

    for (let node = 1; node < n; node++) {
        const c = s.charCodeAt(node) - 97;
        let curr = node;

        while (curr !== -1 && (curr === node || s[curr] !== s[node]))
            curr = chars[curr][c] !== -2 ? chars[curr][c] : parent[curr];

        if (curr === -1) continue;

        for (let temp = node; temp !== curr; temp = parent[temp]) {
            if (chars[temp][c] !== -2) break;
            chars[temp][c] = curr;
        }

        children[parent[node]].delete(node);
        children[curr].add(node);
    }

    const dfs = node => {
        result[node] = 1;
        for (const child of children[node]) result[node] += dfs(child);
        return result[node];
    };

    dfs(0);
    return result;
};
