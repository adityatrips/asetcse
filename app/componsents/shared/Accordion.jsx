'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const Accordion = ({ accordionData }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleTitleClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<div className='z-30 relative h-[100%]'>
			{accordionData.map((item, index) => (
				<div
					className={`${item.title === 'Home' && 'pt-[15vh]'}`}
					key={index}
				>
					<div
						onClick={() => handleTitleClick(index)}
						className={`flex z-30 cursor-pointer justify-between items-center font-bold uppercase py-2 mx-5 text-left transition-all ${
							item.child && 'text-sm hover:font-bold font-normal'
						}`}
					>
						{item.title}
						{item.expandable && (
							<Image
								src={require('../../../images/icons/expand.svg')}
								alt='Arrow Down'
							/>
						)}
					</div>
					{index === activeIndex &&
						(!item.expandable ? (
							<div>{item.content}</div>
						) : (
							<Accordion accordionData={item.content} />
						))}
				</div>
			))}
		</div>
	);
};

export default Accordion;
