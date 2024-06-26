import React from 'react';
import { industryFeedback } from '@/data';

export const metadata = {
	title: 'Industry Feedback',
};

const ParentFeedback = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 px-5 py-10 gap-5'>
			{industryFeedback.map((item, i) => (
				<div
					key={i}
					className='card w-full bg-secondary hover:shadow-primary shadow-sm hover:shadow-md transition-shadow'
				>
					<div className='card-body'>
						<h2 className='card-title'>{item.by}</h2>
						<small className='font-bold'>{item.designation}</small>
						<p>{item.feedback}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ParentFeedback;
