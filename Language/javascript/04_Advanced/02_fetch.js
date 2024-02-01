// fetch object takes a link and fetch the response
// fetch is promise and generally handled in async await block


//async function makes the function asynchronious
async function fetchApi(){
    try{
        // await is used so the function wait for response before poceding
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        // we will get data in json format
        // console.log(data)

    }catch(error){
        console.log('Error:', error);
    }
}

fetchApi()


// fetch can also be handled by .then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})