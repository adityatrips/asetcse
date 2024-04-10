import React from 'react';

export const metadata = {
	title: 'Social Media',
};

const SocialPage = () => {
	return (
		<div className='px-5 py-10'>
			<h1 className='text-3xl title pb-10 w-full'>Social Media</h1>

			<div className='flex flex-col'>
				Facebook:&nbsp;
				<a
					className='hover:font-bold transition-all text-blue-500 pb-5'
					href='https://www.facebook.com/cse.aset.75/'
				>
					https://www.facebook.com/cse.aset.75/
				</a>
				Twitter:&nbsp;
				<a
					className='hover:font-bold transition-all text-blue-500 pb-5'
					href='https://twitter.com/CSE_ASET'
				>
					https://twitter.com/CSE_ASET
				</a>
				LinkedIn:&nbsp;
				<a
					className='hover:font-bold transition-all text-blue-500 pb-5'
					href='https://www.linkedin.com/in/cse-aset-auup-6a39041ab/'
				>
					https://www.linkedin.com/in/cse-aset-auup-6a39041ab/
				</a>
				YouTube&nbsp;
				<a
					className='hover:font-bold transition-all text-blue-500 pb-5'
					href='https://www.youtube.com/channel/UC5XLGhW3lz1zIFxNQ1NR5sA'
				>
					https://www.youtube.com/channel/UC5XLGhW3lz1zIFxNQ1NR5sA
				</a>
			</div>
		</div>
	);
};

export default SocialPage;
