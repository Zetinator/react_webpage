import React from "react";

import "./About.css";

export default function About() {
	return (
		<div className="about">
			<h1 className="gross">Erick <span className="gross blue">Zetina</span>
				<a className="btn-video pulse"
					href="https://youtu.be/LT-8tDMSFo0"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="material-icons">
						play_arrow
					</i>
				</a>
			</h1>
			<p className="subheading">Schäffbräustr 9 · Ingolstadt, 85049 · +49 163 1932340 ·
				<a className="mail" 
					href="mailto:erickzetinator@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					erickzetinator@gmail.com</a>
				· 
				<a className="btn-resume"
					href="https://zetinator.github.io/resume_english.pdf" target="_blank"
					target="_blank"
					rel="noopener noreferrer"
				>
					resume <i className="far fa-file-pdf"></i>
				</a>
			</p>
			<p className="lead">
				I am experienced programming in C++ and Python,
				I love everything related to machine learning and autonomous cars, 
				and I am also skillful using Django to develop Web Applications.
			</p>
			<div className="social-icons">
				<a href="https://www.linkedin.com/in/erick-zetina-b922a2173/" target="_blank">
					<i className="fab fa-linkedin-in"></i>
				</a>
				<a href="https://github.com/Zetinator" target="_blank">
					<i className="fab fa-github"></i>
				</a>
				<a href="https://www.facebook.com/zetinator" target="_blank">
					<i className="fab fa-facebook-f"></i>
				</a>
				<a href="https://wa.me/491631932340" target="_blank">
					<i className="fab fa-whatsapp"></i>
				</a>
			</div>

		</div>
	);
}

