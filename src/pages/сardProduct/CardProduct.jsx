import React, { Fragment } from 'react';
import './cardProduct.scss';
import { ProductTheory } from '../../components/productTheory/ProductTheory';
import MediaQuery from 'react-responsive';

const Sidebar = () => {
	return (
		<div className="card-product__sidebar menu__box">
			<div className="card-product__modul">
				<div className="card-product__title item ">1 Вводная часть</div>
				<div className="card-product__lesson item active">
					1.1 Моделирование выдавли...
				</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
			</div>
			<div className="card-product__modul">
				<div className="card-product__title item">1 Вводная часть</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
				<div className="card-product__lesson item">
					1.1 Моделирование выдавли...
				</div>
			</div>
		</div>
	);
};

export const CardProduct = () => {
	return (
		<Fragment>
			<main className="main container">
				<section className="card-product">
					<MediaQuery minWidth={450}>
						<Sidebar />
					</MediaQuery>
					<MediaQuery minWidth={300} maxWidth={450}>
						{' '}
						<div className="card-product__burger">
							<div className="card-product__menu menu">
								<input id="menu__toggle" type="checkbox" />
								<label className="menu__btn" for="menu__toggle">
									<span></span>
								</label>
								<h3 className="menu__title">1 Вводная часть</h3>
								<Sidebar />
							</div>
						</div>
					</MediaQuery>

					<ProductTheory />
				</section>
			</main>
		</Fragment>
	);
};
