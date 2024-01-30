import React from "react";
import Typewriter from 'typewriter-effect';
import "./Home.css";
import Resume from "../../assets/docs/resume.txt"
const Home=()=>{
    return(
        <>
        <div className="container-fluid home-container">
            <div className="container home-content">
                <h2>Hi 👋 I'm a</h2>
                <h1>
                <Typewriter
     options={{
    strings: ['FullStack Developer!', 'Mern Stack Developer!',"React Native Developer!"],
    autoStart: true,
    loop: true,
  }}
/>
 </h1>
 <div className="home-buttons">
    <button className="btn btn-hire">Hire me</button>
    <a className="btn btn-cv" href={Resume} dowenload="your_name.pdf">My Resume</a>
 </div>
                
                </div>
        </div>
        </>
    )
   
} 
export default Home;