// time: O(1)
// space: O(1)

/**
 * @param {string} date
 * @return {number}
 */
const dayOfYear = date => {
    const isLeapYear = year =>
        (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    const [year, month, day] = date.split('-').map(Number);
    const months = [
        31,
        isLeapYear(year) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];

    let days = day;

    for (let i = 0; i < month - 1; i++) days += months[i];

    return days;
};
