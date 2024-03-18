import React from 'react';
const CardX = (props) => {
	return (
		<>
			<div class='flex flex-col bg-white border shadow-sm rounded-xl '>
				<div class='p-4 md:p-10'>
					<h3 class='text-md md:text-xl font-bold text-gray-800'>
						{props.title}
					</h3>
					<p class='mt-2 text-sm md:text-md text-gray-500'>
						<b class='text-sm md:text-md'>Duration: </b>
						{props.time} Years
						<br />
						<b class='text-sm md:text-md'>
							1st Year Non Sponsored Semester Fees:{' '}
						</b>
						{props.fees_ns} Lakh INR
						<br />
						<b class='text-sm md:text-md'>1st Year Sponsored Semester Fees: </b>
						{props.fees_s} Lakh INR
						<br />
					</p>
				</div>
			</div>
		</>
	);
};

export default CardX;
