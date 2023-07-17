import React from 'react';
import './searchResults.scss';

import { CourseCard } from '../../components/courseCard/CourseCard';

export const SearchResults = () => {
	return (
		<main className="main container">
			<section className="search-results">
				<h2 className="search-results__title">Результаты поиска</h2>
				<div className="search-results__cards">
					{[...Array(3)].map((item, index) => (
						<CourseCard key={index} />
					))}
				</div>
			</section>
		</main>
	);
};
