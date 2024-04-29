import React from 'react';
import Link from 'next/link';

import { ugPrograms, pgPrograms } from '@/data';

export const metadata = {
	title: 'Programmes Offered',
};

const Programs = () => {
	return (
		<React.Fragment>
			<div className='px-5 py-10'>
				<h1 className='title'>Under-Graduate Programmes</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
					{ugPrograms.map((program, index) => {
						return (
							<Link
								key={index}
								class='group flex flex-col bg-secondary hover:shadow-primary shadow-md rounded-xl hover:shadow-md transition'
								href='https://amity.edu/aset/programmes-UG.asp'
							>
								<div class='p-10 md:p-5'>
									<div class='flex justify-between items-center gap-2'>
										<div>
											<h3 class='font-extrabold text-xl text-primary'>
												{program.name}
											</h3>
											<p class='text-sm mt-2'>
												<span className='font-bold text-text'>
													Duration of the course:
												</span>
												&nbsp;{program.duration}
											</p>
										</div>
										<div class='ps-3'>
											<svg
												class='flex-shrink-0 size-5'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											>
												<path d='m9 18 6-6-6-6' />
											</svg>
										</div>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
				<h1 className='title pt-10'>Post-Graduate Programmes</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
					{pgPrograms.map((program, index) => {
						return (
							<Link
								key={index}
								class='group flex flex-col bg-secondary hover:shadow-primary shadow-md rounded-xl hover:shadow-md transition'
								href='https://amity.edu/aset/programmes-PG.asp'
							>
								<div class='p-10 md:p-5'>
									<div class='flex justify-between items-center'>
										<div>
											<h3 class='font-extrabold text-xl text-primary'>
												{program.name}
											</h3>
											<p class='text-sm mt-2'>
												<span className='font-bold text-text'>
													Duration of the course:
												</span>
												&nbsp;{program.duration}
											</p>
										</div>
										<div class='ps-3'>
											<svg
												class='flex-shrink-0 size-5'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											>
												<path d='m9 18 6-6-6-6' />
											</svg>
										</div>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Programs;
