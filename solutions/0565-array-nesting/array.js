/*
 * @title: Array
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = nums => {
    let result = 0;
    const visited = new Array(nums.length).fill(false);

    for (let i = 0; i < nums.length; i++) {
        if (visited[i]) continue;
        let count = 0;
        let curr = i;

        while (!visited[curr]) {
            visited[curr] = true;
            curr = nums[curr];
            count++;
        }

        result = Math.max(result, count);
    }

    return result;
};
