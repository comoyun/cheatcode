// time: O(m log m)
// space: O(1)

/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
const maxNumberOfFamilies = (n, reservedSeats) => {
    const groups = [
        [2, 3, 4, 5],
        [6, 7, 8, 9],
        [4, 5, 6, 7],
    ];
    const m = reservedSeats.length;
    reservedSeats.sort((a, b) => a[0] - b[0]);

    let idx = 0;
    let result = 0;
    while (idx < m) {
        const row = reservedSeats[idx][0];
        const seats = new Array(11).fill(true);

        while (idx < m && reservedSeats[idx][0] === row) {
            seats[reservedSeats[idx][1]] = false;
            idx++;
        }

        for (const group of groups) {
            let ok = true;

            for (const seat of group) {
                if (!seats[seat]) {
                    ok = false;
                    break;
                }
            }

            if (ok) {
                for (const seat of group) seats[seat] = false;
                result++;
            }
        }

        n--;
    }

    result += n * 2;
    return result;
};

