
// import {RouterProvider,  createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import {ItemsProvider} from "./Contexts/ItemsContext"

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   }
// ])



function App() {
  

  return (
    <>
    {/* <RouterProvider router={router}/> */}
    <ItemsProvider>
    <Home/>
    </ItemsProvider>
    </>
  )
}

export default App
