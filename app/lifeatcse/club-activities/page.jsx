import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { clubs } from '@/data';

export const metadata = {
	title: 'Club Activities',
};

const ClubActivities = () => {
	return (
		<div className='px-5 py-10'>
			<h1 className='title'>Club Activities</h1>
			<p>
				There are seven technical clubs in the department to motivate students
				and to provide a platform for research and innovation. These clubs are
				chaired by esteemed faculty member of department and the student
				president. Each club represents a highly enthusiastic, motivated
				students to spread their knowledge through various innovative
				activities. These club organize many technical events on regular basis.
			</p>

			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
				{clubs.map((club, index) => (
					<div
						key={index}
						className='card w-full bg-secondary hover:shadow-primary shadow-sm hover:shadow-md transition-shadow'
					>
						<div className='card-body text-center h-full'>
							<figure className='m-5 rounded-full'>
								<Image
									src={club.img}
									alt={club.name}
									className='aspect-square rounded-full'
								/>
							</figure>
							<h2 className='card-title'>{club.name}</h2>
						</div>
						<div className='card-actions justify-end'>
							<Link
								target='_blank'
								href={club.pdf}
								className='bg-primary px-5 py-2 w-full text-center rounded-br-md rounded-bl-md'
							>
								<span>More</span>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ClubActivities;
