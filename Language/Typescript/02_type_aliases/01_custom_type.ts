//we can also create custom type and use it 
type Users= {
    name:string,
    email:string,
    isActive:boolean
}

function createUsers(user: Users):Users{
    return {name:"", email:"", isActive:true}
}

//other ways to use aliases
type User = {
    //readonly make it uneditable
    readonly _id:string,
    name: string
}

let myUser:User ={ 
    _id: "135",
    name:"asgds"
}

// myUser._id ='234'
let m

