import React from "react";

import "./Experience.css";

function Job(props) {
	return (
		<div className="job-row">
			<div className="left">
				<h2 className="blue">{props.position}</h2>
				<h3>{props.company}</h3>
				<p className="job-description">
					{props.description_first}<br/>
					{props.description_second}
				</p>
			</div>
			<div className="right">
				<p className="date">{props.date}</p>
			</div>
		</div>
	);
}


export default function Experience() {
	const jobs = [
		{
			position: "Software Development",
			company: "Audi AG",
			description_first: "Training of a neural network (GAN) for the photo-realistic generation of images based on simulated data using tensorflow, that will be used to generate realistic scenarios to train autonomous agents using simulations.",
			description_second: "Implementation of a tool for the quality assurance of descriptors of road networks (C++ and Python) as well as code improvements and bug fixes for various projects.",
			date: "June 2019 - December 2019 and (February 2018 - August 2018)"
		},
		{
			position: "BACK-END DEVELOPMENT",
			company: "KOOMKIN S.A. DE C.V.",
			description_first: "Created a REST API to automatically send WhatsApp messages using bots that learned to handle business conversations based on a convolutional neural-network and NLP to support the Customer Relationship Management (CRM).",
			description_second: "Created a call-tracking system, to automatically make/record calls, and obtain transcripts from the conversations for further data-analysis. Development of a web-application in Django on an Nginx server.",
			date: "August 2018 - June 2019"
		},
		{
			position: "MEMBER OF THE ITAM ROBOTICS LABORATORY",
			company: "ITAM",
			description_first: "A scaled model of an autonomous car as bachelor thesis using densenets (CNN's) able to overtake moving obstacles in real time.",
			description_second: "Also development of applications with ROS (Robot Operating System) in C++ for the control of distributed Processes.",
			date: "August 2016 - December 2018"
		},
	]
	const jobsJSX = jobs.map((job, index)=> {
		return (
			<Job position={job.position}
				company={job.company}
				description_first={job.description_first}
				description_second={job.description_second}
				date={job.date}
				key={index}
			/>
		);
	})

	return (
		<div className="experience">
			<h1>Experience</h1>
			{jobsJSX}
		</div>
	);
}


