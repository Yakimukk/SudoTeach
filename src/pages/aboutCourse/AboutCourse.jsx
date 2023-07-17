import React, { Fragment } from 'react';
import pythonImg from '../../images/pythonImg.svg';
import './aboutCourse.scss';
import { Link } from 'react-router-dom';

export const AboutCourse = () => {
	return (
		<Fragment>
			<main className="main container main__about-course">
				<section className="banner-course">
					<div className="banner-course__info">
						<div className="banner-course__button">Курс</div>
						<h2 className="banner-course__title">Python для начинающих</h2>
						<p className="banner-course__text">
							В курсе Python для начинающих вы изучите основы программирования,
							переменные, условия, циклы, функции, структуры данных и работу с
							файлами. Практические задания помогут вам применить полученные
							знания и подготовят к созданию собственных проектов.
						</p>
					</div>
					<img
						className="banner-course__pythonImg"
						src={pythonImg}
						alt="pythonImg"
					/>
				</section>
				<section className="about-course">
					<div className="about-course__info">
						<h2 className="about-course__title">Чему вы научитесь</h2>
						<ul className="about-course__list">
							<li className="about-course__item">
								Основы языка программирования Python
							</li>
							<li className="about-course__item">
								Разработка ПО (OC Windows, парсеры)
							</li>
							<li className="about-course__item">
								Веб-разработка (Django 3, Flask, HTML, CSS)
							</li>
							<li className="about-course__item">
								Сетевое программирование (боты для мессенджера Telegram)
							</li>
						</ul>
						<h2 className="about-course__title">Как проходит обучение</h2>
						<p className="about-course__text">
							Видео-лекции и практические задания по пройденным темам, общение с
							преподавателем.
						</p>
					</div>
					<div className="about-course__card course-price">
						<div className="course-price__info">
							<div className="course-price__price">
								<span className="course-price__oldPrice">2100 RUB</span>
								<span className="course-price__newPrice">1050 RUB</span>
							</div>
							<span className="course-price__discount">-50%</span>
						</div>
						<Link>
							<button className="course-price__button">
								Записаться на курс
							</button>
						</Link>
					</div>
					<div className="about-course__card course-advantage">
						<ul className="course-advantage__list">
							<li className="course-advantage__item">
								<p className="course-advantage__duration item">Длительность</p>
								<p className="course-advantage__duration item">4 месяца</p>
							</li>
							<li className="course-advantage__item">
								<p className="course-advantage__lessons item">Уроки</p>
								<p className="course-advantage__lessons item">
									9 модулей 54 урока
								</p>
							</li>
							<li className="course-advantage__item">
								<p className="course-advantage__online item">Онлайн</p>
								<p className="course-advantage__online item">В удобное время</p>
							</li>
						</ul>
					</div>
				</section>
			</main>
		</Fragment>
	);
};
