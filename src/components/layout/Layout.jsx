import {React,useState} from 'react';
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai';
import Home from "../../pages/home/Home.jsx";
import Menus from "../Menus/Menus.jsx"
import "./Layout.css";
const Layout=()=>{
    const[toggle,setToggle]=useState(true);
    //change toggle
    
    const handleToggle=()=>{
        setToggle(!toggle);
    };
    return (
        <>
        <div className="sidebar-section">
            <div className={toggle?"sidebar-toggle sidebar":"sidebar"}>
                <div className="sidebar-toggle-icons">
                    
                    <p  onClick={handleToggle} >
                        {
                            toggle?(  <AiOutlineDoubleLeft   size={30}/>):(<AiOutlineDoubleRight size={30}/>)
                        }
                    
                      
                        </p>
                </div>
                <Menus toggle={toggle}/>
            </div>
            <div className="container">
                <Home></Home>
            </div>
        </div>
        </>
    )
}
export default Layout;