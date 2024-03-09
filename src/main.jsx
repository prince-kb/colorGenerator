import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import RandNumGenerator from './Components/RandNumGenerator.jsx'
import RandColGenerator from './Components/RandColGenerator.jsx'
import MongoDB from './Components/Datas/MongoDB.jsx';
const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : 'header',
        element : <Header/>
      },
      {
        path : 'about',
        element : <About/>
      },
      {
        path : 'contact',
        element : <Contact/>
      },
      {
        path : 'footer',
        element : <Footer/>
      },
      {
        path : 'randomnum',
        element : <RandNumGenerator/>
      },
      {
        path : 'randomcol',
        element : <RandColGenerator/>
      },
    ]
  },
  {

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
