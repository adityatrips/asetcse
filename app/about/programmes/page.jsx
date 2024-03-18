'use client';
import Navbar from '../../../components/shared/Navbar';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { usePathname } from 'next/navigation';
import React from 'react';

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

const Programs = () => {
	return (
		<div className='px-5 pb-10'>
			<h1 className='title'>Graduate Programmes</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{ugPrograms.map((program, index) => {
					return (
						<div
							key={index}
							className='border p-10 rounded-lg shadow-md bg-white'
						>
							<h1 className='uppercase font-bold text-xl'>{program.name}</h1>
							<p className='text-[#777]'>
								<span className='font-bold'>Duration:&nbsp;</span>
								{program.duration}
							</p>
							<p className='text-[#777]'>
								<span className='font-bold'>
									1st Year Non Sponsored Semester Fees:&nbsp;
								</span>
								{program.nonSponsored}
							</p>
							<p className='text-[#777]'>
								<span className='font-bold'>
									1st Year Sponsored Semester Fees:&nbsp;
								</span>
								{program.sponsored}
							</p>
						</div>
					);
				})}
			</div>
			<h1 className='title pt-10'>Post-Graduate Programmes</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{pgPrograms.map((program, index) => {
					return (
						<div
							key={index}
							className='border p-10 rounded-lg shadow-md bg-white'
						>
							<h1 className='uppercase font-bold text-xl'>{program.name}</h1>
							<p className='text-[#777]'>
								<span className='font-bold'>Duration:&nbsp;</span>
								{program.duration}
							</p>
							<p className='text-[#777]'>
								<span className='font-bold'>
									1st Year Non Sponsored Semester Fees:&nbsp;
								</span>
								{program.nonSponsored}
							</p>
							<p className='text-[#777]'>
								<span className='font-bold'>
									1st Year Sponsored Semester Fees:&nbsp;
								</span>
								{program.sponsored}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Programs;
