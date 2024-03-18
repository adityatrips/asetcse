'use client';

import Image from 'next/image';
import React from 'react';
import Accordion from './Accordion';

export default function Navbar() {
	let accordionData = [
		{
			title: 'Home',
			expandable: false,
		},
		{
			title: 'About',
			expandable: true,
			content: [
				{
					title: 'Overview',
					content: null,
					child: true,
				},
				{
					title: 'Programmes Offered',
					content: null,
					child: true,
				},
				{
					title: 'Social Media',
					content: null,
					child: true,
				},
			],
		},
		{
			title: 'Life@CSE',
			expandable: true,
			content: [
				{
					title: 'Student Participation & Achievements',
					content: null,
					child: true,
				},
				{
					title: 'Club / Committee Activities',
					content: null,
					child: true,
				},
				{
					title: 'Student Chapters',
					content: null,
					child: true,
				},
				{
					title: 'Parent Feedback',
					content: null,
					child: true,
				},
				{
					title: 'Industry Feedback',
					content: null,
					child: true,
				},
			],
		},
		{
			title: 'Events@CSE',
			expandable: true,
			content: [
				{
					title: 'Conferences',
					content: null,
					child: true,
				},
				{
					title: 'Guest Lectures',
					content: null,
					child: true,
				},
				{
					title: 'Workshops',
					content: null,
					child: true,
				},
			],
		},
		{
			title: 'Innovations',
			expandable: true,
			content: [
				{
					title: 'Publications/Patents/Projects',
					content: null,
					child: true,
				},
				{
					title: 'Entrepreneurs',
					content: null,
					child: true,
				},
				{
					title: 'Student Innovation',
					content: null,
					child: true,
				},
				{
					title: 'Student Awards',
					content: null,
					child: true,
				},
			],
		},
		{
			title: 'Faculty@CSE',
			expandable: true,
			content: [
				{
					title: 'Honory Professors',
					content: null,
					child: true,
				},
				{
					title: 'Faculty',
					content: null,
					child: true,
				},
			],
		},
		{
			title: 'Alumni',
			expandable: true,
			content: [
				{
					title: 'Alumni Awards',
					content: null,
					child: true,
				},
				{
					title: 'Alumni Messages',
					content: null,
					child: true,
				},
			],
		},
		{
			title: 'International Relations',
			expandable: true,
			content: [
				{
					title: 'International Student Exchange',
					content: null,
					child: true,
				},
				{
					title: 'Students at Foreign Universities',
					content: null,
					child: true,
				},
				{
					title: 'International Visits',
					content: null,
					child: true,
				},
				{
					title: 'International Speakers',
					content: null,
					child: true,
				},
				{
					title: "Student's Feedback",
					content: null,
					child: true,
				},
				{
					title: 'Gallery',
					content: null,
					child: true,
				},
			],
		},
	];

	const [expanded, setExpanded] = React.useState(false);

	const toggleSidebar = () => {
		setExpanded((prev) => !prev);
	};

	return (
		<React.Fragment>
			<div
				className={`fixed transition-colors top-0 left-0 w-[100%] h-[100vh] ${
					expanded ? 'bg-[rgba(0,0,0,0.5)]' : 'hidden'
				}`}
			></div>

			{/* NAVBAR  */}

			<nav>
				<div className='h-[15vh] flex justify-center items-center z-30'>
					<Image
						height={50}
						width={50}
						src={require('../../../images/icons/menu.svg')}
						alt='Menu'
						className='md:hidden fixed w-[10vh] p-5 top-[2.5vh] left-[2.5vh] cursor-pointer z-30 bg-white drop-shadow-2xl'
						onClick={toggleSidebar}
					/>
					<Image
						src={require('@/images/auup-logo.png')}
						alt='Amity University Uttar Pradesh'
						quality={100}
						className='h-[10vh] w-[auto]'
					/>
				</div>
				<div className='flex justify-center items-center md:py-10'>
					{accordionData.map((item, index) => {
						return (
							<div
								key={index}
								className='hidden md:block'
							>
								<a
									href='#'
									className='px-4 py-2 text-lg font-semibold text-black hover:text-blue-500 relative flex gap-2'
									onMouseEnter={() => {
										document
											.getElementById(item.title)
											.classList.remove('hidden');
									}}
									onMouseLeave={() => {
										document.getElementById(item.title).classList.add('hidden');
									}}
								>
									{item.title}
									{item.expandable && (
										<Image
											src={require('@/images/icons/expand.svg')}
											alt='Arrow Down'
											width={20}
											height={20}
											className='inline'
										/>
									)}
									<div
										className='absolute hidden top-[3rem] drop-shadow-lg bg-white rounded-md'
										id={item.title}
									>
										{item.expandable && (
											<div>
												{item.content.map((subItem, index) => {
													return (
														<div
															key={index}
															className='px-4 py-2 text-lg font-semibold text-black hover:text-blue-500'
														>
															{subItem.title}
														</div>
													);
												})}
											</div>
										)}
									</div>
								</a>
							</div>
						);
					})}
				</div>
			</nav>

			{/* SIDEBAR */}

			<div
				className={`fixed transition-all duration-200 top-0 ${
					expanded ? 'left-0' : '-left-full'
				} w-[50vw] h-[100vh] bg-[#fff]`}
				id='sidebar'
			>
				<Accordion accordionData={accordionData} />
				<div className='absolute hidden md:block bottom-0 left-0 m-[2%] w-[96%] h-[50px] bg-white'>
					<Image
						alt='AUUP Logo'
						src={require('@/images/logo.png')}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
