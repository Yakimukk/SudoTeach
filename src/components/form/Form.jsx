import React, { Fragment } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import './form.scss';

export const Form = () => {
	return (
		<div className="form">
			<Fragment>
				<Sidebar></Sidebar>
				<div></div>
			</Fragment>
		</div>
	);
};
