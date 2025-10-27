// time: O(nm)
// space: O(1)

/**
 * @param {string[]} bank
 * @return {number}
 */
const numberOfBeams = bank => {
    let result = 0;
    let lastDevices = 0;

    for (const row of bank) {
        const devices = row.split('1').length - 1;

        if (devices === 0) continue;

        result += lastDevices * devices;
        lastDevices = devices;
    }

    return result;
};

