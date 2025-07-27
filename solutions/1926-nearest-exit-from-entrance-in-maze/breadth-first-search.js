// time: O(mn)
// space: O(mn)

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = (maze, entrance) => {
    const [startR, startC] = entrance;
    const queue = [[startR, startC, 0]],
        dirs = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];

    maze[startR][startC] = '+';

    while (queue.length) {
        const [row, col, step] = queue.shift();
        for (const [dr, dc] of dirs) {
            const newDr = dr + row,
                newDc = dc + col,
                newStep = step + 1;
            if (
                newDr < 0 ||
                newDr >= maze.length ||
                newDc < 0 ||
                newDc >= maze[0].length ||
                maze[newDr][newDc] === '+'
            )
                continue;

            if (
                newDr === 0 ||
                newDc === 0 ||
                newDr === maze.length - 1 ||
                newDc === maze[0].length - 1
            )
                return newStep;

            maze[newDr][newDc] = '+';
            queue.push([newDr, newDc, newStep]);
        }
    }
    return -1;
};
