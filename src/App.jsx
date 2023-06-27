import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/main/Main';
import { Header } from './components/header/Header';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" exact element={<Main />} />
			</Routes>
		</Router>
	);
}

export default App;
