import React from "react";

import "./About.css";

export default function About() {
	return (
		<div className="about">
			<h1 className="gross">Erick <span className="gross blue">Zetina</span>
				<a	className="btn-video pulse"
					href="https://youtu.be/LT-8tDMSFo0"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="material-icons">
						play_arrow
					</i>
				</a>
			</h1>
			<div className="subheading mb-5">Schäffbräustr 9 · Ingolstadt, 85049 · +49 163 1932340 ·
				<a href="mailto:erickzetinator@gmail.com">erickzetinator@gmail.com</a>
				·
				<a id="get_resume" className="btn btn--stroke" href="https://zetinator.github.io/resume_english.pdf" target="_blank">
					resume <i className="far fa-file-pdf"></i>
				</a>
			</div>
			<p className="lead mb-5">
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

