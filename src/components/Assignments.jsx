import React from "react";
import { Link } from "react-router-dom";

function Assignments() {
    return(
      
       
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
     
    )
}

export default Assignments;