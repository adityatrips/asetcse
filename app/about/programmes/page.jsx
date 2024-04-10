import React from 'react';
import Link from 'next/link';

let ugPrograms = [
	{
		name: 'B. Tech in Computer Science & Engineering',
		duration: '4 years',
		nonSponsored: '₹ 2,65,000',
		sponsored: '₹ 3,10,000',
	},
	{
		name: 'B. Tech in Computer Science & Engineering + MBA',
		duration: '4 years',
		nonSponsored: '₹ 2,65,000',
		sponsored: '₹ 3,10,000',
	},
	{
		name: 'B. Tech in Computer Science & Engineering - 3 Contienent',
		duration: '4 years',
		nonSponsored: '₹ 2,65,000',
		sponsored: '₹ 3,10,000',
	},
	{
		name: 'B. Tech in Computer Science & Engineering - International',
		duration: '4 years',
		nonSponsored: '₹ 2,65,000',
		sponsored: '₹ 3,10,000',
	},
	{
		name: 'B. Tech in Computer Science & Engineering - IOT & Cyber Security',
		duration: '4 years',
		nonSponsored: '₹ 2,65,000',
		sponsored: '₹ 3,10,000',
	},
	{
		name: 'B. Tech in Computer Science & Engineering - Data Science',
		duration: '4 years',
		nonSponsored: '₹ 2,65,000',
		sponsored: '₹ 3,10,000',
	},
	{
		name: 'B. Tech in Computer Science & Engineering - Evening',
		duration: '4 years',
		nonSponsored: '₹ 2,65,000',
		sponsored: '₹ 3,10,000',
	},
];

let pgPrograms = [
	{
		name: 'M. Tech in Computer Science & Engineering',
		duration: '2 years',
		nonSponsored: '₹ 2,65,000',
		sponsored: '₹ 3,10,000',
	},
	{
		name: 'M. Tech in Data Science',
		duration: '2 years',
		nonSponsored: '₹ 2,65,000',
		sponsored: '₹ 3,10,000',
	},
	{
		name: 'M. Tech in Cyber Security',
		duration: '2 years',
		nonSponsored: '₹ 2,65,000',
		sponsored: '₹ 3,10,000',
	},
];

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
								class='group flex flex-col bg-white border shadow-md rounded-xl hover:shadow-xl transition'
								href='#'
							>
								<div class='p-10 md:p-5'>
									<div class='flex justify-between items-center gap-2'>
										<div>
											<h3 class='font-extrabold text-xl text-gray-800'>
												{program.name}
											</h3>
											<p class='text-sm text-gray-500 mt-2'>
												<span className='font-bold'>
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
								class='group flex flex-col bg-white border shadow-md rounded-xl hover:shadow-xl transition'
								href='#'
							>
								<div class='p-10 md:p-5'>
									<div class='flex justify-between items-center'>
										<div>
											<h3 class='font-extrabold text-xl text-gray-800'>
												{program.name}
											</h3>
											<p class='text-sm text-gray-500 mt-2'>
												<span className='font-bold'>
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
