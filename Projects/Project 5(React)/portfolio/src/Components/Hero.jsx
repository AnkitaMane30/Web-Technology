import React from "react";
import "./Hero.css";
function Hero(){
    return(
        <>
            <section className="hero" id="home">
                <div className="hero-content">
                    <h1>
                        Hello I'm <span>Ankita Mane</span>
                    </h1>
                    <h2>Fullstack Developer</h2>

                    <p>I build modern, responsive, and user-friendly web applications using Node.js, Express.js ,
                        React.js, and clean UI design.</p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn">View Projects</a>
                        <a href="/Ankita Mane.pdf" download className="btn-outline">Download Resume</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;