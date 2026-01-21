import react from "react"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "../layout"
import { HomePage } from "./components/homepage"


const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      }
    ]
  }
])


export const App = ()=>{
  return(
    <RouterProvider router={router}/>
  )
}