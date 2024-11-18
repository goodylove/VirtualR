
import logo from "/logo.png"
import {navItems} from "@/constants/index"
import { Menu,X } from "lucide-react"
import { useState } from "react"


function NavBar() {

  const [openMobileMenu,setOpenMobileMenu] = useState(false)


  const toggleNavBar = ()=>{
    setOpenMobileMenu(!openMobileMenu)
  }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-100 ">
        <div className="container px-4 mx-auto relative text sm">
            <div className="flex justify-between items-center">
                <div className='flex flex-shrink-0 items-center'>
                    <img src={logo} alt="Logo" className="mr-2 h-10 w-10"/>
                    <span className="text-xl tracking-tight">Virtual</span>

                </div>

                <ul className="hidden lg:flex ml-14 space-x-12">
                  {navItems.map((nav)=>(
                    <li key={nav.label}>
                      <a href={nav.href}>{nav.label}</a>
                    </li>
                  ))}
                  
                </ul>
                <div className=" justify-center hidden lg:flex space-x-12 items-center">
                  <a href="#" className="py-2 px-3 rounded-md border">Sign in</a>
                  <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md">
                    Create  an account
                    
                  </a>
            
                </div>


                <div className="flex lg:hidden  justify-end flex-col ">
                  <button onClick={toggleNavBar}>{openMobileMenu ? <X/>: <Menu/>} </button>

                </div>


            </div>
            {openMobileMenu &&
             <div className="fixed  right-0  z-50 bg-neutral-900 w-full p-12 flex flex-col justify-center lg:hidden items-center">
                <ul className="">
                  {navItems.map((nav)=>(
                    <li key={nav.label} className="py-4">
                      <a href={nav.href}>{nav.label}</a>
                    </li>
                  ))}
                  
                </ul>
                

                  <div className=" justify-center  flex-col  mt-2 flex space-y-6 items-center">
                  <a href="#" className="py-2 px-3 rounded-md border text-xs md:text-base">Sign in</a>
                  <a href="" className="bg-gradient-to-r from-orange-500 text-xs md:text-base to-orange-800 px-3 py-2 rounded-md">
                    Create  an account
                    
                  </a>
            
                </div>


              </div>

              
              }
        </div>

    </nav>
  )
}

export default NavBar
