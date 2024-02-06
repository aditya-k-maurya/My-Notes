//object in typescript

//Object is similar to js
const User = {
    name: "Aditya",
    email: "example@gmail.com",
    isActive: true
}

//passing object as parameter
function createUser({name:string, isPaid:boolean}){}

createUser({name:"Aditya", isPaid:false})


//defining type of object
function createCourse():{name: string, price: number}{

    return{name:"typescript", price:239} //type of object is defined so return value should be accordingly
}


export {}