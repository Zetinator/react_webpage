import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div>
      <a
        className="btn"
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
      <a
        className="btn"
        href="https://drive.google.com/file/d/1YTu9EC7w_9p1FOtbUyepERHwyfnc7N9V/view?usp=sharing"
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
      <a
        className="btn"
        href="https://youtu.be/LT-8tDMSFo0?t=40"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tooltip title="Watch my autonomous car in action! :D">
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<PlayCircleOutlineIcon />}
          >
            greatest project
          </Button>
        </Tooltip>
      </a>
    </div>
  );
}

export default function About() {
  return (
    <div className="about">
      <h1 className="gross">
        Erick <span className="blue">Zetina</span>

      </h1>
      <p className="subheading">
        Ciudad de México, CDMX · +52 55 8686 7462
      </p>
      <Contact />
      <p className="lead">
        Software Engineer at:
      </p>
      <img
        className="lazyload zoom"
        data-src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="google logo"
        id="google_id"
      />
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/erick-zetina-b922a2173/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/Zetinator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/zetinator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://wa.me/525586867462"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}
