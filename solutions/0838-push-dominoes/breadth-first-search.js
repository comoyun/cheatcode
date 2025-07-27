// time: O(n)
// space: O(n)

/**
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = dominoes => {
    dominoes = dominoes.split('');
    const len = dominoes.length,
        queue = [],
        direction = { L: -1, R: 1, '.': 0 },
        time = Array(len).fill(Infinity);

    for (let i = 0; i < len; i++) {
        const dir = direction[dominoes[i]];
        dominoes[i] = dir;
        if (dir) {
            queue.push([i, dir, 0]);
            time[i] = 0;
        }
    }

    let front = 0;
    while (front < queue.length) {
        const [i, dir, t] = queue[front++],
            ni = i + dir,
            nt = t + 1;

        if (ni < 0 || ni >= len) continue;

        if (time[ni] === Infinity) {
            time[ni] = nt;
            dominoes[ni] = dir;
            queue.push([ni, dir, nt]);
        } else if (time[ni] === nt) {
            dominoes[ni] = 0;
        }
    }

    dominoes = dominoes.map(x => {
        switch (x) {
            case 1: return 'R';
            case -1: return 'L';
            default: return '.';
        }
    });

    return dominoes.join('');
};
