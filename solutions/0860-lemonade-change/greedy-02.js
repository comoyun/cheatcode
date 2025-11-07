// time: O(n)
// space: O(1)

/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = bills => {
    let fives = 0,
        tens = 0;

    for (const bill of bills) {
        if (bill === 5) {
            fives++;
        } else {
            if (bill === 10 && fives) {
                fives--;
                tens++;
            } else if (bill === 20 && fives && tens) {
                fives--;
                tens--;
            } else if (fives >= 3) {
                fives -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};
