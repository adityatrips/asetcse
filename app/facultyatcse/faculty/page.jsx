import React from 'react';
import { data } from './data';
import Link from 'next/link';
import Image from 'next/image';

import { data as facultyPics } from '/images/faculty';

const Faculty = () => {
	return (
		<div className='px-5 py-10'>
			<h1 className='title pb-10'>Faculty</h1>
			<div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 w-[75vw] max-w-[75vw]'>
				{data.map((prof) => (
					<div
						key={prof.author}
						class='self-stretch group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer'
						href='#'
					>
						<Image
							alt={prof.author}
							src={facultyPics[prof.img]}
							class='rounded-t-xl h-auto w-full object-cover aspect-square'
							width={500}
							height={500}
						/>
						<div class='p-10 md:p-5'>
							<div class='flex justify-between items-center gap-2'>
								<div>
									<h3 class='group-hover:text-blue-600 font-extrabold text-xl text-gray-800'>
										{prof.author}
									</h3>
									<p class='text-sm text-gray-500 mt-2'>
										<span className='font-bold'>Institute:</span>&nbsp;
										{prof.inst}
									</p>
									<p className='text-sm text-gray-500 mt-2'>
										{prof.scopus && (
											<React.Fragment>
												<span className='font-bold'>ORCID:</span>&nbsp;
												{prof.orcid}
											</React.Fragment>
										)}
									</p>
									<Link
										href={`https://www.scopus.com/authid/detail.uri?authorId=${prof.scopus}`}
										class='text-sm mt-2 text-blue-600 hover:underline'
									>
										SCOPUS profile
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

export default Faculty;
