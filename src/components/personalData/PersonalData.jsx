import React, { Fragment } from 'react';

import './personalData.scss';

export const PersonalData = () => {
	return (
		<Fragment>
			<div className="personalData">
				<h3 className="personalData-title">Мои данные</h3>
				<form className="personalData-form" onSubmit="">
					<div className="personalData-top personalData-block">
						<label>
							<input type="name" value="Тимур" onChange="" />
						</label>
						<label>
							<input type="surname" value="Сагитов" onChange="" />
						</label>
					</div>
					<span></span>
					<div className="personalData-block personalData-bottom">
						<label>
							<input type="email" value="timur@mail.ru" onChange="" />
						</label>
						<label>
							<input type="password" value="123456789" onChange="" />
						</label>
					</div>

					<button>Сохранить</button>
				</form>
			</div>
		</Fragment>
	);
};
