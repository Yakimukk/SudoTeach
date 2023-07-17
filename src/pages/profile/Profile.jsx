import React from 'react';
import './profile.scss';
import { PersonalData } from '../../components/personalData/PersonalData';
import profileImg from '../../images/profileImg.svg';
import arrow from '../../images/arrow.svg';
import { MyTraining } from '../../components/myTraining/MyTraining';

export const Profile = () => {
	return (
		<main className="main container">
			<section className="profile">
				<div className="profile__bloks">
					<div className="profile__info">
						<img src={profileImg} alt="profileImg" />
						<div className="profile__text">
							<p className="profile__name">Тимур Сагитов</p>
							<p className="profile__id">ID: 17062002</p>
						</div>
					</div>
					<button className="profile__button active">
						<span>Личные данные</span>
						<img src={arrow} alt="profileImg" />
					</button>
					<button className="profile__button">
						<span>Мое обучение</span>
						<img src={arrow} alt="profileImg" />
					</button>
				</div>
				{/* <PersonalData />  */}
				<MyTraining />
			</section>
		</main>
	);
};
