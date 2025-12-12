// time: O(n * m * k)
// space: O(n + l)

/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
const countMentions = (numberOfUsers, events) => {
    events.sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        if (a[0] === 'OFFLINE' && b[0] !== 'OFFLINE') return -1;
        if (a[0] !== 'OFFLINE' && b[0] === 'OFFLINE') return 1;
        return 0;
    });

    const users = new Array(numberOfUsers).fill(0);
    let offline = [];

    for (const [type, timestamp, ids] of events) {
        const current = +timestamp;

        const newOffline = [];

        for (const ts of offline) {
            if (ts[0] <= current) continue;
            newOffline.push(ts);
        }

        offline = newOffline;

        if (type === 'MESSAGE') {
            if (ids === 'ALL') {
                for (let i = 0; i < numberOfUsers; i++) users[i]++;
            } else if (ids === 'HERE') {
                for (let i = 0; i < numberOfUsers; i++) {
                    if (offline.some(el => el[1] === i)) continue;
                    users[i]++;
                }
            } else {
                for (const id of ids.split(' ').map(id => +id.slice(2)))
                    users[id]++;
            }
        } else {
            offline.push([current + 60, +ids]);
        }
    }

    return users;
};

