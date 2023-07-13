import React from 'react';
import logoWhite from '../../images/logoWhite.svg';
import profile from '../../images/profile.svg';
import './headerCourse.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const HeaderCourse = () => {
	const { pathname } = useLocation();
	if (pathname !== '/cardProduct') return null;
	return (
		<header className="headerCourse container">
			<nav className="navbar">
				<div className="navbar-group">
					<NavLink className="navbar-brand" to="/">
						<img src={logoWhite} alt="logo" />
					</NavLink>
					<div className="navbar-pagination">
						<a href="#">1</a>
						<a href="#" class="active">
							2
						</a>
						<a href="#">3</a>
						<a href="#">4</a>
						<a href="#">5</a>
					</div>
				</div>

				<NavLink className="nav-link nav-link-profile">
					<img src={profile} alt="profile"></img>
				</NavLink>
			</nav>
		</header>
	);
};
