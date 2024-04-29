import { internationalVisits } from '@/data';
import Image from 'next/image';
import React from 'react';

const InternationalVisit = () => {
	return (
		<div className='px-10 py-5'>
			<h1 className='title pb-5'>International Visits</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
				{internationalVisits.map((visit, i) => {
					return (
						<div
							key={i}
							className='card w-full bg-secondary hover:shadow-primary shadow-sm hover:shadow-md transition-shadow'
						>
							<div className='card-body flex gap-10 flex-row items-center'>
								<Image
									src={visit.img}
									alt={visit.text}
									className='object-cover w-[50%]'
								/>
								<p className='text-text'>{visit.text}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default InternationalVisit;
