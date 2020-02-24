import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar.js';
import About from './About.js';
import Experience from './Experience.js';
import Education from './Education.js';
import Languages from './Languages.js';
import Interests from './Interests.js';
import Awards from './Awards.js';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
			</header>
			<main className="App-main" id="App-main">
				<section id="About">
					<About />
				</section>
				<section id="Experience">
					<Experience />
				</section>
				<section id="Education">
					<Education />
				</section>
				<section id="Skills">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						education
					</a>
				</section>
				<section id="Languages">
					<Languages />
				</section>
				<section id="Interests">
					<Interests />
				</section>
				<section id="Awards">
					<Awards />
				</section>
			</main>
		</div>
	);
}

export default App;
