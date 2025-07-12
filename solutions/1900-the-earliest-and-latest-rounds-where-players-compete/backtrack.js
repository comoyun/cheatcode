/*
 * @title: Backtrack
 * @time: Exponential
 * @space: O(n)
 */

/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
const earliestAndLatest = (n, firstPlayer, secondPlayer) => {
    let minRound = Infinity;
    let maxRound = -Infinity;

    const backtrack = (players, round) => {
        let i = 0;
        let j = players.length - 1;

        const matches = [];

        while (i < j) {
            const a = players[i];
            const b = players[j];

            if (
                (a === firstPlayer && b === secondPlayer) ||
                (a === secondPlayer && b === firstPlayer)
            ) {
                minRound = Math.min(minRound, round);
                maxRound = Math.max(maxRound, round);
                return;
            }

            matches.push([a, b]);
            i++;
            j--;
        }

        const middle = i === j ? [players[i]] : [];

        const dfs = (idx, path) => {
            if (idx === matches.length) {
                const next = [...path, ...middle].sort((a, b) => a - b);
                backtrack(next, round + 1);
                return;
            }

            const [a, b] = matches[idx];

            if (a === firstPlayer || b === firstPlayer) {
                dfs(idx + 1, [...path, firstPlayer]);
            } else if (a === secondPlayer || b === secondPlayer) {
                dfs(idx + 1, [...path, secondPlayer]);
            } else {
                dfs(idx + 1, [...path, a]);
                dfs(idx + 1, [...path, b]);
            }
        };

        dfs(0, []);
    };

    const players = Array.from({ length: n }, (_, i) => i + 1);
    backtrack(players, 1);
    return [minRound, maxRound];
};
