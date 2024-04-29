import React, { useEffect } from 'react';
import { alumniMessages } from '@/data';

export const metadata = {
	title: 'Alumni Messages',
};

const AlumniMessage = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 px-5 py-10 gap-5'>
			{alumniMessages.map((item, i) => (
				<div
					key={i}
					className='card w-full bg-secondary hover:shadow-primary shadow-sm hover:shadow-md transition-shadow'
				>
					<div className='card-body'>
						<p>{item.feedback}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default AlumniMessage;
