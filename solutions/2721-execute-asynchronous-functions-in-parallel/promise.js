// time: O(n)
// space: O(n)

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = functions => {
    const length = functions.length,
        result = new Array(length);

    return new Promise((resolve, reject) => {
        let count = 0;
        for (let i = 0; i < length; i++) {
            functions[i]()
                .then(data => {
                    result[i] = data;
                    if (++count === length) resolve(result);
                })
                .catch(reject);
        }
    });
};
