import React from "react";
import "./Menus.css";
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReading, FcReadingEbook, FcVideoProjector, FcVoicePresentation} from  "react-icons/fc";
const Menus=(props)=>{
    return(
        <>
        {props.toggle?(
        
        <>
        <div className="navbar-profile-pic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsqxQ1uKne_DAkUgEbnpYHZ5S3aadcaHIt0rJYFFFkQ&s" alt="profile-pic" />
        </div >
        <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link">
                    <FcHome/>
                    Home</div>
                    <div className="nav-link">
                    <FcAbout/>
                    About</div>
                    <div className="nav-link">
                    <FcPortraitMode/>
                    Experience</div>
                    <div className="nav-link">
                    <FcBiotech/>
                    Tech Stake</div>
                    <div className="nav-link">
                    <FcReadingEbook/>
                    Education</div>
                    <div className="nav-link">
                    <FcVideoProjector/>
                    Project</div>
                    <div className="nav-link">
                    <FcVoicePresentation/>
                    Testimonial</div>
                    <div className="nav-link">
                    <FcBusinessContact/>
                    Contact</div>
                   
            </div>
            
        </div>

        </>):
        (<>
        <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link">
                    <FcHome />
                    </div>
                    <div className="nav-link">
                    <FcAbout/>
                    </div>
                    <div className="nav-link">
                    <FcPortraitMode/>
                    </div>
                    <div className="nav-link">
                    <FcBiotech/>
                    </div>
                    <div className="nav-link">
                    <FcReadingEbook/>
                    </div>
                    <div className="nav-link">
                    <FcVideoProjector/>
                    </div>
                    <div className="nav-link">
                    <FcVoicePresentation/>
                    </div>
                    <div className="nav-link">
                    <FcBusinessContact/>
                    </div>
                   
            </div>
            
        </div>
        
        </>

        
            )
            
        };
        
        </>
    )
}
export default Menus