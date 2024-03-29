import React from "react";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

function Skill(props) {
  return (
    <div className="skill">
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        <img
          className="lazyload zoom"
          data-src={props.image}
          alt={props.alt}
          id={props.alt}
        />
      </a>
    </div>
  );
}

export default function Experience() {
  // list of software that we know
  const softwares = [
    {
      website: "https://en.wikipedia.org/wiki/Amazon_Web_Services",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/225px-Amazon_Web_Services_Logo.svg.png",
      alt: "aws",
    },
    {
      website: "https://en.wikipedia.org/wiki/Google_Cloud_Platform",
      image:
        "https://cloud.google.com/images/social-icon-google-cloud-1200-630.png",
      alt: "gcp",
    },
    {
      website: "https://en.wikipedia.org/wiki/Docker_(software)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/330px-Docker_%28container_engine%29_logo.svg.png",
      alt: "docker",
    },
    {
      website: "https://en.wikipedia.org/wiki/Kubernetes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/330px-Kubernetes_logo_without_workmark.svg.png",
      alt: "kubernetes",
    },
    {
      website: "https://en.wikipedia.org/wiki/Django_(web_framework)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/278px-Django_logo.svg.png",
      alt: "django",
    },
    {
      website: "https://en.wikipedia.org/wiki/Node.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
      alt: "node_js",
    },
    {
      website: "https://en.wikipedia.org/wiki/PostgreSQL",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png",
      alt: "postgres",
    },
    {
      website: "https://en.wikipedia.org/wiki/React_(web_framework)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png",
      alt: "react_logo",
    },
    {
      website: "https://en.wikipedia.org/wiki/Vue.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/277px-Vue.js_Logo_2.svg.png",
      alt: "vue_logo",
    },
    {
      website: "https://fastapi.tiangolo.com/",
      image:
        "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
      alt: "fastapi_logo",
    },
    {
      website: "https://en.wikipedia.org/wiki/Git",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/225px-Git-logo.svg.png",
      alt: "git",
    },
    {
      website: "https://en.wikipedia.org/wiki/Jenkins_(software)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/langfr-165px-Jenkins_logo.svg.png",
      alt: "jenkins",
    },
    {
      website: "https://en.wikipedia.org/wiki/Nginx",
      image:
        "https://www.nginx.com/wp-content/uploads/2020/05/NGINX-product-icon.svg",
      alt: "nginx",
    },
    {
      website: "https://en.wikipedia.org/wiki/Linux",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/225px-Tux.svg.png",
      alt: "linux",
    },
    {
      website: "https://en.wikipedia.org/wiki/Robot_Operating_System",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ros_logo.svg",
      alt: "ros",
    },
    {
      website: "https://en.wikipedia.org/wiki/Elasticsearch",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Elasticsearch_logo.svg/320px-Elasticsearch_logo.svg.png",
      alt: "elasticsearch_logo",
    },
  ];
  // list of programming languajes
  const languages = [
    {
      website: "https://en.wikipedia.org/wiki/Python_(programming_language)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/150px-Python-logo-notext.svg.png",
      alt: "python",
    },
    {
      website: "https://en.wikipedia.org/wiki/JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/368px-Unofficial_JavaScript_logo_2.svg.png",
      alt: "javascript",
    },
    {
      website: "https://en.wikipedia.org/wiki/Rust_(programming_language)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/144px-Rust_programming_language_black_logo.svg.png",
      alt: "rust",
    },
    {
      website: "https://en.wikipedia.org/wiki/C%2B%2B",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/225px-ISO_C%2B%2B_Logo.svg.png",
      alt: "cpp",
    },
  ];
  // map renderers
  const softwareJSX = softwares.map((software, index) => {
    return (
      <Skill
        website={software.website}
        image={software.image}
        alt={software.alt}
        key={index}
      />
    );
  });
  const languageJSX = languages.map((language, index) => {
    return (
      <Skill
        website={language.website}
        image={language.image}
        alt={language.alt}
        key={index}
      />
    );
  });

  return (
    <div className="skills">
      <h1>Skills</h1>
      <h2 className="blue">Tech Stack</h2>
      <div className="white-container">{softwareJSX}</div>
      <h2 className="blue">PROGRAMMING LANGUAGES</h2>
      <div className="white-container">{languageJSX}</div>
    </div>
  );
}
