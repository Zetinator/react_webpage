import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


function MobileBar(props) {
  return (
    <div className="nav-bar mobile" id="nav-bar-mobile">
      <a
        href="https://unsplash.com/@zetinator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="profile-bild"
          src="https://drive.google.com/uc?export=download&id=1fxvbjK2XT27vCIexXxxvvV9sk-d8ELvq"
          alt="zetinator's profile bild"
        />
      </a>
      <List>
        {[
          "About",
          "Experience",
          "Education",
          "Skills",
          "Languages",
          "Interests",
          "Awards",
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              props.onClick(text);
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

function SideBar(props) {
  return (
    <div className="nav-bar" id="nav-bar">
      <a
        href="https://unsplash.com/@zetinator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="profile-bild"
          src="https://drive.google.com/uc?export=download&id=1fxvbjK2XT27vCIexXxxvvV9sk-d8ELvq"
          alt="zetinator's profile bild"
        />
      </a>
      <List>
        {[
          "About",
          "Experience",
          "Education",
          "Skills",
          "Languages",
          "Interests",
          "Awards",
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            id={text + `_button`}
            onClick={() => {
              props.onClick(text);
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 240,
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

export default function NavBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (side, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };
  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div>
        <MobileBar {...props} />
      </div>
    </div>
  );
  return (
    <div>
      <div className="app-bar">
        <HideOnScroll {...props}>
          <AppBar style={{ background: "#32363e" }}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                onClick={toggleDrawer("left", true)}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                open={state.left}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
              >
                {sideList("left")}
              </SwipeableDrawer>
              <Typography variant="h6" className={classes.title}>
                About me
              </Typography>
              <a
                href="https://unsplash.com/@zetinator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="mini"
                  src="https://drive.google.com/uc?export=download&id=1fxvbjK2XT27vCIexXxxvvV9sk-d8ELvq"
                  alt="zetinator's profile bild"
                />
              </a>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar className="app-bar" />
      </div>
      <SideBar {...props} />
    </div>
  );
}
