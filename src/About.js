import React from "react";

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

import "./About.css";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
}));

function Contact() {
	const classes = useStyles();
	return (
		<div>
			<a className="btn" 
				href="mailto:erickzetinator@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Tooltip title="Send me an email, I respond right away :)">
					<Button
						variant="contained"
						color="secondary"
						className={classes.button}
						startIcon={<Icon>email</Icon>}
					>
						Email-me
					</Button>
				</Tooltip>
			</a>
			<a className="btn"
				href="https://zetinator.github.io/resume_english.pdf" target="_blank"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Tooltip title="Download my resume in .pdf">
					<Button
						variant="contained"
						color="default"
						className={classes.button}
						startIcon={<CloudDownloadIcon />}
					>
						resume
					</Button>
				</Tooltip>
			</a>
		</div>
	);
}


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
			<p className="subheading">Schäffbräustr 9 · Ingolstadt, 85049 · +49 163 1932340
				<Contact />
			</p>
			<p className="lead">
				I am experienced programming in C++ and Python,
				I love everything related to machine learning and autonomous cars, 
				and I am also skillful using Django to develop 
				<a className="btn link blue"
					href="https://sheltered-eyrie-56098.herokuapp.com/classifier/" target="_blank"
					target="_blank"
					rel="noopener noreferrer"
				>Web Applications</a>
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

