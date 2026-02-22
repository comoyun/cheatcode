// time: O(n ^ 2)
// space: O(n)

/**
 * @param {string} s
 * @return {string}
 */
const makeGood = s => {
    let result = s;

    while (true) {
        let str = '';

        for (let i = 0; i < result.length; i++) {
            const curr = result[i];
            const next = i + 1 < result.length ? result[i + 1] : '';
            const currLow = curr.toLowerCase();
            const nextLow = next.toLowerCase();

            if (currLow === nextLow && curr !== next) {
                i++;
                continue;
            }

            str += curr;
        }

        if (result === str) break;
        result = str;
    }

    return result;
};

