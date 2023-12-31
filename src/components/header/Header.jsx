import React, { Fragment } from 'react';
import logo from '../../images/logo.svg';
import icon from '../../images/Icon.svg';
import profile from '../../images/profile.svg';
import './header.scss';
import { NavLink, useLocation } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const HeaderDekstop = () => (
	<MediaQuery minWidth={1000}>
		<header className="header container">
			<nav className="header__navbar">
				<NavLink className="header__logo" to="/">
					<img src={logo} alt="logo" />
				</NavLink>
				<ul className="header__nav">
					<li className="header__item header__item-catalog">
						<NavLink className="header__link header__link-button">
							<img src={icon} alt="icon"></img>
							<span>Каталог</span>
						</NavLink>
					</li>
					<li className="header__item">
						<form className="header__search" action="/searchResults">
							<button type="submit"></button>
							<input type="text" placeholder="Поиск курсов"></input>
						</form>
					</li>
					<li className="header__item">
						<NavLink className="header__link" to="/profile">
							Мое обучение
						</NavLink>
					</li>
					<li className="header__item">
						<NavLink className="header__link header__link-authorization">
							<span>Войти</span>
						</NavLink>
						<NavLink className="header__link header__link-profile">
							<img src={profile} alt="profile"></img>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	</MediaQuery>
);

export const Header = () => {
	const { pathname } = useLocation();
	if (pathname === '/cardProduct') return null;
	else if (pathname === '/profile')
		return (
			<Fragment>
				<HeaderDekstop />
				<MediaQuery minWidth={300} maxWidth={1000} />
			</Fragment>
		);
	else
		return (
			<Fragment>
				<HeaderDekstop />
				<MediaQuery minWidth={300} maxWidth={1000}>
					<header className="header container">
						<nav className="header__navbar">
							<NavLink className="header__logo" to="/">
								<img src={logo} alt="logo" />
							</NavLink>
							<ul className="header__nav">
								<li className="header__item">
									<NavLink className="header__link" to="/profile">
										Мое обучение
									</NavLink>
								</li>
								<li className="header__item">
									<NavLink className="header__link header__link-profile">
										<img src={profile} alt="profile"></img>
									</NavLink>
								</li>
							</ul>
						</nav>
						<form className="header__search" action="/searchResults">
							<button type="submit"></button>
							<input type="text" placeholder="Поиск курсов"></input>
						</form>
					</header>
				</MediaQuery>
			</Fragment>
		);
};
