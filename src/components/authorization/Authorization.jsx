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
				<div className="authorization-popup__help">
					<div className="authorization-popup__remember">
						<input type="checkbox"></input>
						<span>Запомнить</span>
					</div>
					<Link className="authorization-popup__forget" to="/">
						Забыли пароль?
					</Link>
				</div>
				<label className="authorization-popup__submit">
					<button className="authorization-popup__button" type="submit">
						Войти
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
