import React from 'react';
import { data } from './data';
import Image from 'next/image';

const Entrepreneurs = () => {
	return (
		<div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 py-10'>
			{data.map((item, i) => (
				<div
					key={i}
					className='card w-full bg-base-100 shadow-md hover:shadow-xl transition-shadow ease-in-out'
				>
					<figure className='py-5'>
						<img
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
