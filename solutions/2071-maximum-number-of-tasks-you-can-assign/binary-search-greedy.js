/*
 * @title: Binary Search + Greedy
 * @time: O(n^2)
 * @space: O(n)
 */

/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
const maxTaskAssign = (tasks, workers, pills, strength) => {
    tasks.sort((a, b) => a - b);
    workers.sort((a, b) => a - b);

    const canAssign = mid => {
        let usable = workers.slice(-mid).sort((a, b) => a - b);
        let remainingPills = pills;

        for (let i = mid - 1; i >= 0; i--) {
            let task = tasks[i];

            if (usable[usable.length - 1] >= task) {
                usable.pop();
                continue;
            }
            if (remainingPills <= 0) return false;

            let idx = lowerBound(usable, task - strength);
            if (idx === usable.length) return false;

            usable.splice(idx, 1);
            remainingPills--;
        }
        return true;
    };

    const lowerBound = (arr, val) => {
        let left = 0,
            right = arr.length;
        while (left < right) {
            let mid = (left + right) >> 1;
            if (arr[mid] < val) left = mid + 1;
            else right = mid;
        }
        return left;
    };

    let left = 0,
        right = Math.min(tasks.length, workers.length),
        res = 0;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (canAssign(mid)) {
            res = mid;
            left = mid + 1;
            continue;
        }
        right = mid - 1;
    }
    return res;
};
