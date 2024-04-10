'use client';

import React from 'react';
import { data as src } from './data';
import Link from 'next/link';

const Publications = () => {
	const [data, setData] = React.useState(src);
	const [byAuthor, setByAuthor] = React.useState(false);
	const [search, setSearch] = React.useState('');

	const filterByTitle = (e) => {
		setSearch(e.target.value);

		if (!byAuthor) {
			setData(
				src.filter((item) => {
					return item.title.toLowerCase().includes(search.toLowerCase());
				})
			);
		} else {
			setData(
				src.filter((item) => {
					return item.authors.toLowerCase().includes(search.toLowerCase());
				})
			);
		}
	};

	const toggleByAuthor = () => {
		setData(src);
		setByAuthor(!byAuthor);
		setSearch('');
	};

	return (
		<div className='px-5 py-10 grid grid-cols-1 gap-5'>
			<label className='input input-bordered flex items-center gap-2'>
				<input
					type='text'
					className='grow'
					placeholder='Search'
					onChange={filterByTitle}
					value={search}
				/>
				<span className='badge badge-secondary text-[#fff]'>Start typing</span>
			</label>
			<label
				className='items-center flex'
				htmlFor='radio'
			>
				<input
					type='radio'
					name='radio-2'
					className='radio radio-secondary'
					checked={!byAuthor}
					onClick={toggleByAuthor}
				/>
				<span className='pl-5'>By title</span>
			</label>
			<label
				className='items-center flex'
				htmlFor='radio'
			>
				<input
					type='radio'
					name='radio-2'
					className='radio radio-secondary'
					checked={byAuthor}
					onClick={toggleByAuthor}
				/>
				<span className='pl-5'>By author</span>
			</label>

			{data.map((item, idx) => (
				<div
					key={idx}
					className='card w-[100%] bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out'
				>
					<div className='card-body'>
						<h2 className='card-title'>{item.title}</h2>
						<p>{item.authors}</p>
						<p>{item.sourceTitle}</p>
						<p>
							{item.documentType} by {item.publisher}
						</p>
						<div className='card-actions justify-end'>
							<Link
								href={item.link}
								target='_blank'
								className='btn btn-primary'
							>
								Read
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Publications;
