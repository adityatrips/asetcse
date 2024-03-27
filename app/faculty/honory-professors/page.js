import React from 'react';
import { data } from './data';
import moment from 'moment';
import Link from 'next/link';

const HonoryProfessors = () => {
	return (
		<div className='px-5 py-10'>
			<h1 className='title pb-10'>Honory Professors</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{data.map((prof) => (
					<div
						key={prof.name}
						class='group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer'
						href='#'
					>
						<div class='p-10 md:p-5'>
							<div class='flex justify-between items-center gap-2'>
								<div>
									<h3 class='group-hover:text-blue-600 font-extrabold text-xl text-gray-800'>
										{prof.name}
									</h3>
									<p class='text-sm text-gray-500 mt-2'>
										<span className='font-bold'>Designation:</span>&nbsp;
										{prof.position}
									</p>
									<p class='text-sm text-gray-500 mt-2'>
										Joined&nbsp;
										<span className='font-bold'>{prof.institute}</span> on&nbsp;
										<span className='font-bold'>
											{moment(prof.date).format('LL')}
										</span>
									</p>
									<Link
										href={`mailto:${prof.email}`}
										class='text-sm mt-2 text-blue-600 hover:underline'
									>
										{prof.email}
									</Link>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HonoryProfessors;
