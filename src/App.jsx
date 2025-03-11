import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
//import Contact from './components/Contact.Jsx'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>

          <Navbar />
          <Home />

        </div>

    },
    {
      path: "/about",
      element:
        <div>
          <Navbar />
          <About />
        </div>
    },
    {
      path: "/contact",
      element:
        <div>
          <Navbar />
          <Contact />
        </div>,

    },

    {
      path: '*',
      element:
        <div className='bg-red-600'>
          404 Not Found - Yash
        </div>
    }


  ]
)
function App() {


  return (
    <>

      <div className=''>
        <CustomCursor />
        <RouterProvider router={router} />
        <Footer/>
      </div>
    </>
  )
}
export default App