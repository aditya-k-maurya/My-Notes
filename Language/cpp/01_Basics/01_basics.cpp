#include<bits/stdc++.h>
using namespace std;

int main()
{
  char c='a';
  //this gives ascii value of character
  cout << (int)c << endl;

  //calculation is done on higher datatype
  cout << 3 / 2 << endl; //gives 1 
  cout << 3 / 2.0 << endl;// gives 1.5


  //rough ranges of datatypes
  // -10^9< int < 10^9
  // -10^12 < long int < 10^12
  // -10^18 < long long int < 10^18

  int a = 100000;
  int b = 100000;
  cout << a * 1LL * b << endl;// gives output in long long

  // fixed -> removes scientific notation in doubles if there
  // setprecision(0) -> setting the length after decimal place
  // eg-> cout<<fixed << setprecision(0)<< a*b<<endl;

  //getline function in string
  string str1, str2;
  getline(cin, str1);// getline take whole line as input and breaks on new line
  getline(cin, str2);

  //push_back is better method than concationation
  
  return 0;
}
