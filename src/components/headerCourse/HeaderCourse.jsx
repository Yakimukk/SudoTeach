import React from 'react';
import logoWhite from '../../images/logoWhite.svg';
import profile from '../../images/profile.svg';
import './headerCourse.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const HeaderCourse = () => {
	const { pathname } = useLocation();
	if (pathname !== '/cardProduct') return null;
	return (
		<header className="header-course container">
			<nav className="header-course__navbar">
				<div className="header-course__group">
					<NavLink className="header-course__brand" to="/">
						<img src={logoWhite} alt="logo" />
					</NavLink>
					<div className="header-course__pagination">
						<a href="#">1</a>
						<a href="#" class="active">
							2
						</a>
						<a href="#">3</a>
						<a href="#">4</a>
						<a href="#">5</a>
					</div>
				</div>

				<NavLink className="header-course__link header-course__link-profile">
					<img src={profile} alt="profile"></img>
				</NavLink>
			</nav>
		</header>
	);
};
