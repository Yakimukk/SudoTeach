import React from 'react';
import pyhtonCard from '../../images/pyhtonCard.svg';
import './courseCard.scss';
import { Link } from 'react-router-dom';

export const CourseCard = () => {
	return (
		<div className="course-card">
			<div className="course-card__top">
				<div className="course-card__top-info">
					<h3 className="course-card__title">Pyhton. Для новичков</h3>
					<span className="course-card__text">
						Pyhton. Для новичков: вы изучите синтаксис, переменные, условия,
						циклы, функции, типы данных, операции. Pyhton. Для новичков: вы
						изучите синтаксис, переменные, условия, циклы, функции, типы данных,
						операции.Pyhton. Для новичков: вы изучите синтаксис, переменные,
						условия, циклы, функции.
					</span>
				</div>
				<img src={pyhtonCard} alt="pyhtonCard"></img>
			</div>
			<div className="course-card__bottom">
				<div className="course-card__bottom-info">
					<h3 className="course-card__creator">Тимур Сагитов</h3>
					<span className="course-card__price">1050 RUB</span>
				</div>
				<Link to="/aboutCourse">
					<button className="course-card__button">Записаться</button>
				</Link>
			</div>
		</div>
	);
};
