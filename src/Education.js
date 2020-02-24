import React from "react";

import "./Education.css";

export default function Education() {
	return (
		<div className="education">
			<h1>Education</h1>
			<div className="job-row">
				<div className="left">
					<h2 className="blue">
						<a
							className="App-link darker"
							href="https://www.itam.mx/en/1/pages/about-itam"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instituto Tecnológico Autónomo de México
						</a>
					</h2>
					<h3 className="red">BACHELOR MECHATRONICS ENGINEER</h3>
					<p className="job-description">GPA: 87/100</p>
				</div>
				<div className="right">
					<p className="date">August 2014 - December 2018</p>
				</div>
			</div>
			<div className="job-row">
				<div className="left">
					<h2 className="blue">
						<a
							className="App-link darker"
							href="https://www.thi.de/hochschule/ueber-uns/campus/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Technische Hochschule Ingolstadt
						</a>
					</h2>
					<h3 className="red">COMPUTER SCIENCE (International student)</h3>
					<p className="job-description">GPA: 70/100</p>
				</div>
				<div className="right">
					<p className="date">October 2017 - October 2018</p>
				</div>
			</div>
		</div>
	);
}



