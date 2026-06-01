// time: O(n)
// space: O(1)

/**
 * @param {number[]} cost
 * @return {number}
 */
const minimumCost = cost => {
    let result = 0;
    const n = cost.length;
    cost.sort((a, b) => b - a);

    for (let i = 0; i < n; i++) 
        if ((i + 1) % 3 !== 0) result += cost[i];

    return result;
};

