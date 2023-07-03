import React, { Fragment } from 'react';
import pyhtonCard from '../../images/pyhtonCard.svg';
import './addedCourse.scss';
import { Link } from 'react-router-dom';

export const AddedCourse = () => {
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
					<Link to="/">
						<button className="courseCard-button">Продолжить курс</button>
					</Link>
					<div className="courseCard-info">1/15 модуль</div>
				</div>
			</div>
		</Fragment>
	);
};
