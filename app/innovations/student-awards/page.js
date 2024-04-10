import React from 'react';

export const metadata = {
	title: 'Student Awards',
};

const data = [
	{
		name: 'Ojasvi Jain',
		award: 'First position',
		competition: 'Technoxian, World Robotics Championship',
		year: '2023',
		prize: 'INR 1,00,000',
	},
	{
		name: 'Aarush Agarwal',
		award: 'First position',
		competition: 'TeraTech Hackathon',
		year: '2023',
		prize: 'INR 70,000',
	},
	{
		name: 'Aarush Agarwal',
		award: 'First position',
		competition: 'Ernst & Young Case Scholarship',
		year: '2023',
		prize: 'INR 1,00,000, and a two month internship at Ernst & Young',
	},
	{
		name: 'Sanskar Jain, Rishab Mishra and their team',
		award: 'First position',
		competition: 'Brain Busters: A GeeksForGeeks Odyssey',
		year: '2023',
	},
	{
		name: 'Sambhav Gupta',
		award: 'First position',
		competition: 'Smart India Hackathon',
		year: '2023',
	},
	{
		name: 'Pecheti Charan Lalith,',
		award: 'First position',
		competition: 'Electrothon 6.0',
		year: '2024',
	},
];

const studentAwards = () => {
	return (
		<div className='px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
			{data.map((item, idx) => {
				return (
					<div
						key={idx}
						className='card w-full bg-secondary hover:shadow-primary shadow-sm hover:shadow-md transition-shadow'
					>
						<div className='card-body'>
							<h2 className='card-title'>{item.name}</h2>
							<p>
								<span className='font-bold text-primary'>{item.award}</span> @{' '}
								{item.competition}
							</p>
							<p>{item.prize}</p>
							<div className='card-actions justify-end'>{item.year}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default studentAwards;
