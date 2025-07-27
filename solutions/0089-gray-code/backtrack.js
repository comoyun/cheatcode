// time: O(n^2)
// space: O(n)

/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = n => {
    const result = [0];
    const visited = new Set([0]);

    const backtrack = curr => {
        if (result.length === 1 << n) return true;
        for (let i = 0; i < n; i++) {
            const next = curr ^ (1 << i);
            if (!visited.has(next)) {
                visited.add(next);
                result.push(next);
                if (backtrack(next)) return true;
                visited.delete(next);
                result.pop();
            }
        }
        return false;
    };

    backtrack(0);
    return result;
};

