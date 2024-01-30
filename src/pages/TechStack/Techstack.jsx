import React from "react";

import "./Techstack.css";
import  {TeachstackList}  from "../../utils/TechstackList";

const Techstack=()=>{



    return(<>


  
        <div className="mx-60 text-center  ">
            <h2 className="text-2xl font-semibold">Technologies Stack</h2>
            <h3>including  programming Languages,frameworks,databases,from-end and back-end tools,and APIs</h3>
            <div className=" lg:px-20 border">
              

           
            <ul className=" grid  sm:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-7  p-3 ">
        {TeachstackList.map((tech) => (
          <li className="stacklist" key={tech._id}>
            
            {tech.name}
            
            {tech.icon}
            
          </li>
        ))}
      </ul>
 </div>
   
        </div>
        
  
        
       </>
    );
};
export default Techstack;