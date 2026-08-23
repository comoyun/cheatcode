class Solution {
  public:
    bool checkDivisibility(int n) {
        int s = 0;
        int p = 1;
        const int num = n;

        while (n) {
            const int digit = n % 10;
            p *= digit;
            s += digit;
            n /= 10;
        }

        return num % (p + s) == 0;
    }
};
