import React, { Fragment } from 'react';

import './myTraining.scss';
import { AddedCourse } from '../addedCourse/AddedCourse';

export const MyTraining = () => {
	return (
		<Fragment>
			<div className="myTraining">
				{[...Array(3)].map((item, index) => (
					<AddedCourse key={index} />
				))}
			</div>
		</Fragment>
	);
};
