// defining type of parameter
function addTwo(num: number){
    return num +2;
}

// defining function return type 
function Stringy():string{
    return "Hey"
}

const double = (num:number):number=>{
    return num*2
}

//if function dont return anything
function noOutput():void{
    console.log("No return value")
}

// never is similar as void. It is used in handling errors as example shown below
function fail(msg:string):never{
    throw new Error(msg)
}



