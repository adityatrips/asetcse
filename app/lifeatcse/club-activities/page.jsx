'use client';

import Image from 'next/image';
import React from 'react';

const clubs = [
	{
		name: 'ALIAS',
		id: 'alias',
		pdf: 'https://drive.google.com/uc?export=download&id=1eNWd8kaAw4kafir7bnP30cVdZJa4CosD',
		img: require('../../../images/clubs/ALIAS.jpg'),
	},
	{
		name: 'Cloud Security Club',
		id: 'csc',
		pdf: 'https://drive.google.com/uc?export=download&id=1HyEl2h8OCWi8Xu47EwZkFh8fy9pCSwVJ',
		img: JSON.parse(
			JSON.stringify(require('../../../images/clubs/CLOUD_SEC.jpg'))
		),
	},
	{
		name: 'Aritificial Intelligence Club',
		id: 'aic',
		pdf: 'https://drive.google.com/uc?export=download&id=1dFW6EoePMClcYRGB-BzHOK-VAf6hfLhW',
		img: require('../../../images/clubs/AI.jpg'),
	},
	{
		name: 'Data Science Club',
		id: 'dsc',
		pdf: 'https://drive.google.com/uc?export=download&id=1DWbWOYzpw_nSkR7w6_2LnsA16sgolX72',
		img: require('../../../images/clubs/DS.jpg'),
	},
	{
		name: 'Software Engineering Club',
		id: 'sec',
		pdf: 'https://drive.google.com/uc?export=download&id=1DRuc_TIEAmEbtxdLrD9Xdn9k3T0gTLoX',
		img: require('../../../images/clubs/SE.jpg'),
	},
	{
		name: 'Virtual Reality & Game Development',
		id: 'vrgd',
		pdf: 'https://drive.google.com/uc?export=download&id=1_l8S_mrZNYshOBGUanBpThA92iyZOXKf',
		img: require('../../../images/clubs/VRGD.jpeg'),
	},
	{
		name: 'Cyber Security Club',
		id: 'cysc',
		pdf: 'https://drive.google.com/uc?export=download&id=1i8WvDLOIgvo7vMcyMLuTgMLaatf-AuZg',
		img: JSON.parse(
			JSON.stringify(require('../../../images/clubs/CYBER_SEC.png'))
		),
	},
];

const ClubActivities = () => {
	return (
		<div className='px-5 py-10'>
			<h1 className='title'>Club Activities</h1>
			<p>
				There are seven technical clubs in the department to motivate students
				and to provide a platform for research and innovation. These clubs are
				chaired by esteemed faculty member of department and the student
				president. Each club represents a highly enthusiastic, motivated
				students to spread their knowledge through various innovative
				activities. These club organize many technical events on regular basis.
			</p>

			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
				{clubs.map((club, index) => (
					<div
						key={index}
						className='bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between'
					>
						<div className='p-4 '>
							<Image
								src={club.img}
								alt={club.name}
								className='w-full'
							/>
							<h1 className='font-bold text-xl mt-2'>{club.name}</h1>
						</div>
						<a
							className='bg-blue-500 w-[96%] py-2 rounded-md text-white m-[2%] text-center hover:bg-blue-600 transition-all duration-300 ease-in-out'
							href={club.pdf}
						>
							View PDF
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default ClubActivities;
