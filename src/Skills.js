import React from "react";
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

function Skill(props) {
	return (
		<div className="skill">
			<a
				href={props.website}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img className="lazyload zoom" 
					data-src={props.image}
					alt={props.alt}
					id={props.alt}
				/>
			</a>
		</div>
	);
}

export default function Experience() {
	const softwares = [
		{
			website: "https://en.wikipedia.org/wiki/TensorFlow" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/TensorFlowLogo.svg/330px-TensorFlowLogo.svg.png" ,
			alt: "tensorflow" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/React_(web_framework)" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" ,
			alt: "react_logo" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/OpenCV" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_Logo_with_text_svg_version.svg/270px-OpenCV_Logo_with_text_svg_version.svg.png" ,
			alt: "opencv" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/Django_(web_framework)" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/278px-Django_logo.svg.png" ,
			alt: "django" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/Linux" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/225px-Tux.svg.png" ,
			alt: "linux" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/Docker_(software)" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/330px-Docker_%28container_engine%29_logo.svg.png" ,
			alt: "docker" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/Kubernetes" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/330px-Kubernetes_logo_without_workmark.svg.png" ,
			alt: "kubernetes" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/Git" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/225px-Git-logo.svg.png" ,
			alt: "git" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/Jenkins_(software)" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/langfr-165px-Jenkins_logo.svg.png" ,
			alt: "jenkins" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/CMake" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cmake.svg/144px-Cmake.svg.png" ,
			alt: "cmake" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/Nginx" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nginx_logo.svg/330px-Nginx_logo.svg.png" ,
			alt: "nginx" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/Amazon_Web_Services" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/225px-Amazon_Web_Services_Logo.svg.png" ,
			alt: "aws" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/Robot_Operating_System" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ros_logo.svg" ,
			alt: "ros" ,
		},
	]
	const softwareJSX = softwares.map((software, index)=> {
		return (
			<Skill website={software.website}
				image={software.image}
				alt={software.alt}
				key={index}
			/>
		);
	})
	const languages = [
		{
			website: "https://en.wikipedia.org/wiki/Python_(programming_language)" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/150px-Python-logo-notext.svg.png" ,
			alt: "python" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/C%2B%2B" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/225px-ISO_C%2B%2B_Logo.svg.png" ,
			alt: "cpp" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/JavaScript" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/368px-Unofficial_JavaScript_logo_2.svg.png" ,
			alt: "javascript" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/HTML" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" ,
			alt: "html" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/225px-CSS3_logo_and_wordmark.svg.png" ,
			alt: "css" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/Java_(programming_language)" ,
			image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/212px-Java_programming_language_logo.svg.png" ,
			alt: "java" ,
		},
		{
			website: "https://en.wikipedia.org/wiki/MATLAB" ,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/150px-Matlab_Logo.png" ,
			alt: "matlab" ,
		},
	]
	const languageJSX = languages.map((language, index)=> {
		return (
			<Skill website={language.website}
				image={language.image}
				alt={language.alt}
				key={index}
			/>
		);
	})

	return (
		<div className="skills">
			<h1>Skills</h1>
			<h2 className="blue">Software & Tools</h2>
			<div className="white-container">
				{softwareJSX}
			</div>
			<h2 className="blue">PROGRAMMING LANGUAGES</h2>
			<div className="white-container">
				{languageJSX}
			</div>
		</div>
	);
}



