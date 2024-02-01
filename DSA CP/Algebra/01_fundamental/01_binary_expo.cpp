
// finding power of any number

#include <bits/stdc++.h>
using namespace std;

// finding power in complexity log(n) using recursion -> n^k
long recursionPower(int n, int k){
    if(k==0){
        return 1;
    }

    long long res = recursionPower(n,k/2);

    if(k%2){
        return res * res * n;
    }
    else{
        return res * res;
    }
}

// finding the power in modulo m -> (x^k)mod(m)
long long moduloPower(int n, int k, int m){
    n = n%m;
    long long res = 1;
    while(k>0){
        if(k&1){
            res = res*n%m;
        }

        n = n*n%m;
        k>>= 1;
    }
    return res;
}


int main() {
    
    // n^k -> log(n)
    long long value = recursionPower(4,3);

    // (n^k)mod(m) -> log(n)
    long long value2 = moduloPower(4,3,60);

    
       
    return 0;
}

