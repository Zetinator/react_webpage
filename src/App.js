import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
			</header>
			<main class="App-main">
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
					Learn React
				</a>
			</main>
		</div>
	);
}

export default App;
