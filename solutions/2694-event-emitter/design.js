// time: O(n)
// space: O(n)

class EventEmitter {
    constructor() {
        this.events = {};
        this.uid = 0;
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        const uid = this.uid++;
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push([callback, uid]);
        return {
            unsubscribe: () => {
                const arr = this.events[eventName];
                const remIdx = this.binarySearch(arr, uid);
                if (remIdx === -1) return;
                this.events[eventName].splice(remIdx, 1);
            },
        };
    }

    binarySearch(arr, target) {
        let left = 0,
            right = arr.length - 1;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const item = arr[mid][1];
            if (item > target) right = mid - 1;
            else if (item < target) left = mid + 1;
            else return mid;
        }
        return -1;
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const callbacks = this.events[eventName] || [];
        const result = [];
        for (const callback of callbacks) result.push(callback[0](...args));
        return result;
    }
}
