// There is one new parameter called loader which will load the data and store in catche memory
// Loading do browser becomes faster

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<Layout/>}>
        <Route
        
        // loader called if data exists otherwise fetches the data
        loader={githubInforLoader}

        path = '/github' element = {<Github/>}/>
      </Route>
    )
  )

  // loading data by async and await
  // returns data in form of json

 const githubInforLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/aditya-k-maurya')
    return response.json()
}

// open the page and access the data using useLoaderData() method
const data= useLoaderData()