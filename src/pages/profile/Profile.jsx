import React, { Fragment } from 'react';
import './profile.scss';
import { PersonalData } from '../../components/personalData/PersonalData';
import profileImg from '../../images/profileImg.svg';
import arrow from '../../images/arrow.svg';
import { MyTraining } from '../../components/myTraining/MyTraining';

export const Profile = () => {
	return (
		<Fragment>
			<main className="main container">
				<section className="profile">
					<div className="profile-bloks">
						<div className="profile-info">
							<img src={profileImg} alt="profileImg" />
							<div className="profile-info-text">
								<p className="profile-info-text-name">Тимур Сагитов</p>
								<p className="profile-info-text-id">ID: 17062002</p>
							</div>
						</div>
						<button className="profile-personalData profile-button active">
							<span>Личные данные</span>
							<img src={arrow} alt="profileImg" />
						</button>
						<button className="profile-myTraining profile-button">
							<span>Мое обучение</span>
							<img src={arrow} alt="profileImg" />
						</button>
					</div>
					<div className="profile-section">
						{/* <PersonalData />  */}
						<MyTraining />
					</div>
				</section>
			</main>
		</Fragment>
	);
};
