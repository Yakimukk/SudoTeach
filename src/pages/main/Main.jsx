import React from 'react';
import { NavLink } from 'react-router-dom';
import phytonBanner from '../../images/phytonBanner.png';
import figmaBanner from '../../images/figmaBanner.png';
import './main.scss';
import { CourseCard } from '../../components/courseCard/CourseCard';
import { BlogCard } from '../../components/blogCard/BlogCard';
// import { Registration } from '../../components/registration/Registration';

export const Main = () => {
	return (
		<main className="main container">
			<section className="banner">
				<NavLink className="banner__phytonBanner">
					<img src={phytonBanner} alt="phytonBanner"></img>
				</NavLink>
				<NavLink className="banner__figmaBanner">
					<img src={figmaBanner} alt="figmaBanner"></img>
				</NavLink>
			</section>
			<section className="popular">
				<h2 className="popular__title title">Популярные курсы</h2>
				<div className="popular__course-cards">
					{[...Array(6)].map((item, index) => (
						<CourseCard key={index} />
					))}
				</div>
			</section>
			<section className="recommendation">
				<h2 className="recommendation__title title">Рекомендуем</h2>
				<div className="recommendation__course-cards">
					{[...Array(3)].map((item, index) => (
						<CourseCard key={index} />
					))}
				</div>
			</section>
			<section className="blog">
				<h2 className="blog__title title">Блог</h2>
				<div className="blog__cards">
					{[...Array(3)].map((item, index) => (
						<BlogCard key={index} />
					))}
				</div>
			</section>
			{/* <Registration /> */}
		</main>
	);
};
