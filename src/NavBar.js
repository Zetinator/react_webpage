import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "./NavBar.css";

function smoothScroll(section) {
	document.getElementById(section).scrollIntoView({ 
		behavior: 'smooth' 
	})
}

export default function NavBar() {
	return (
		<div className="nav-bar">
			<img
				className="profile-bild"
				src="https://zetinator.github.io/img/profile.webp"
				alt="zetinator's profile bild"
			/>
			<List>
				{["Experience", "Education", "Skills", "Languages", "Interests", "Awards"].map((text, index) => (
					<ListItem button key={text} onClick={() => {smoothScroll(text)}}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);
}
