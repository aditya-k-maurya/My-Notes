// promise give promises than output will be given either the compeletion or error

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // eg - db calls, cryptography, network

    setTimeout(function(){
        // console.log('Async task is compelete')

        // resolve denote work is done and then passed to .then method
        resolve()
    }, 1000)
    
})
// .then is only executed after the completion of the promise
promiseOne.then(function(){
    // console.log("promise consumed")
})


new Promise((resolve, reject)=>{
    setTimeout(function(){

        let error = false;
        if(!error){
            console.log("Ansyc 2 done")

            // object parameter is passed in the resolve which can be recieved in then
            resolve({username:"Aditya", email:"example@gmail.com"})
        }else{
            reject('Error: Something went wrong')
        }
    }, 2000)

}).then((user)=>{
    console.log(user)
    return user.username // return will return value to next then in chain
}).then((username)=>{  // this is called chaining
    console.log(username)
}).catch((error)=>{ // catches the error 
    console.log(error)
}).finally(()=>{  // .finally runs always, either error occurs or resolved
    console.log("The promis is either resolved or rejected")
})


const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(function(){

        let error = false;
        if(!error){
            console.log("Ansyc 2 done")

            // object parameter is passed in the resolve which can be recieved in then
            resolve({username:"Javascript", email:"example@gmail.com"})
        }else{
            reject('Error: Js went wrong')
        }
    }, 2000)
})

// rather using .then and .catch we can also use async await to handle response
async function consumePromiseThree(){
    try{
        const response = await promiseThree
        console.log(response)  
        console.log('response handled by the async await function')
    }catch(error){
        console.log(error)
    }
    
}

consumePromiseThree()