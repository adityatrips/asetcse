import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
	return (
		<div className='w-[100%] flex flex-col justify-center items-center'>
			<Image
				width={300}
				height={300}
				src={JSON.parse(JSON.stringify(require('../images/404.svg')))}
				alt='Error'
				className='mb-8'
			/>
			<p className='text-lg mt-4'>
				Oops! The page you&apos;re looking for does not exist.
			</p>
			<p className='text-lg mt-4'>
				Maybe move back to the{' '}
				<Link
					className='text-blue-500 hover:underline font-bold'
					href='/'
				>
					home page
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
