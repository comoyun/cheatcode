// time: O(k * n log n)
// space: O(log n)

/**
 * @param {number[][]} tasks
 * @return {number}
 */
const minimumEffort = tasks => {
    tasks.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

    const can = energy => {
        for (let i = 0; i < tasks.length; i++) {
            const [req, min] = tasks[i];
            if (energy < min) return false;
            energy -= req;
        }
        return true;
    };

    let left = 1;
    let right = 10 ** 9;
    let result = right;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);

        if (can(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
};

