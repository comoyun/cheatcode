// time: O()
// space: O()

class ProductOfNumbers {
    constructor() {
        this.prefix = [];
        this.prod = 1;
    }

    add(num) {
        if (num === 0) {
            this.prefix.length = 0;
            this.prod = 1;
            return;
        }
        this.prod *= num;
        this.prefix.push(this.prod);
    }

    getProduct(k) {
        if (k > this.len) return 0;

        const leftIdx = this.len - k - 1;
        const left = leftIdx >= 0 ? this.prefix[leftIdx] : 1;

        return this.prod / left;
    }

    get len() {
        return this.prefix.length;
    }
}

