import React from "react";
import { Link } from "react-router-dom";

function Assignments() {
    return(
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
       
        <div className="assign">
           <div className="tasks">
            <h2>JavaScript Assignments</h2>
            <a href="https://github.com/KavyasriPechetti/JavaScript-Assignments"><button>Source Code</button></a>
           </div>
           <div className="tasks">
            <h2>React Assignments</h2>
           <a href="https://github.com/KavyasriPechetti/React-Projects"><button>Source Code</button></a> 
           </div>
        </div>
        </div>
    )
}

export default Assignments;