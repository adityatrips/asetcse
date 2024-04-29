import React from 'react';
import { intlSpeakers } from '@/data';

const InternationalSpeakers = () => {
	return (
		<div className='px-10 py-5'>
			<div className='grid grid-cols-1 gap-5'>
				{intlSpeakers.map((speaker, i) => (
					<div
						key={i}
						className='card w-full bg-secondary hover:shadow-primary shadow-sm hover:shadow-md transition-shadow'
					>
						<div className='card-body flex items-start flex-col'>
							<h1 className='text-text uppercase font-bold text-xl'>
								{speaker.name}
							</h1>
							<p>
								{speaker.programme} {speaker.batch && speaker.batch}
							</p>
							{speaker.exposure && <p>{speaker.exposure}</p>}
							<hr
								style={{
									width: '100%',
									height: '1px',
									backgroundColor: 'white',
								}}
							/>
							<p>{speaker.message}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default InternationalSpeakers;
