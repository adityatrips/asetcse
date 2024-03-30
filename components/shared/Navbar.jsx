'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import Accordion from './Accordion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import menuSvg from '/images/icons/menu.svg';
import expandSvg from '/images/icons/expand.svg';
import auupLogo from '/images/auup-logo.png';
import logo from '/images/logo.png';

export default function Navbar() {
	let accordionData = [
		{
			title: 'About',
			id: 'about',
			expandable: true,
			content: [
				{
					title: 'Programmes Offered',
					content: null,
					child: true,
					href: '/about/programmes',
				},
				{
					title: 'Social Media',
					content: null,
					child: true,
					href: '/about/social-media',
				},
			],
		},
		{
			title: 'Life@CSE',
			id: 'lifeatcse',
			expandable: true,
			content: [
				{
					title: 'Student Participation & Achievements',
					content: null,
					child: true,
					href: '/lifeatcse/student-participation',
				},
				{
					title: 'Club / Committee Activities',
					content: null,
					child: true,
					href: '/lifeatcse/club-activities',
				},
				{
					title: 'Student Chapters',
					content: null,
					child: true,
					href: '/lifeatcse/student-chapters',
				},
				{
					title: 'Parent Feedback',
					content: null,
					child: true,
					href: '/lifeatcse/parent-feedback',
				},
				{
					title: 'Industry Feedback',
					content: null,
					child: true,
					href: '/lifeatcse/industry-feedback',
				},
			],
		},
		{
			title: 'Events@CSE',
			id: 'eventsatcse',
			expandable: true,
			content: [
				{
					title: 'Conferences',
					content: null,
					child: true,
					href: '/eventsatcse/conferences',
				},
				{
					title: 'Guest Lectures',
					content: null,
					child: true,
					href: '/eventsatcse/guest-lectures',
				},
				{
					title: 'Workshops',
					content: null,
					child: true,
					href: '/eventsatcse/workshops',
				},
			],
		},
		{
			title: 'Innovations',
			id: 'innovations',
			expandable: true,
			content: [
				{
					title: 'Publications / Patents / Projects',
					content: null,
					child: true,
					href: '/innovations/publications',
				},
				{
					title: 'Entrepreneurs',
					content: null,
					child: true,
					href: '/innovations/entrepreneurs',
				},
				{
					title: 'Student Innovation',
					content: null,
					child: true,
					href: '/innovations/student-innovation',
				},
				{
					title: 'Student Awards',
					content: null,
					child: true,
					href: '/innovations/student-awards',
				},
			],
		},
		{
			title: 'Faculty@CSE',
			id: 'facultyatcse',
			expandable: true,
			content: [
				{
					title: 'Honory Professors',
					content: null,
					child: true,
					href: '/facultyatcse/honory-professors',
				},
				{
					title: 'Faculty',
					content: null,
					child: true,
					href: '/facultyatcse/faculty',
				},
			],
		},
		{
			title: 'Alumni',
			id: 'alumni',
			expandable: true,
			content: [
				{
					title: 'Alumni Awards',
					content: null,
					child: true,
					href: '/alumni/alumni-awards',
				},
				{
					title: 'Alumni Messages',
					content: null,
					child: true,
					href: '/alumni/alumni-messages',
				},
			],
		},
		{
			title: 'International Relations',
			id: 'international',
			expandable: true,
			content: [
				{
					title: 'International Student Exchange',
					content: null,
					child: true,
					href: '/international/exchange',
				},
				{
					title: 'Students at Foreign Universities',
					content: null,
					child: true,
					href: '/international/students',
				},
				{
					title: 'International Visits',
					content: null,
					child: true,
					href: '/international/visits',
				},
				{
					title: 'International Speakers',
					content: null,
					child: true,
					href: '/international/speakers',
				},
				{
					title: "Student's Feedback",
					content: null,
					child: true,
					href: '/international/student-feedback',
				},
				{
					title: 'Gallery',
					content: null,
					child: true,
					href: '/international/gallery',
				},
			],
		},
	];

	const [expanded, setExpanded] = React.useState(false);

	const toggleSidebar = () => {
		setExpanded((prev) => !prev);
	};

	const [navHeight, setNavHeight] = React.useState('0');
	const navRef = React.useRef(null);

	useEffect(() => {
		if (!navRef.current) {
			return;
		}

		const resizeObserver = new ResizeObserver(() => {
			if (navRef.current.offsetHeight !== navHeight) {
				setNavHeight(`${navRef.current.offsetHeight}`);
				console.log(`${navRef.current.offsetHeight}`);
			}
		});

		resizeObserver.observe(navRef.current);

		return function cleanup() {
			resizeObserver.disconnect();
		};
	}, [navHeight]);

	return (
		<React.Fragment>
			<div
				className={`fixed transition-colors top-0 left-0 w-[100%] h-[100vh] ${
					expanded ? 'bg-[rgba(0,0,0,0.5)]' : 'hidden'
				}`}
			></div>

			{/* NAVBAR  */}

			<nav>
				<div className='h-[7rem] flex justify-center items-center z-30'>
					<Image
						height={50}
						width={50}
						src={menuSvg}
						alt='Menu'
						className='md:hidden absolute w-[10vh] p-5 top-[2.5vh] left-[2.5vh] cursor-pointer z-30 bg-white drop-shadow-2xl'
						onClick={toggleSidebar}
					/>
					<Image
						src={auupLogo}
						alt='Amity University Uttar Pradesh'
						quality={100}
						className='w-64 sm:w-96'
					/>
				</div>
				<div className='flex justify-center items-center md:py-2'>
					{accordionData.map((item, index) => {
						return (
							<div
								key={index}
								className='hidden md:block'
							>
								<div
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
											src={expandSvg}
											alt='Arrow Down'
											width={20}
											height={20}
											className='inline'
										/>
									)}
									<div
										className='absolute hidden top-[2rem] drop-shadow-lg bg-white rounded-md'
										id={item.title}
									>
										{item.expandable && (
											<div>
												{item.content.map((subItem, index) => {
													return (
														<div
															className='text-lg font-semibold text-black hover:text-blue-500 py-1 px-2'
															key={index}
														>
															<Link href={subItem.href}>{subItem.title}</Link>
														</div>
													);
												})}
											</div>
										)}
									</div>
								</div>
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
						src={logo}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
