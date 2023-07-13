import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import vk from '../../images/vk.svg';
import inst from '../../images/inst.svg';
import tw from '../../images/tw.svg';
import fb from '../../images/fb.svg';
import './footer.scss';

export const Footer = () => {
	const { pathname } = useLocation();
	if (pathname === '/cardProduct') return null;
	return (
		<footer className="footer container">
			<nav className="navbar">
				<div className="navbar-group">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link">О нас</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link">Курсы</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link">Блог</NavLink>
						</li>
					</ul>
					<span>© Все права защищены - 2023</span>
				</div>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link">
							<img src={vk} alt="vk"></img>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link">
							<img src={inst} alt="inst"></img>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link">
							<img src={tw} alt="tw"></img>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link">
							<img src={fb} alt="fb"></img>
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};
