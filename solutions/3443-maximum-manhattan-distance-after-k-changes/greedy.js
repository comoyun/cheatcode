/*
 * @title: Greedy
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxDistance = (s, k) => {
    let x = 0,
        y = 0,
        max = 0;

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'W':
                x--;
                break;
        }

        const dist = Math.abs(x) + Math.abs(y);
        const extra = Math.min(k * 2, i + 1);
        max = Math.max(max, Math.min(dist + extra, i + 1));
    }

    return max;
};
