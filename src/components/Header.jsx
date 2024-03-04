import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="name">
            <div className="kavya">
                <h1>Kavya sri Pechetti</h1>
            </div>
             <div className="head">
            
            <Link to="/skills"><div>
                <h5>My Skills</h5>         
            </div></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/projects"><div>
                <h5>Projects</h5>         
            </div></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="assignments"><div>
                <h5>Assignments</h5>         
            </div></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/contact"><div>
                <h5>Contact me</h5>         
            </div></Link>
        </div>
        </div><br/><br/>
        <div className="about">
           <div className="para">
            <h1>I'm Kavya sri</h1>
            <h3>Frontend Developer</h3>
            <h5>From Hyderabad</h5>
            <div>
            <p>Passionate Frontend Developer dedicated to crafting exceptional user experiences through innovative web technologies.</p>
            <p>My journey in frontend development is fueled by a relentless curiosity and a commitment to staying at the forefront of</p>
             <p>emerging trends and best practices.</p>
             <p> With a keen eye for design and a love for clean, efficient code, I strive to create digital experiences that captivate, </p>
             <p>inspire, and drive meaningful engagement. Let's build something extraordinary together.</p>
            </div>
            
           </div>
           <div>
            <img src="https://www.freecodecamp.org/news/content/images/2022/02/shutterstock_1610721214-min.jpg"/>
           </div>
        </div>
        </div>
        
       
    )
}
export default Header;