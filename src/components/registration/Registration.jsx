import React, { Fragment } from 'react';
import './registration.scss';
import { Link } from 'react-router-dom';

export const Registration = () => {
	return (
		<Fragment>
			<div className="registration-popup">
				<form className="registration-form" onSubmit="">
					<label className="registration-form-email">
						<p>Введите почту</p>
						<input type="email" value="" onChange="" />
					</label>
					<label className="registration-form-name">
						<p>Введите имя</p>
						<input type="name" value="" onChange="" />
					</label>
					<label className="registration-form-name">
						<p>Введите фамилию</p>
						<input type="surname" value="" onChange="" />
					</label>
					<label className="registration-form-password">
						<p>Придумайте пароль</p>
						<input type="password" value="" onChange="" />
					</label>
					<label className="registration-form-password">
						<p>Подтвердите пароль</p>
						<input type="password" value="" onChange="" />
					</label>
					<label className="registration-form-submit">
						<button className="registration-form-button" type="submit">
							Зарегистрироваться
						</button>
						<p className="registration-attention">
							Внимание! Указывайте имя и фамилию правильно. После прохождения
							курса они будут вписаны в сертификат.
						</p>
						<p>
							У вас есть аккаунт?&nbsp;
							<Link className="link" to="/">
								Войти
							</Link>
						</p>
					</label>
				</form>
			</div>
		</Fragment>
	);
};
