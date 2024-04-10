import React from 'react';
import { data } from './data';
import moment from 'moment';
import Link from 'next/link';

export const metadata = {
	title: 'Honoray Professors',
};

const HonoryProfessors = () => {
	return (
		<div className='px-5 py-10'>
			<h1 className='title pb-10'>Honory Professors</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{data.map((prof) => (
					<div
						key={prof.name}
						class='card w-full bg-secondary hover:shadow-primary shadow-sm hover:shadow-md transition-shadow'
					>
						<div className='card-body'>
							<h3 class='card-title'>{prof.name}</h3>
							<p class='text-sm text-text mt-2'>
								<span className='font-bold'>Designation:</span>
								&nbsp;
								{prof.position}
							</p>
							<p class='text-sm text-text mt-2'>
								Joined&nbsp;
								<span className='font-bold text-primary'>
									{prof.institute}
								</span>{' '}
								on&nbsp;
								<span className='font-bold text-primary'>
									{moment(prof.date).format('LL')}
								</span>
							</p>
							<Link
								href={`mailto:${prof.email}`}
								class='text-sm mt-2 text-primary hover:underline'
							>
								{prof.email}
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HonoryProfessors;
