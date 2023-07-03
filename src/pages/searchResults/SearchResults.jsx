import React, { Fragment } from 'react';
import './searchResults.scss';

import { CourseCard } from '../../components/courseCard/CourseCard';

export const SearchResults = () => {
	return (
		<Fragment>
			<main className="main container">
				<section className="searchResults">
					<h2 className="searchResults-title">Результаты поиска</h2>
					<div className="searchResults-cards">
						{[...Array(3)].map((item, index) => (
							<CourseCard key={index} />
						))}
					</div>
				</section>
			</main>
		</Fragment>
	);
};
