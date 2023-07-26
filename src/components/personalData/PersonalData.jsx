import React from 'react';

import './personalData.scss';

export const PersonalData = () => {
	return (
		<div className="profile__personal-data personal-data">
			<h3 className="personal-data__title">Мои данные</h3>
			<form className="personal-data__form" onSubmit="">
				<div className="personal-data__block">
					<label>
						<input
							className="personal-data__input"
							type="name"
							value="Тимур"
							onChange=""
						/>
					</label>
					<label>
						<input
							className="personal-data__input"
							type="surname"
							value="Сагитов"
							onChange=""
						/>
					</label>
				</div>
				<span></span>
				<div className="personal-data__block">
					<label>
						<input
							className="personal-data__input"
							type="email"
							value="timur@mail.ru"
							onChange=""
						/>
					</label>
					<label>
						<input
							className="personal-data__input"
							type="password"
							value="123456789"
							onChange=""
						/>
					</label>
				</div>

				<button className="personal-data__button">Сохранить</button>
			</form>
		</div>
	);
};
