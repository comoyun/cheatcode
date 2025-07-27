// time: O(n * sqrt(n))
// space: O(n)

/**
 * @param {number} n
 * @return {number}
 */
const numSquares = n => {
    const getClosestSquare = num => {
        let left = 1,
            right = num,
            square = 1;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (mid * mid > num) {
                right = mid - 1;
            } else {
                square = mid;
                left = mid + 1;
            }
        }
        return square;
    };

    const queue = [[n, 0]];
    const visited = new Set();
    visited.add(n);

    while (queue.length) {
        const [num, len] = queue.shift();
        if (num === 0) return len;

        const square = getClosestSquare(num);
        for (let i = 1; i <= square; i++) {
            const next = num - i * i;
            if (!visited.has(next)) {
                queue.push([next, len + 1]);
                visited.add(next);
            }
        }
    }

    return 0;
};

