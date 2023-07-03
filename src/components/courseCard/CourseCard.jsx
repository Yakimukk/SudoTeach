import React, { Fragment } from 'react';
import pyhtonCard from '../../images/pyhtonCard.svg';
import './courseCard.scss';
import { Link } from 'react-router-dom';

export const CourseCard = () => {
	return (
		<Fragment>
			<div className="courseCard">
				<div className="courseCard-top">
					<div className="courseCard-info">
						<h3 className="courseCard-info-title">Pyhton. Для новичков</h3>
						<span className="courseCard-info-text">
							Pyhton. Для новичков: вы изучите синтаксис, переменные, условия,
							циклы, функции, типы данных, операции. Pyhton. Для новичков: вы
							изучите синтаксис, переменные, условия, циклы, функции, типы
							данных, операции.Pyhton. Для новичков: вы изучите синтаксис,
							переменные, условия, циклы, функции.
						</span>
					</div>
					<img src={pyhtonCard} alt="pyhtonCard"></img>
				</div>
				<div className="courseCard-bottom">
					<div className="courseCard-info">
						<h3 className="courseCard-info-creator">Тимур Сагитов</h3>
						<span className="courseCard-info-price">1050 RUB</span>
					</div>
					<Link to="/aboutCourse">
						<button className="courseCard-button">Записаться</button>
					</Link>
				</div>
			</div>
		</Fragment>
	);
};
