#include <bits/stdc++.h>
using namespace std;

int main()
{
  int n = 12;
  vector<int> v(n);
  for (int i = 0; i < n; i++)
  {
    v[i] = 4 + i;
    cout << v[i] << " ";
  }
  cout << endl;

  // min element
  int minEle = *min_element(v.begin(), v.end());
  cout << minEle << endl;

  // max element
  int maxEle = *max_element(v.begin(), v.end());
  cout << maxEle << endl;

  // sum of all element
  int sum = accumulate(v.begin(), v.end(), 0);
  cout << sum << endl;

  // count the specific element;
  int count = count(v.begin(), v.end(), 5);
  cout << count << endl;

  //finding element
  auto it = find(v.begin(), v.end(), 10);
  if(it != v.end()){
    cout << *it << endl;
  }
  else{
    cout << "Element not found";
  }

  // revese the array or string;
  reverse(v.begin(), v.end());

  return 0;
}