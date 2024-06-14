import logo from "../assets/HTM_5_logo.png";
import {Menu, X} from "lucide-react";
import {useState} from "react";
import {navItems} from "../constants/constants.jsx";
const  Navbar= () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }
  return (
    <>
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 text-violet-950">
            <div className="contsiner px-4 mx-auto relative lg:text-sm">
                    <div className="flex justify-between item-center">
                     
                            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                            
                      

                        <ul className="hidden lg:flex ml-14 space-x-12">
                                        {navItems.map((item, index) => (
                                            <li className="py-2 px-3" key={index}>
                                                <a href={item.url}>{item.title}</a>
                                               
                                            </li>
                                        ))}

                            <a href="#" className="py-2 px-3 border rounded-md">
                                Register
                            </a>
                        </ul>
                       

                        
                           
                      
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={handleToggle}>
                                {toggle ? <X/> : <Menu/>}
                            </button>
                        </div>
                    </div>

                    {toggle && (
                        <div className=" text-violet-950 fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                            <ul>
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.url}>{item.title}</a>
                                        </li>

                                ))}
                             
                               
                        
                            </ul>

                            <a href="#" className="py-2 mt-4 px-3 border rounded-md ">
                                Register
                            </a>
                        </div>
                    )}
            </div>
    </nav>
    </>
  )
}

export default Navbar