import React from 'react';
import { data } from './data';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
	title: 'Faculties',
};

import { data as facultyPics } from '@/images/faculty';

const Faculty = () => {
	return (
		<div className='px-5 py-10'>
			<h1 className='title pb-10'>Faculty</h1>

			<div className='grid grid-cols-3 gap-5'>
				{data.map((prof, index) => {
					return (
						<div
							key={index}
							className='card w-ful image-full aspect-square group'
						>
							<figure>
								<Image
									src={facultyPics[prof.img]}
									alt={prof.author}
									className='object-cover w-full h-full transition-all group-hover:scale-125'
								/>
							</figure>
							<div className='card-body'>
								<h2 className='transition-all card-title group-hover:opacity-0'>
									{prof.author}
								</h2>

								<p className='transition-all group-hover:opacity-0'>
									SOCPUS:&nbsp;{prof.scopus}
								</p>
								{prof.orcid !== '' && (
									<p className='transition-all group-hover:opacity-0'>
										ORCID:&nbsp;{prof.orcid}
									</p>
								)}

								<div className='card-actions duration-100 transition-transform justify-end'>
									<Link
										href={`https://www.scopus.com/authid/detail.uri?authorId=${prof.scopus}`}
										target='_blank'
										className='btn btn-primary'
									>
										Visit Profile
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Faculty;
