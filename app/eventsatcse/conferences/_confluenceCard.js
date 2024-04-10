import React from 'react';

const ConfluenceCard = ({ year, desc, link }) => {
	return (
		<div class='flex gap-x-3 relative group rounded-lg'>
			<a
				class='absolute inset-0 z-[1]'
				href={link}
				target='_blank'
			></a>

			<div class='relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-secondary '>
				<div class='relative z-[2] size-7 flex justify-center items-center'>
					<div class='size-2 rounded-full bg-primary border-2 border-secondary group-hover:border-secondary '></div>
				</div>
			</div>

			<div class='grow p-2 pb-8'>
				<h3 class='flex gap-x-1.5 font-bold text-primary text-xl'>
					Confluence {year}
				</h3>
				<p class='mt-1 text-md text-secondary dark:text-secondary pr-2 sm:pr-10'>
					{desc}
				</p>
			</div>
		</div>
	);
};

export default ConfluenceCard;
