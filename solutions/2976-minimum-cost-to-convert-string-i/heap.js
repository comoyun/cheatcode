// Time: O(N * E)
// Space: O(E)

/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
const minimumCost = (source, target, original, changed, cost) => {
    const adjList = new Map();
    let result = 0;

    for (let i = 0; i < original.length; i++) {
        const og = original[i];
        const cg = changed[i];

        if (!adjList.has(og)) adjList.set(og, []);
        adjList.get(og).push([cg, cost[i]]);
    }

    const memo = new Map();

    const getCost = (from, to) => {
        if (from === to) return 0;

        if (!memo.has(from)) memo.set(from, new Map());
        const row = memo.get(from);

        if (row.has(to)) return row.get(to);
        if (!adjList.has(from)) {
            row.set(to, -1);
            return -1;
        }

        const heap = new MyHeap();
        const seen = new Set();
        heap.push([from, 0]);

        while (heap.size) {
            const [char, currCost] = heap.pop();

            if (seen.has(char)) continue;
            seen.add(char);

            if (char === to) {
                row.set(to, currCost);
                return currCost;
            }

            const edges = adjList.get(char);
            if (!edges) continue;

            for (const [next, c] of edges)
                if (!seen.has(next)) heap.push([next, currCost + c]);
        }

        row.set(to, -1);
        return -1;
    };

    for (let i = 0; i < source.length; i++) {
        const ct = getCost(source[i], target[i]);
        if (ct === -1) return -1;
        result += ct;
    }

    return result;
};

