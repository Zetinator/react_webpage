import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "./NavBar.css";

function smoothScroll(section) {
	document.getElementById(section).scrollIntoView({ 
		behavior: 'smooth' 
	})
	console.log(document.getElementById(section))
}

function SideBar() {
	return(
		<div className="nav-bar" id="nav-bar">
			<a href="https://unsplash.com/@zetinator"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img className="profile-bild"
					src="https://zetinator.github.io/img/profile.webp"
					alt="zetinator's profile bild"
				/>
			</a>
			<List>
				{["About", "Experience", "Education", "Skills", "Languages", "Interests", "Awards"].map((text, index) => (
					<ListItem button key={text} onClick={() => {smoothScroll(text)}}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);
}

const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}
function openNav() {
  //document.getElementById("nav-bar").style.display = "flex";
  //document.getElementById("nav-bar").style.opacity = 1;
  //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("nav-bar").style.display = "none";
  document.body.style.backgroundColor = "white";
}

export default function NavBar(props) {
	const classes = useStyles();
	return (
		<div>
			<div className="app-bar">
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar>
						<IconButton edge="start" 
							className={classes.menuButton} 
							onClick={openNav}
							color="inherit"
							aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Who is Erick the Zetinator?
						</Typography>
						<a href="https://unsplash.com/@zetinator"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="mini"
								src="https://pbs.twimg.com/profile_images/1222730619727294464/6mts8Pri_400x400.jpg"
								alt="zetinator's profile bild"
							/>
						</a>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar className="app-bar" />
			</div>
			<SideBar />
		</div>
	);
}
