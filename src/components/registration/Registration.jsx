import React from 'react';
import './registration.scss';
import { Link } from 'react-router-dom';

export const Registration = () => {
	return (
		<div className="registration-popup registration">
			<form className="registration-popup__form" onSubmit="">
				<label className="registration-popup__email">
					<p>Введите почту</p>
					<input type="email" value="" onChange="" />
				</label>
				<label className="registration-popup__name">
					<p>Введите имя</p>
					<input type="name" value="" onChange="" />
				</label>
				<label className="registration-popup__name">
					<p>Введите фамилию</p>
					<input type="surname" value="" onChange="" />
				</label>
				<label className="registration-popup__password">
					<p>Придумайте пароль</p>
					<input type="password" value="" onChange="" />
				</label>
				<label className="registration-popup__password">
					<p>Подтвердите пароль</p>
					<input type="password" value="" onChange="" />
				</label>
				<label className="registration-popup__submit">
					<button className="registration-popup__button" type="submit">
						Зарегистрироваться
					</button>
					<p className="registration-popup__attention">
						Внимание! Указывайте имя и фамилию правильно. После прохождения
						курса они будут вписаны в сертификат.
					</p>
					<p>
						У вас есть аккаунт?&nbsp;
						<Link className="registration-popup__link" to="/">
							Войти
						</Link>
					</p>
				</label>
			</form>
		</div>
	);
};
