// time: O(n)
// space: O(n)

#include <vector>
using namespace std;

class Solution {
  public:
    vector<int> resultArray(vector<int> nums) {
        const int n = nums.size();
        vector<int> result(n);

        int j = 0;
        int k = n - 1;
        result[j] = nums[0];
        result[k] = nums[1];

        for (int i = 2; i < n; i++) {
            if (result[j] > result[k])
                result[++j] = nums[i];
            else
                result[--k] = nums[i];
        }

        for (int i = 0; i < (n - k) >> 1; i++) {
            const int temp = result[i + k];
            result[i + k] = result[n - i - 1];
            result[n - i - 1] = temp;
        }

        return result;
    }
};
