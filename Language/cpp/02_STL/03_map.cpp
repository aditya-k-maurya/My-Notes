// The map stores key value pairs and accessed
// map[key] = value;
// iterators are used to access map as value are not stored in contagious memory

// there are two types of maps
// map is ordered map which stores data in order useful when data is needed in order but have more time complexity as it uses red black trees to store data.
// map can store complex data types as value like vector<int>;

// unordered_map have avg O(1) time complextiy and hashing is used in implementation.
// cant store complex datatypes

#include<bits/stdc++.h>
using namespace std;

int main()
{
  map<int, int> m;

  //iterator for map
  for(auto &itr : m){
    cout << itr.first << " " << itr.second;
  }

  unordered_map<int, int> myMap;

  // checking if the key exist
  if (myMap.find(key) != myMap.end())
  {
    // key exists in the map
  }else{
    //key doesnt exist
  }

  // erase
  map.erase(3);

  return 0;
}