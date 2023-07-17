import React from 'react';
import fotoBlog from '../../images/fotoBlog.png';
import './blogCard.scss';

export const BlogCard = () => {
	return (
		<div className="blog__cards-blog-card blog-card">
			<img className="blog-card__img" src={fotoBlog} alt="fotoBlog"></img>
			<span className="blog-card__data">12.06.2023</span>
			<p className="blog-card__text">
				Исскуственный интелект заменяет научился выражать свое мнение
			</p>
		</div>
	);
};
