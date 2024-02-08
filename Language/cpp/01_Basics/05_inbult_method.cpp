#include <bits/stdc++.h>
using namespace std;

int main()
{
  // some inbuild function in c++

  int a = 2;
  int b = 4;
  int arr[5] = [ 1, 2, 6, 3, 4 ];

  pow(a, b);  // power of a^b
  sqrt(b);    // square root
  min(a, b);  // min of a,b
  max(a, b);  // max of a,b;
  swap(a, b); // swap number
  gcd(a, b);  // gcdo of a,b
  toupper();
  tolower();
  ceil();
  floor();

  // string method

  string str = "hello";

  string substring = str.substr(7, 5);           // sub string
  str.append(" How are you?");                   // append at the end of the string
  size_t position = str.find("World");           // find
  str.replace(7, 5, "Universe");                 // replace
  int results = str.compare("Hello, Universe!"); // compare

  // array methods

  sort(arr, arr + 5);                            // sorting array;
  auto result = find(arr, arr + 5, value);       // searching if element exists
  auto res = binary_search(arr, arr + 5, value); // searching value in sorted array;

  return 0;
}