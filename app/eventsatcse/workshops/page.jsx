import Image from 'next/image';
import x1 from '/images/workshop/1.jpeg';
import x2 from '/images/workshop/2.jpeg';
import x3 from '/images/workshop/3.png';
import x4 from '/images/workshop/4.png';
import x5 from '/images/workshop/5.png';
import x6 from '/images/workshop/6.png';
import x7 from '/images/workshop/7.png';
import x8 from '/images/workshop/8.png';
import x9 from '/images/workshop/9.png';
import x10 from '/images/workshop/10.png';
import x11 from '/images/workshop/11.png';
import x12 from '/images/workshop/12.png';
import x13 from '/images/workshop/13.png';
import x14 from '/images/workshop/14.png';
import x15 from '/images/workshop/15.png';
import x16 from '/images/workshop/16.png';

export const metadata = {
	title: 'Workshops',
};

export default function Workshop() {
	return (
		<>
			<h1 className='title mt-10 mx-10'>Workshops</h1>
			<div class='grid grid-cols-2 sm:grid-cols-4 gap-2 my-10 mx-5 sm:mx-10'>
				<div class='space-y-2'>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x1}
						alt='Image Description'
					/>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x2}
						alt='Image Description'
					/>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x3}
						alt='Image Description'
					/>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x4}
						alt='Image Description'
					/>
				</div>
				<div class='space-y-2'>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x5}
						alt='Image Description'
					/>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x6}
						alt='Image Description'
					/>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x7}
						alt='Image Description'
					/>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x8}
						alt='Image Description'
					/>
				</div>
				<div class='space-y-2'>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x9}
						alt='Image Description'
					/>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x10}
						alt='Image Description'
					/>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x11}
						alt='Image Description'
					/>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x12}
						alt='Image Description'
					/>
				</div>
				<div class='space-y-2'>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x13}
						alt='Image Description'
					/>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x14}
						alt='Image Description'
					/>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x15}
						alt='Image Description'
					/>
					<Image
						width={200}
						height={300}
						class='w-full h-auto object-cover rounded-lg bg-slate-600'
						src={x16}
						alt='Image Description'
					/>
				</div>
			</div>
		</>
	);
}
