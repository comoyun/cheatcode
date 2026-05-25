// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
const canReach = (s, minJump, maxJump) => {
    const n = s.length;
    const diff = new Int8Array(n + maxJump + 1).fill(0);
    let sum = 0;

    diff[minJump] = 1;
    diff[maxJump + 1] = -1;

    for (let i = minJump; i < n; i++) {
        sum += diff[i];

        if (s[i] === '0' && sum) {
            if (i === n - 1) return true;

            diff[i + minJump]++;
            diff[i + maxJump + 1]--;
        }
    }

    return false;
};

