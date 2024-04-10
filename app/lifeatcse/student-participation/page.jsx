import Image from 'next/image';
import React from 'react';
import { data } from './data';

export const metadata = {
	title: 'Student Participation',
};

const StudentParticipation = () => {
	return (
		<div className='px-5 py-10'>
			<h1 className='title pb-10'>Student Participation</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
				{data.map((item, index) => {
					return (
						<div
							key={index}
							className='card w-full bg-base-100 shadow-md hover:shadow-xl transition-shadow'
						>
							<div className='card-body'>
								<p>{item.text}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default StudentParticipation;
