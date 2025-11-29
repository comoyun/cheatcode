// time: O(n log n)
// space: O(n)

class MyHeap {
    constructor(comparator = (a, b) => a - b) {
        this.array = [];
        this.comparator = (i1, i2) =>
            comparator(this.array[i1], this.array[i2]);
    }

    size() {
        return this.array.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this.isEmpty() ? undefined : this.array[0];
    }

    add(value) {
        this.array.push(value);
        this.bubbleUp();
    }

    pop() {
        if (this.isEmpty()) return;
        const root = this.array[0];
        const last = this.array.pop();
        if (!this.isEmpty()) {
            this.array[0] = last;
            this.bubbleDown();
        }
        return root;
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.comparator(parentIndex, index) <= 0) break;
            [this.array[parentIndex], this.array[index]] = [
                this.array[index],
                this.array[parentIndex],
            ];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;

            if (
                leftChild < this.size() &&
                this.comparator(smallest, leftChild) > 0
            ) {
                smallest = leftChild;
            }

            if (
                rightChild < this.size() &&
                this.comparator(smallest, rightChild) > 0
            ) {
                smallest = rightChild;
            }

            if (smallest === index) break;
            [this.array[smallest], this.array[index]] = [
                this.array[index],
                this.array[smallest],
            ];
            index = smallest;
        }
    }
}

/**
 * @param {string} s
 * @return {string}
 */
const reorganizeString = s => {
    const freq = {};
    const result = [];

    for (const char of s) freq[char] = (freq[char] || 0) + 1;

    const heap = new MyHeap((a, b) => b[0] - a[0]);

    for (const char in freq) heap.add([freq[char], char]);

    while (heap.size() > 1) {
        let [af, ac] = heap.pop();
        let [bf, bc] = heap.pop();

        result.push(ac);
        result.push(bc);

        af--;
        bf--;

        if (af) heap.add([af, ac]);
        if (bf) heap.add([bf, bc]);
    }

    if (heap.size()) {
        const [af, ac] = heap.pop();
        if (af > 1) return '';
        if (result.length && result[result.length - 1] === ac) return '';
        result.push(ac);
    }

    return result.join('');
};
