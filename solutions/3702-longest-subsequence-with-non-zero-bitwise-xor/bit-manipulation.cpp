// time: O(n)
// space: O(1)

#include <vector>
using namespace std;

class Solution {
  public:
    int longestSubsequence(vector<int> nums) {
        const int n = nums.size();
        int x = 0;
        int zeroes = 0;

        for (int i = 0; i < n; i++) {
            const int num = nums[i];
            if (num == 0)
                zeroes++;
            else
                x ^= num;
        }

        if (x) return n;
        if (zeroes == n) return 0;
        return n - 1;
    }
};
