import React, { Fragment } from 'react';
import fotoBlog from '../../images/fotoBlog.png';
import './blogCard.scss';

export const BlogCard = () => {
	return (
		<Fragment>
			<div className="blogCard">
				<img className="blogCard-img" src={fotoBlog} alt="fotoBlog"></img>
				<span className="blogCard-data">12.06.2023</span>
				<p className="blogCard-text">
					Исскуственный интелект заменяет научился выражать свое мнение
				</p>
			</div>
		</Fragment>
	);
};
