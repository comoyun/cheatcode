// time: O(m log m)
// space: O(1)

#include <algorithm>
#include <vector>
using namespace std;

class Solution {
  public:
    int maxNumberOfFamilies(int n, vector<vector<int>> reservedSeats) {
        const int groups[3][4] = {{2, 3, 4, 5}, {6, 7, 8, 9}, {4, 5, 6, 7}};
        const int m = reservedSeats.size();
        sort(reservedSeats.begin(), reservedSeats.end());

        int result = 0;
        int idx = 0;

        while (idx < m) {
            const int row = reservedSeats[idx][0];
            bool used[11] = {};

            while (idx < m && reservedSeats[idx][0] == row) {
                used[reservedSeats[idx][1]] = true;
                idx++;
            }

            for (const auto &group : groups) {
                bool ok = true;

                for (const int seat : group) {
                    if (used[seat]) {
                        ok = false;
                        break;
                    }
                }

                if (ok) {
                    for (const int seat : group) used[seat] = true;
                    result++;
                }
            }

            n--;
        }

        result += n * 2;
        return result;
    }
};
