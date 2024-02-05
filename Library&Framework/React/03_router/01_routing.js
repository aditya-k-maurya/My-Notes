// routing is done using react-router-dom


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// method 1
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<Layout/>}>
        <Route path = '' element = {<Home/>}/>
        <Route path = '/home' element = {<Home/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/user/:id' element = {<User/>}/>
        
      </Route>
    )
  )

//method 2
const router2 = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,

    children: [
      {
        path:'',
        element: <Home/>
      },{
        path:'/home',
        element:<Home/>
      },{
        path:'/about',
        element:<About/>
      },{
        path:'/contact',
        element:<Contact/>
      }
    ]
  }
])
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )