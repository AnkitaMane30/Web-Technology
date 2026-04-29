import React from "react";
import "./Contact.css"
function Contact(){
    return(<>
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name"></input>
                    <input type="email" placeholder="Your Email"></input>
                    <textarea rows="6" placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>                 
            </div>
        </section>
    </>)
}

export default Contact;