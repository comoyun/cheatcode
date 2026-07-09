// time: O(n log n + q)
// space: O(n)

/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const pathExistenceQueries = (n, nums, maxDiff, queries) => {
    const connections = new Array(n).fill(-1);

    const upperBound = idx => {
        const num = nums[idx];
        let left = idx;
        let right = n - 1;

        while (left <= right) {
            const mid = left + ((right - left) >> 1);

            if (nums[mid] - num > maxDiff) right = mid - 1;
            else left = mid + 1;
        }

        return right;
    };

    let idx = 0;
    while (idx < n) {
        const ub = upperBound(idx);

        if (connections[idx] === -1) connections[idx] = idx;

        if (ub !== idx) {
            connections[ub] = idx;
            idx = ub;
        } else {
            idx++;
        }
    }

    for (let i = 1; i < n; i++)
        if (connections[i] === -1) connections[i] = connections[i - 1];

    const find = node => {
        let root = node;

        while (connections[root] !== root) root = connections[root];

        while (node !== root) {
            const parent = connections[node];
            connections[node] = root;
            node = parent;
        }

        return root;
    };

    return queries.map(([u, v]) => find(u) === find(v));
};

