import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import vk from '../../images/vk.svg';
import inst from '../../images/inst.svg';
import tw from '../../images/tw.svg';
import fb from '../../images/fb.svg';
import logoFooter from '../../images/logoFooter.svg';
import './footer.scss';

export const Footer = () => {
	const { pathname } = useLocation();
	if (pathname === '/cardProduct') return null;
	return (
		<footer className="footer container">
			<nav className="footer__navbar">
				<img className="footer__logo" src={logoFooter} alt="logoFooter"></img>
				<div className="footer__group">
					<ul className="footer__nav">
						<li className="footer__item">
							<NavLink className="footer__link">О нас</NavLink>
						</li>
						<li className="footer__item">
							<NavLink className="footer__link">Курсы</NavLink>
						</li>
						<li className="footer__item">
							<NavLink className="footer__link">Блог</NavLink>
						</li>
					</ul>
					<span>© Все права защищены - 2023</span>
				</div>
				<ul className="footer__list">
					<li className="footer__item">
						<a href="/#" className="footer__link">
							<img src={vk} alt="vk"></img>
						</a>
					</li>
					<li className="footer__item">
						<a href="/#" className="footer__link">
							<img src={inst} alt="inst"></img>
						</a>
					</li>
					<li className="footer__item">
						<a href="/#" className="footer__link">
							<img src={tw} alt="tw"></img>
						</a>
					</li>
					<li className="footer__item">
						<a href="/#" className="footer__link">
							<img src={fb} alt="fb"></img>
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};
