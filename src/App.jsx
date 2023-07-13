import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/main/Main';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { AboutCourse } from './pages/aboutCourse/AboutCourse';
import { SearchResults } from './pages/searchResults/SearchResults';
import { Profile } from './pages/profile/Profile';
import { CardProduct } from './pages/сardProduct/CardProduct';
import { HeaderCourse } from './components/headerCourse/HeaderCourse';

function App() {
	return (
		<Router>
			<Header />
			<HeaderCourse />
			<Routes>
				<Route path="/" exact element={<Main />} />
				<Route path="/aboutCourse" exact element={<AboutCourse />} />
				<Route path="/searchResults" exact element={<SearchResults />} />
				<Route path="/profile" exact element={<Profile />} />
				<Route path="/cardProduct" exact element={<CardProduct />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
