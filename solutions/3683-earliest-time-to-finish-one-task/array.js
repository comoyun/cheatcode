// time: O(n)
// space: O(1)

/**
 * @param {number[][]} tasks
 * @return {number}
 */
const earliestTime = tasks => {
    let result = Infinity;

    for (const [start, time] of tasks) 
        result = Math.min(result, start + time);

    return result;
};
