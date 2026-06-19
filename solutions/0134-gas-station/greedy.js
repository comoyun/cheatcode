// time: O(n)
// space: O(1)

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
    let total = 0;
    let tank = 0;
    let pos = 0;

    for (let i = 0; i < gas.length; i++) {
        const diff = gas[i] - cost[i];

        total += diff;
        tank += diff;

        if (tank < 0) {
            tank = 0;
            pos = i + 1;
        }
    }

    return total >= 0 ? pos : -1;
};
