import React from "react";
import './Project.css';
import { Card } from "./Cards";

const Project=()=>{
    return(
        <>

<div className=" flex justify-center">
<div className=" text-center w-80  border"> 
    <h1 className="font-bold text-2xl  p-5">TOP RECENT PROJECT</h1>
    <hr></hr>
    <p className="text-slate-500 text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, iure provident. Non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora asperiores itaque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet expedita minima.</p>

        <div className=" w-80 m-4 mx-10 gap-3 grid sm:grid-cols-1 lg:grid-cols-3">
          
               
                 {Card.map((card)=>(
               <ul className="   justify-center  border h-auto w-60">
                <li  id={card.id} className="justify-center" >
                    <img src={card.img}></img>
                    <div className="px-12">
                      
                      <button className="px-12 p-2 border rounded-md  bg-blue-500">View</button>
  
                      </div>
                </li>
               </ul>
              
       
             ))} 
               </div>
      
       </div>
 
 

</div>
        </>
    )
}
export default Project;