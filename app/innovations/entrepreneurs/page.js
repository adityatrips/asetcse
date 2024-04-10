import React from 'react';
import { data } from './data';
import Image from 'next/image';

export const metadata = {
	title: 'Entrepreneurs',
};

const Entrepreneurs = () => {
	return (
		<div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 py-10'>
			{data.map((item, i) => (
				<div
					key={i}
					className='ccard w-full bg-secondary hover:shadow-primary shadow-sm hover:shadow-md transition-shadow rounded-xl'
				>
					<figure className='py-5 flex justify-center'>
						<Image
							height={300}
							width={300}
							src={item.img}
							alt='Shoes'
							className='rounded-xl'
						/>
					</figure>
					<div className='card-body items-center text-center'>
						<h2 className='card-title'>{item.name}</h2>
						<p>{item.desc}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Entrepreneurs;
