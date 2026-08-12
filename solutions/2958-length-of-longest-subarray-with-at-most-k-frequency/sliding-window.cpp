// time: O(n)
// space: O(n)

#include <algorithm>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
  public:
    int maxSubarrayLength(vector<int> nums, int k) {
        const int n = nums.size();
        unordered_map<int, int> m;
        int left = 0;
        int right = 0;
        int result = 0;

        for (; right < n; right++) {
            const int rightNum = nums[right];
            m[rightNum]++;

            while (m[rightNum] > k) {
                const int leftNum = nums[left];
                m[leftNum]--;
                left++;
            }

            result = max(result, right - left + 1);
        }

        return result;
    }
};
