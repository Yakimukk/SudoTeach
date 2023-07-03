import React, { Fragment } from 'react';
import pythonImg from '../../images/pythonImg.svg';
import './aboutCourse.scss';
import { Link } from 'react-router-dom';

export const AboutCourse = () => {
	return (
		<Fragment>
			<main className="main container main-aboutCourse">
				<section className="bannerCourse">
					<div className="bannerCourse-info">
						<div className="bannerCourse-button">Курс</div>
						<h2 className="bannerCourse-title">Python для начинающих</h2>
						<p className="bannerCourse-text">
							В курсе Python для начинающих вы изучите основы программирования,
							переменные, условия, циклы, функции, структуры данных и работу с
							файлами. Практические задания помогут вам применить полученные
							знания и подготовят к созданию собственных проектов.
						</p>
					</div>
					<img
						className="bannerCourse-pythonImg"
						src={pythonImg}
						alt="pythonImg"
					/>
				</section>
				<section className="aboutCourse">
					<div className="aboutCourse-info">
						<h2 className="aboutCourse-info-title">Чему вы научитесь</h2>
						<ul className="aboutCourse-info-list">
							<li className="aboutCourse-item">
								Основы языка программирования Python
							</li>
							<li className="aboutCourse-item">
								Разработка ПО (OC Windows, парсеры)
							</li>
							<li className="aboutCourse-item">
								Веб-разработка (Django 3, Flask, HTML, CSS)
							</li>
							<li className="aboutCourse-item">
								Сетевое программирование (боты для мессенджера Telegram)
							</li>
						</ul>
						<h2 className="aboutCourse-info-title">Как проходит обучение</h2>
						<p className="aboutCourse-info-text">
							Видео-лекции и практические задания по пройденным темам, общение с
							преподавателем.
						</p>
					</div>
					<div className="aboutCourse-card-price aboutCourse-card">
						<div className="aboutCourse-card-price-info">
							<div className="aboutCourse-card-price-discount">
								<span className="oldPrice">2100 RUB</span>
								<span className="newPrice">1050 RUB</span>
							</div>
							<span className="discount">-50%</span>
						</div>
						<Link>
							<button className="aboutCourse-card-price-button">
								Записаться на курс
							</button>
						</Link>
					</div>
					<div className="aboutCourse-card-advantage aboutCourse-card">
						<ul className="aboutCourse-card-list">
							<li className="aboutCourse-card-item">
								<p className="aboutCourse-card-item-duration item">
									Длительность
								</p>
								<p className="aboutCourse-card-item-duration item">4 месяца</p>
							</li>
							<li className="aboutCourse-card-item">
								<p className="aboutCourse-card-item-lessons item">Уроки</p>
								<p className="aboutCourse-card-item-lessons item">
									9 модулей 54 урока{' '}
								</p>
							</li>
							<li className="aboutCourse-card-item">
								<p className="aboutCourse-card-item-online item">Онлайн</p>
								<p className="aboutCourse-card-item-online item">
									В удобное время
								</p>
							</li>
						</ul>
					</div>
				</section>
			</main>
		</Fragment>
	);
};
