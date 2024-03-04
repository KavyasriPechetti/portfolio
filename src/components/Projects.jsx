import React from "react";
import { Link } from "react-router-dom";

function Projects() {
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
              
             <div className="projects">
           <div className="project">
            <h3>
                Dictionary Web Application 
            </h3>
            <div className="btn">
            <a href="https://github.com/KavyasriPechetti/React-Projects/tree/dictionary"><button>Source Code</button></a>&nbsp;&nbsp;&nbsp;
            <a href="https://dictionary--luxury-biscuit-37a276.netlify.app/"><button>Live Demo</button></a>
            </div>
            
           </div>
           <div className="project">
            <h3>
                Online Shopping Cart Application 
            </h3>
            <div className="btn">
            <a href="https://github.com/KavyasriPechetti/React-Projects/tree/redux-basics"><button>Source Code</button></a>&nbsp;&nbsp;&nbsp;
            <a href="https://redux-basics--storied-gumption-762b99.netlify.app/"><button>Live Demo</button></a>
            </div>
           
           </div>
           <div className="project">
            <h3>
                Todo List Web Application
            </h3>
            <div className="btn">
            <a href="https://github.com/KavyasriPechetti/React-Projects/tree/newTodolist"><button>Source Code</button></a>&nbsp;&nbsp;&nbsp;
            <a href="https://stunning-heliotrope-86596a.netlify.app"><button>Live Demo</button></a>
            </div>
            
           </div>
           <div className="project">
            <h3>
                QR Code Generator Application 
            </h3>
            <div className="btn">
            <a href="https://github.com/KavyasriPechetti/React-Projects/tree/qrcode-generator"><button>Source Code</button></a>&nbsp;&nbsp;
            <a href="https://darling-pie-cddca9.netlify.app"> <button>Live Demo</button></a>
            </div>
            
           </div>
        </div>
        </div>
       
       
    )
}

export default Projects;