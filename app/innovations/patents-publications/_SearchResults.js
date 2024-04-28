'use client';

import React from 'react';
import Link from 'next/link';
import { publication } from '@/data';

const SearchResults = () => {
	const [data, setData] = React.useState(publication);
	const [byAuthor, setByAuthor] = React.useState(false);
	const [search, setSearch] = React.useState('');

	const filterByTitle = (e) => {
		setSearch(e.target.value);

		if (!byAuthor) {
			setData(
				publication.filter((item) => {
					return item.title.toLowerCase().includes(search.toLowerCase());
				})
			);
		} else {
			setData(
				publication.filter((item) => {
					return item.authors.toLowerCase().includes(search.toLowerCase());
				})
			);
		}
	};

	const toggleByAuthor = () => {
		setData(publication);
		setByAuthor(!byAuthor);
		setSearch('');
	};
	return (
		<div className='px-5 py-10 grid grid-cols-1 gap-5'>
			<input
				type='text'
				className='grow border-secondary rounded-md'
				placeholder='Search'
				onChange={filterByTitle}
				value={search}
			/>
			<label
				className='items-center flex'
				htmlFor='radio'
			>
				<input
					type='radio'
					name='radio-2'
					className='radio checked:bg-secondary checked:border-secondary checked:text-secondary'
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
					className='radio checked:bg-secondary checked:border-secondary checked:text-secondary'
					checked={byAuthor}
					onClick={toggleByAuthor}
				/>
				<span className='pl-5'>By author</span>
			</label>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
				{data.map((item, idx) => (
					<div
						key={idx}
						className='card w-full bg-secondary hover:shadow-primary shadow-sm hover:shadow-md transition-shadow'
					>
						<div className='card-body'>
							<h2 className='card-title w-full break-all'>{item.title}</h2>
							<p>{item.authors}</p>
							<p>{item.sourceTitle}</p>
							<p>
								{item.documentType} by {item.publisher}
							</p>
							<div className='card-actions justify-end'>
								<Link
									href={item.link}
									target='_blank'
									className='bg-primary px-5 py-2 w-full text-center rounded-md'
								>
									Read
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchResults;
