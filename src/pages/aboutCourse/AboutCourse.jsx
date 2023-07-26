import React, { Fragment } from 'react';
import pythonImg from '../../images/pythonImg.svg';
import './aboutCourse.scss';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

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
							Для кого этот курс Курс предназначен для следующих категорий
							слушателей: 1. Начинающие специалисты по анализу данных, желающие
							ознакомиться с возможностями библиотеки Pandas и научиться
							применять их для решения реальных задач. 2. Программисты и
							разработчики, которые хотят расширить свои знания и навыки в
							области анализа данных и статистики, добавив в свой арсенал мощные
							инструменты для работы с данными, предоставляемые библиотекой
							Pandas. 3. Исследователи, ученые и академические специалисты,
							работающие с данными и заинтересованные в изучении эффективных
							методов анализа данных, доступных с использованием Pandas. 4.
							Студенты, изучающие дисциплины, связанные с анализом данных,
							статистикой или машинным обучением, и желающие овладеть
							практическими навыками работы с Pandas. 5. Специалисты из других
							областей, работающие с данными в своей деятельности (например, в
							области финансов, маркетинга, производства и т. д.), которые хотят
							научиться анализировать и обрабатывать данные с помощью Pandas для
							улучшения своих профессиональных результатов.
						</p>
					</div>
					<MediaQuery minWidth={1000}>
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
									<p className="course-advantage__duration item">
										Длительность
									</p>
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
									<p className="course-advantage__online item">
										В удобное время
									</p>
								</li>
							</ul>
						</div>
					</MediaQuery>
					<MediaQuery minWidth={300} maxWidth={1000}>
						<div className="about-course__card-sticky">
							<div className="course-advantage">
								<ul className="course-advantage__list">
									<li className="course-advantage__item">
										<p className="course-advantage__duration item">
											Длительность
										</p>
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
										<p className="course-advantage__online item">
											В удобное время
										</p>
									</li>
								</ul>
							</div>
							<div className="course-price">
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
						</div>
					</MediaQuery>
				</section>
			</main>
		</Fragment>
	);
};
