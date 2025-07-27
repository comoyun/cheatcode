// time: O(n)
// space: O(1)

/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
const matchPlayersAndTrainers = (players, trainers) => {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);
    const n = players.length;
    const m = trainers.length;
    let i = 0,
        j = 0;
    let result = 0;

    while (i < n && j < m) {
        const player = players[i];
        const trainer = trainers[j];

        if (player <= trainer) {
            i++;
            result++;
        }

        j++;
    }

    return result;
};
