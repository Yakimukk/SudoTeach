import React from 'react';

import './myTraining.scss';
import { AddedCourse } from '../addedCourse/AddedCourse';

export const MyTraining = () => {
	return (
		<div className="profile__my-training my-training">
			{[...Array(3)].map((item, index) => (
				<AddedCourse key={index} />
			))}
		</div>
	);
};
