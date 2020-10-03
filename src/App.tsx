import React from 'react';
import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';
import { Tasks } from './components/Tasks';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<Content />
			<Tasks />
		</div>
	);
}

export default App;
