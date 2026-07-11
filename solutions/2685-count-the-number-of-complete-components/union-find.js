// time: O(n + m α(n))
// space: O(n)

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countCompleteComponents = (n, edges) => {
    const parent = Array.from({ length: n }, (_, idx) => idx);
    const count = new Array(n).fill(1);
    const connections = new Array(n).fill(1);
    const blacklist = new Set();

    const find = node => {
        let root = node;
        while (root !== parent[root]) root = parent[root];
        while (node !== parent[node]) {
            const next = parent[node];
            parent[node] = root;
            node = next;
        }
        return root;
    };

    const connect = (u, v) => {
        let pu = find(u);
        let pv = find(v);

        if (pu === pv) return;
        if (count[pv] > count[pu]) [pu, pv] = [pv, pu];

        parent[pv] = pu;
        count[pu] += count[pv];
    };

    for (const [u, v] of edges) {
        connections[u]++;
        connections[v]++;
        connect(u, v);
    }

    const set = new Set();

    for (let i = 0; i < n; i++) {
        const root = find(i);
        const children = count[root];

        if (children === connections[i] && !blacklist.has(root)) {
            set.add(root);
        } else {
            set.delete(root);
            blacklist.add(root);
        }
    }

    return set.size;
};
