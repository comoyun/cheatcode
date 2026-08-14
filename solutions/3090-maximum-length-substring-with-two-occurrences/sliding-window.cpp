// time: O(n)
// space: O(1)

#include <algorithm>

using namespace std;

class Solution {
  public:
    int maximumLengthSubstring(string s) {
        int freq[26] = {};
        const int n = s.length();
        int left = 0;
        int right = 0;
        int result = 0;

        for (; right < n; right++) {
            const char ch = s[right];
            const int idx = ch - 'a';
            freq[idx]++;

            while (freq[idx] > 2) {
                const char ch = s[left];
                const int idx = ch - 'a';
                freq[idx]--;
                left++;
            }

            result = max(result, right - left + 1);
        }

        return result;
    }
};

