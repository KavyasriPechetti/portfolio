import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contact() {
    return(
        <div className="contact">
             <div className="icons">
           <div  className="icon">
           <a href="https://www.linkedin.com/in/kavyasripechetti"><h1 class="bi bi-linkedin"></h1></a>
           </div>
           <div  className="icon">
           <a href="https://github.com/KavyasriPechetti/myapp/branches"><h1 class="bi bi-github"></h1></a>
           </div>
           <div  className="icon">
           <div><h3 class="bi bi-envelope"></h3></div>
           <div><span className="span">kavyasripechetti@gmail.com</span></div>
           </div>
           <div  className="icon">
           <h3 class="bi bi-whatsapp"></h3>
           <span  className="span">9381495905</span>
           </div>
        </div>
        <div>
            <img src="https://img.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.jpg"/>
        </div>
        </div>
       
    )
}

export default Contact;