import Image from 'next/image';
import React from 'react';

import { internationalVisits } from '@/data';

const GalleryPage = () => {
	return (
		<div className='px-10 p-5'>
			<div className='grid grid-cols-3 gap-5'>
				{internationalVisits.map((image, i) => {
					return (
						<div
							style={{
								overflow: 'hidden',
								borderRadius: '1rem',
							}}
							key={i}
						>
							<Image
								alt={i}
								src={image.img}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default GalleryPage;
