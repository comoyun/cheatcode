/*
 * @title: Queue
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = senate => {
    const radiant = [],
        dire = [];

    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') radiant.push(i);
        else dire.push(i);
    }

    while (radiant.length && dire.length) {
        const radiantPos = radiant.shift(),
            direPos = dire.shift();

        if (radiantPos < direPos) radiant.push(radiantPos + senate.length);
        else dire.push(direPos + senate.length);
    }

    return radiant.length ? 'Radiant' : 'Dire';
};
