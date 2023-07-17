import React from 'react';
import './authorization.scss';
import { Link } from 'react-router-dom';

export const Authorization = () => {
	return (
		<div className="authorization-popup">
			<form className="authorization-popup__form" onSubmit="">
				<label className="authorization-popup__email">
					<p>Введите почту</p>
					<input type="email" value="" onChange="" />
				</label>
				<label className="authorization-popup__password">
					<p>Введите пароль</p>
					<input type="password" value="" onChange="" />
				</label>
				<label className="authorization-popup__submit">
					<button className="authorization-popup__button" type="submit">
						Зарегистрироваться
					</button>
					<p>
						У вас нет аккаунта?&nbsp;
						<Link className="authorization-popup__link" to="/">
							Зарегистрироваться
						</Link>
					</p>
				</label>
			</form>
		</div>
	);
};
