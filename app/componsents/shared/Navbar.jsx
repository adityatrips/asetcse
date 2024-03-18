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
			title: 'International Exposure',
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
			<nav className='flex justify-center items-center z-30'>
				<Image
					height={50}
					width={50}
					src={require('../../../images/icons/menu.svg')}
					alt='Menu'
					className='fixed w-[10vh] p-5 top-0 left-0 cursor-pointer z-30 bg-white drop-shadow-xl'
					onClick={toggleSidebar}
				/>
				<Image
					src={require('@/images/auup-logo.png')}
					alt='Amity University Uttar Pradesh'
					objectFit='contain'
					quality={100}
					className='h-[10vh] w-[auto]'
				/>
			</nav>
			<div
				className={`fixed transition-all duration-200 top-0 ${
					expanded ? 'left-0' : '-left-full'
				} w-[50vw] h-[100vh] bg-[#fff]`}
				id='sidebar'
			>
				<Accordion accordionData={accordionData} />
				<div className='absolute hidden md:block bottom-0 left-0 m-[2%] w-[96%] h-[50px] bg-white'>
					<Image
						fill
						src={require('@/images/logo.png')}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
