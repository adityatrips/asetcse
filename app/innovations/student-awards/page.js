import React from 'react';

import { studentAwards } from '@/data';

export const metadata = {
	title: 'Student Awards',
};

const StudentAwards = () => {
	return (
		<div className='px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
			{studentAwards.map((item, idx) => {
				return (
					<div
						key={idx}
						className='card w-full bg-secondary hover:shadow-primary shadow-sm hover:shadow-md transition-shadow'
					>
						<div className='card-body'>
							<h2 className='card-title'>{item.name}</h2>
							<p>
								<span className='font-bold text-primary'>{item.award}</span> @{' '}
								{item.competition}
							</p>
							<p>{item.prize}</p>
							<div className='card-actions justify-end'>{item.year}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default StudentAwards;
