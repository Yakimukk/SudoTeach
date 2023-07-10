import React, { Fragment } from 'react';
import './authorization.scss';
import { Link } from 'react-router-dom';

export const Authorization = () => {
	return (
		<Fragment>
			<div className="authorization-popup">
				<form className="authorization-form" onSubmit="">
					<label className="authorization-form-email">
						<p>Введите почту</p>
						<input type="email" value="" onChange="" />
					</label>
					<label className="authorization-form-password">
						<p>Введите пароль</p>
						<input type="password" value="" onChange="" />
					</label>
					<label className="authorization-form-submit">
						<button className="authorization-form-button" type="submit">
							Зарегистрироваться
						</button>
						<p>
							У вас нет аккаунта?&nbsp;
							<Link className="link" to="/">
								Зарегистрироваться
							</Link>
						</p>
					</label>
				</form>
			</div>
		</Fragment>
	);
};
