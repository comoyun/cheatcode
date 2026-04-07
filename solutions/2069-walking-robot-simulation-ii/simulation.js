// time: O(1)
// space: O(1)

class Robot {
    /**
     * @param {number} width
     * @param {number} height
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.perimeter = (width + height) * 2 - 4;
        this.steps = 0;
    }

    /**
     * @param {number} num
     * @return {void}
     */
    step(num) {
        this.steps += num;
    }

    /**
     * @return {number[]}
     */
    getPos() {
        const mod = this.steps % this.perimeter;
        const dir = this.getDir();

        if (dir === 'East') return [mod, 0];
        if (dir === 'North') return [this.width - 1, mod - (this.width - 1)];
        if (dir === 'West')
            return [
                this.width - (mod - (this.width - 1) - (this.height - 1)) - 1,
                this.height - 1,
            ];
        return [0, this.perimeter - (mod === 0 ? this.perimeter : mod)];
    }

    /**
     * @return {string}
     */
    getDir() {
        const mod = this.steps % this.perimeter;

        if (this.steps && mod === 0) return 'South';
        if (mod < this.width) return 'East';
        if (mod < this.width + this.height - 1) return 'North';
        if (mod < 2 * this.width + this.height - 2) return 'West';
        return 'South';
    }
}
