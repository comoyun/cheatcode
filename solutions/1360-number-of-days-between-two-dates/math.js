// time: O(1)
// space: O(1)

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
const daysBetweenDates = (date1, date2) => {
    date1 = new Date(date1);
    date2 = new Date(date2);
    return Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
};

