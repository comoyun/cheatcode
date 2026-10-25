// time: O(1)
// space: O(1)

/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
const countDaysTogether = (arriveAlice, leaveAlice, arriveBob, leaveBob) => {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const convert = (m, d) => {
        let result = d;
        for (let i = 0; i < m - 1; i++) result += months[i];
        return result;
    };

    const [aam, aad] = arriveAlice.split('-').map(Number);
    const [lam, lad] = leaveAlice.split('-').map(Number);
    const [abm, abd] = arriveBob.split('-').map(Number);
    const [lbm, lbd] = leaveBob.split('-').map(Number);

    const as = convert(aam, aad);
    const bs = convert(abm, abd);
    const ae = convert(lam, lad);
    const be = convert(lbm, lbd);

    const common = Math.min(be, ae) - Math.max(as, bs) + 1;
    return common;
};
