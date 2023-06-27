import React from 'react';
import logo from '../../images/logo.svg';
import './header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => (
	<header className="header container">
		<nav className="navbar">
			<a className="navbar-brand" href="#">
				<img src={logo} alt="logo" />
			</a>
			<ul className="navbar-nav">
				<li className="nav-item"></li>
				<li className="nav-item"></li>
				<li className="nav-item">
					<NavLink className="nav-link">Мое обучение</NavLink>
				</li>
				<li className="nav-item">
					<NavLink></NavLink>
				</li>
			</ul>
		</nav>
	</header>
);
