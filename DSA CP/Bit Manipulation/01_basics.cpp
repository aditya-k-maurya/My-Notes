#include<iostream>
using namespace std;

void printBinary(int num){
  for (int i = 10; i >=0; i--)
  {
    cout << ((num >> i) & 1);
  }
  cout << endl;
}

int main()
{
  int num = 0;
  int pos = 4;

  printBinary(num);

  //there are some builtin methods for bits
  //eg-> __builtin_popcount(num) it counts the number of setbit
  return 0;
}

/*

Invert the bit(~)
~a will invert the bit of a which means all 1 becomes 0 and all 0 becomes 0

Left Shift (<<):
a << b shifts the bits of a to the left by b positions, equivalent to multiplying a by 2^b.

Right Shift (>>):
a >> b shifts the bits of a to the right by b positions, equivalent to dividing a by 2^b.


Set a Bit:
a |= (1 << pos)
sets the bit at position pos in a to 1.

Unset a Bit:
a &= ~(1 << pos)

Clear a Bit:
a &= ~(1 << pos)
clears the bit at position pos in a (sets it to 0).


Check if a Bit is Set:
(a & (1 << pos)) != 0 checks if the bit at position pos in a is set.

Toggle a Bit:
a ^= (1 << pos) toggles (flips) the bit at position pos in a.
*/