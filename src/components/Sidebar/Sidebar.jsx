import React from 'react';
import { Service } from '../service/Service';
import './sidebar.scss';

export const Sidebar = () => (
	<div className="container-fluid">
		<div className="row flex-nowrap">
			<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
				<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
					<ul
						className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
						id="menu"
					>
						<li className="nav-item">
							<a href="#" className="nav-link align-middle px-0">
								<i className="fs-4 bi-house"></i>
								<span className="ms-1 d-none d-sm-inline">Выберите услугу</span>
							</a>
						</li>
						<li>
							<a href="#" className="nav-link px-0 align-middle">
								<i className="fs-4 bi-table"></i>
								<span className="ms-1 d-none d-sm-inline">Дата и время</span>
							</a>
						</li>
						<li>
							<a href="#" className="nav-link px-0 align-middle">
								<i className="fs-4 bi-people"></i>
								<span className="ms-1 d-none d-sm-inline">Ваша информация</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="col py-3">
				<Service />
			</div>
		</div>
	</div>
);
