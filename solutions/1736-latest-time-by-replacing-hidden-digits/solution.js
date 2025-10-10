// time: O(n)
// space: O(1)

/**
 * @param {string} time
 * @return {string}
 */
const maximumTime = time => {
    const [hour, minute] = time.split(':');

    let resHour = '';
    let resMinute = '';

    if (hour[0] === '?') {
        if (hour[1] !== '?' && +hour[1] > 3) resHour = '1';
        else resHour = '2';
    } else resHour = hour[0];

    if (hour[1] === '?') {
        if (hour[0] === '0' || hour[0] === '1') resHour += 9;
        else resHour += 3;
    } else resHour += hour[1];

    if (minute[0] === '?') resMinute = '5';
    else resMinute += minute[0];

    if (minute[1] === '?') resMinute += '9';
    else resMinute += minute[1];

    return resHour + ':' + resMinute;
};
