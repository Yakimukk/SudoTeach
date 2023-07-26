import React from 'react';
import pyhtonCard from '../../images/pyhtonCard.svg';
import './addedCourse.scss';
import { Link } from 'react-router-dom';

export const AddedCourse = () => {
	return (
		<div className="added-course">
			<div className="added-course__top">
				<div className="added-course__block">
					<h3 className="added-course__title">Pyhton. Для новичков</h3>
					<span className="added-course__text">
						Pyhton. Для новичков: вы изучите синтаксис, переменные, условия,
						циклы, функции, типы данных, операции. Pyhton. Для новичков: вы
						изучите синтаксис, переменные, условия, циклы, функции, типы данных,
						операции.Pyhton. Для новичков: вы изучите синтаксис, переменные,
						условия, циклы, функции.
					</span>
				</div>
				<img
					className="added-course__img"
					src={pyhtonCard}
					alt="pythonCard"
				></img>
			</div>
			<div className="added-course__bottom">
				<Link to="/">
					<button className="added-course__button">Продолжить курс</button>
				</Link>
				<div className="added-course__info">1/15 модуль</div>
			</div>
		</div>
	);
};
