/*
SETS
Sets stores the unique elements in sorted order, implemented on red black trees;
Sets time complexity O(logn)

unordered_set
Stores unique element but order is not maintained, implemented on red black trees;
Avg time complexity O(logn)
Cant store complex data structure

mulitset
Stores elemnt in order but also store duplicates, implemented on red black trees
time complexity O(logn)
*/

#include <iostream>
#include <set>
using namespace std;

int main()
{
  std::set<int> mySet;

  // Inserting elements
  mySet.insert(5);
  mySet.insert(3);
  mySet.insert(8);
  mySet.insert(3); // will not be inserted since sets only store unique elements

  // Accessing elements through iterators
  for (const auto &element : mySet)
  {
    cout << element << " ";
  }
  cout << endl;

  // Checking if an element exists
  if (mySet.find(8) != mySet.end())
  {
    cout << "Element 8 exists in the set." << endl;
  }

  // Removing elements
  mySet.erase(3);

  // Convert set to vector
  vector<int> myVector(mySet.begin(), mySet.end());

  // in multiset if we use .erase(3) method then it will erase all the elements with 3;
  // other way is to use find method which will give the itr of first element with 3 and then use erase method

  return 0;
}
