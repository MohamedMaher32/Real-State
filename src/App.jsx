import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import About from './Component/About/About'
import Properties from './Component/Properties/Properties'
import Blog from './Component/Blog/Blog'
import Contact from './Component/Contact/Contact'
import Projects from './Component/Projects/Projects'
export default function App() {
  const route = createHashRouter([{
    path:"" , element: <Layout/> , children:[
      {path: "" , element: <Home/>},
      {path: "about" , element: <About/>},
      {path: "properties" , element: <Properties/>},
      {path: "projects" , element: <Projects/>},
      {path: "blog" , element: <Blog/>},
      {path: "contact" , element: <Contact/>},
      {path: "navbar" , element: <Navbar/>},
      {path: "footer" , element: <Footer/>},

    ]
  }])
  return (
    <RouterProvider router={route}/>
  )
}