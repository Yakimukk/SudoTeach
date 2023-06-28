import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import phytonBanner from '../../images/phytonBanner.png';
import figmaBanner from '../../images/figmaBanner.png';
import './main.scss';
import { CourseCard } from '../../components/courseCard/CourseCard';
import { BlogCard } from '../../components/blogCard/BlogCard';

export const Main = () => {
	return (
		<Fragment>
			<main className="main container">
				<section className="banner">
					<NavLink>
						<img src={phytonBanner} alt="phytonBanner"></img>
					</NavLink>
					<NavLink>
						<img src={figmaBanner} alt="figmaBanner"></img>
					</NavLink>
				</section>
				<section className="popular">
					<h2 className="popular-title title">Популярные курсы</h2>
					<div className="popular-courseCards">
						{[...Array(6)].map((item, index) => (
							<CourseCard key={index} />
						))}
					</div>
				</section>
				<section className="recommendation">
					<h2 className="recommendation-title title">Рекомендуем</h2>
					<div className="recommendation-courseCards">
						{[...Array(3)].map((item, index) => (
							<CourseCard key={index} />
						))}
					</div>
				</section>
				<section className="blog">
					<h2 className="blog-title title">Блог</h2>
					<div className="blog-blogCards">
						{[...Array(3)].map((item, index) => (
							<BlogCard key={index} />
						))}
					</div>
				</section>
			</main>
		</Fragment>
	);
};
