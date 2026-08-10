// time: O(n * sqrt(n))
// space: O(n)

/**
 * @param {number} n
 * @return {boolean}
 */
const winnerSquareGame = n => {
    const memo = {};
    const dfs = (n, turn) => {
        if (n === 0) return turn ? true : false;
        const key = `${n},${turn}`;

        if (key in memo) return memo[key];
        let result = null;

        for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
            const out = dfs(n - i * i, turn ^ 1);

            if (result === null) result = out;

            if (turn && !out) {
                result = false;
                break;
            }

            if (!turn && out) {
                result = true;
                break;
            }
        }

        return (memo[key] = result);
    };

    return dfs(n, 0);
};

