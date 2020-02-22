import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "./NavBar.css";

export default function NavBar() {
	return (
		<div className="nav-bar">
			<img
				className="profile-bild"
				src="https://zetinator.github.io/img/profile.webp"
				alt="zetinator's profile picture"
			/>
			<List>
				{["Experience", "Education", "Skills", "Interests", "Awards"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);
}
