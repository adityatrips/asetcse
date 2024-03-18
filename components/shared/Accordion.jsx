'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Accordion = ({ accordionData }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleTitleClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<div className='z-30 relative h-[100%]'>
			<div className='font-bold uppercase mx-5 pt-[15vh] text-left py-2'>
				<Link href='/'>Home</Link>
			</div>
			{accordionData.map((item, index) => (
				<div
					className={`${item.title === 'Home' && 'mt-[15vh]'}`}
					key={index}
					onClick={() => {
						console.log(item.id);
						if (item.id !== 'home') {
							document.querySelector('#' + item.id).classList.toggle('hidden');
						}
					}}
				>
					<div
						className={`flex z-30 cursor-pointer justify-between py-2 items-center font-bold uppercase mx-5 text-left transition-all ${
							item.child && 'text-sm hover:font-bold font-normal'
						}`}
					>
						{item.title}
						{item.expandable && (
							<Image
								src={JSON.parse(
									JSON.stringify(require('../../images/icons/expand.svg'))
								)}
								alt='Arrow Down'
							/>
						)}
					</div>
					{item.expandable && (
						<div
							className='hidden'
							id={item.id}
						>
							{item.content.map((subItem, subIndex) => (
								<Link
									key={subIndex}
									href={subItem.href}
									className={`flex z-30 cursor-pointer justify-between items-center font-bold uppercase mx-5 py-1 text-left transition-all ${
										subItem.child && 'text-sm hover:font-bold font-normal'
									}`}
								>
									{subItem.title}
								</Link>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Accordion;
