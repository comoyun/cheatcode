// time: O(n)
// space: O(n)

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
const smallestEquivalentString = (s1, s2, baseStr) => {
    const adjList = {};
    const processed = {};
    const map = {};

    for (let i = 0; i < s1.length; i++) {
        const a = s1[i],
            b = s2[i];
        adjList[a] = adjList[a] || [];
        adjList[b] = adjList[b] || [];

        adjList[a].push(b);
        adjList[b].push(a);
    }

    const dfs = (node, set = new Set()) => {
        set.add(node);
        for (const nei of adjList[node]) {
            if (set.has(nei)) continue;
            dfs(nei, set);
        }
        return set;
    };

    for (const char of s1) {
        if (char in processed) continue;
        processed[char] = true;
        const set = dfs(char);
        const arr = [...set];
        arr.sort();
        const val = arr[0];

        for (const char of arr) map[char] = val;
    }

    baseStr = baseStr.split('');

    for (let i = 0; i < baseStr.length; i++)
        baseStr[i] = map[baseStr[i]] || baseStr[i];

    return baseStr.join('');
};
