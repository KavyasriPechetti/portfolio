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
           <h3 class="bi bi-envelope">kavyasripechetti@gmail.com</h3>
           </div>
           <div  className="icon">
           <h3 class="bi bi-whatsapp"></h3>
           <h3>9381495905</h3>
           </div>
        </div>
        <div>
            <img src="https://img.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.jpg"/>
        </div>
        </div>
       
    )
}

export default Contact;