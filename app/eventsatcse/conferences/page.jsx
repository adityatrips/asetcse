import React from 'react';
import ConfluenceCard from './_confluenceCard';

export const metadata = {
	title: 'Confluences',
};

const page = () => {
	return (
		<>
			<h1 className='title mt-10 mx-10'>Conferences</h1>
			<div className='px-5 py-10 sm:px-20 sm:py-20'>
				<ConfluenceCard
					year='2024'
					desc="Department of Computer Science & Engineering, Amity School of
							Engineering and Technology, Amity University Uttar Pradesh, Noida,
							organized the 14th International Conference on Cloud Computing,
							Data Science and Engineering, 'Confluence 2024', from 18
							th -19th January 2024."
					link={'https://www.amity.edu/aset/confluence2024'}
				/>
				<ConfluenceCard
					year='2023'
					desc='The pace of change has become blisteringly fast. There is
					technology in everything and everywhere. Every now and then a new
					technology pops up in the market. Computer Science and Information
					Technology have a profound influence on all branches of science,
					engineering, management as well. This event is dedicated to
					technical symposia, tutorial and workshop sessions.'
					link={'https://www.amity.edu/aset/confluence2023'}
				/>
				<ConfluenceCard
					year='2022'
					desc='The pace of change has become blisteringly fast. There is
					technology in everything and everywhere. Every now and then a new
					technology pops up in the market. Computer Science and Information
					Technology have a profound influence on all branches of science,
					engineering, management as well. This event is dedicated to
					technical symposia, tutorial and workshop sessions.'
					link={'https://www.amity.edu/aset/confluence2022'}
				/>
				<ConfluenceCard
					year='2021'
					desc='The pace of change has become blisteringly fast. There is
					technology in everything and everywhere. Every now and then a new
					technology pops up in the market. Computer Science and Information
					Technology have a profound influence on all branches of science,
					engineering, management as well. This event is dedicated to
					technical symposia, tutorial and workshop sessions.'
					link={'https://www.amity.edu/aset/confluence2021'}
				/>
				<ConfluenceCard
					year='2020'
					desc='The pace of change has become blisteringly fast. There is
					technology in everything and everywhere. Every now and then a new
					technology pops up in the market. Computer Science and Information
					Technology have a profound influence on all branches of science,
					engineering, management as well. This event is dedicated to
					technical symposia, tutorial and workshop sessions.'
					link={'https://www.amity.edu/aset/confluence2020'}
				/>
				<ConfluenceCard
					year='2019'
					desc='The pace of change has become blisteringly fast. There is
					technology in everything and everywhere. Every now and then a new
					technology pops up in the market. Computer Science and Information
					Technology have a profound influence on all branches of science,
					engineering, management as well. This event is dedicated to
					technical symposia, tutorial and workshop sessions.'
					link={'https://www.amity.edu/aset/confluence2019'}
				/>
				<ConfluenceCard
					year='2018'
					desc='The pace of change has become blisteringly fast. There is
					technology in everything and everywhere. Every now and then a new
					technology pops up in the market. Computer Science and Information
					Technology have a profound influence on all branches of science,
					engineering, management as well. This event is dedicated to
					technical symposia, tutorial and workshop sessions.'
					link={'https://www.amity.edu/aset/confluence2018'}
				/>
			</div>
		</>
	);
};

export default page;
