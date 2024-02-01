// chaining multiple methods

const arr = [23,5,3,4,3,5,3,43]

const newNum = arr
    .map((num) => num*10)
    .map((num)=> num+1)
    .filter((num) => num<50)

console.log(newNum)


//reduce method
const total = arr.reduce((total, nums) =>{
    return total+nums
}, 0)


//lexical and closure property

function myFunc(){
    const name = "Blue"
    function displayName(){
        console.log(name);
    }
    return displayName; // returning fuction will also return properties assessible by the function through closure property
}

const func = myFunc()
myFunc();// we can now access the 