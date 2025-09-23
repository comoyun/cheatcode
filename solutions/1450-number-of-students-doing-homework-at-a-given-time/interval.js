// time: O(n)
// space: O(1)

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = (startTime, endTime, queryTime) => {
    let result = 0;

    for (let i = 0; i < startTime.length; i++)
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) result++;

    return result;
};
