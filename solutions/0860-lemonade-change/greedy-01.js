// time: O(n)
// space: O(1)

/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = bills => {
    const changes = { 5: 0, 10: 0, 20: 0 };

    for (const bill of bills) {
        const change = bill - 5;
        changes[bill]++;

        if (change === 0) continue;

        if (changes[change]) {
            changes[change]--;
        } else if (change === 10 && changes[5] >= 2) {
            changes[5] -= 2;
        } else if (change === 20 && changes[10] >= 2) {
            changes[10] -= 2;
        } else if (change === 20 && changes[10] && changes[5] >= 2) {
            changes[10]--;
            changes[5] -= 2;
        } else if (change === 20 && changes[5] >= 4) {
            changes[5] -= 4;
        } else if (change === 15 && changes[10] && changes[5]) {
            changes[10]--;
            changes[5]--;
        } else if (change === 15 && changes[5] >= 3) {
            changes[5] -= 3;
        } else {
            return false;
        }
    }

    return true;
};
