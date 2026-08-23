#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    int s = 0;
    int p = 1;
    cin >> n;
    const int num = n;

    while (n) {
        const int digit = n % 10;
        p *= digit;
        s += digit;
        n /= 10;
    }

    cout << (num % (p + s) == 0 ? "Bo'linadi" : "Bo'linmaydi") << endl;
}
