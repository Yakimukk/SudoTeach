import React from 'react';
import logo from '../../images/logo.svg';
import icon from '../../images/Icon.svg';
import profile from '../../images/profile.svg';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => (
	<header className="header container">
		<nav className="navbar">
			<Link className="navbar-brand" to="/">
				<img src={logo} alt="logo" />
			</Link>
			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink className="nav-link nav-link-button">
						<img src={icon} alt="icon"></img>
						<span>Каталог</span>
					</NavLink>
				</li>
				<li className="nav-item">
					<form className="nav-search">
						<button type="submit"></button>
						<input type="text" placeholder="Поиск курсов"></input>
					</form>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link">Мое обучение</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link">
						<span>Войти</span>
					</NavLink>
					<NavLink className="nav-link nav-link-profile">
						<img src={profile} alt="profile"></img>
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
);
