// time: O(n)
// space: O(1)

#include <algorithm>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
  public:
    int largestInteger(vector<int> &nums, int k) {
        const int n = nums.size();
        int result = -1;

        if (k == 1) {
            unordered_map<int, int> freq;
            for (const int num : nums) freq[num]++;
            for (const int num : nums) result = max(result, freq[num] == 1 ? num : -1);
            return result;
        }

        if (k == n) {
            for (const int num : nums) result = max(result, num);
            return result;
        }

        int first = nums[0];
        int last = nums[n - 1];

        for (int i = 1; i < n; i++) {
            if (nums[i] == first) {
                first = -1;
                break;
            }
        }

        for (int i = 0; i < n - 1; i++) {
            if (nums[i] == last) {
                last = -1;
                break;
            }
        }

        return max(first, last);
    }
};
