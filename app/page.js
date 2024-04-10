'use client';

import React from 'react';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import mkpandey from '/images/mkpandey.jpeg';
import amityCampus from '/images/Amity-campus.jpg';
import accenture from '/images/accenture.jpg';
import britishGas from '/images/british-gas.jpg';
import capegemini from '/images/capegemini.jpg';
import csc from '/images/csc.jpg';
import dell from '/images/dell.jpg';
import flipkart from '/images/flipkart.jpg';
import ibm from '/images/ibm.jpg';
import icicic from '/images/icicic.jpg';
import igate from '/images/igate.jpg';
import indianNavy from '/images/indian-navy.jpg';
import indianoil from '/images/indianoil.jpg';
import microsoft from '/images/microsoft.jpg';
import tata from '/images/tata.jpg';
import unilibwe from '/images/unilibwe.jpg';
import videocon from '/images/videocon.jpg';
import wipro from '/images/wipro.svg';

const imgs = [
	{
		name: 'accenture',
		img: accenture,
	},
	{ name: 'britishGas', img: britishGas },
	{
		name: 'capegemini',
		img: capegemini,
	},
	{ name: 'csc', img: csc },
	{ name: 'dell', img: dell },
	{ name: 'flipkart', img: flipkart },
	{ name: 'ibm', img: ibm },
	{ name: 'icicic', img: icicic },
	{ name: 'igate', img: igate },
	{ name: 'navy', img: indianNavy },
	{
		name: 'indianoil',
		img: indianoil,
	},
	{
		name: 'microsoft',
		img: microsoft,
	},
	{ name: 'tata', img: tata },
	{ name: 'unilibwe', img: unilibwe },
	{ name: 'videocon', img: videocon },
	{ name: 'wipro', img: wipro },
];

export default function HomePage() {
	const [activeIndex, setActiveIndex] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			const newActiveIndex =
				activeIndex + 1 === imgs.length ? 0 : activeIndex + 1;
			goToOtherImage(`#DaisyUICarousel_img_${newActiveIndex}`);
			setActiveIndex(newActiveIndex);
		}, 2500);

		return () => clearInterval(intervalId);
	}, [activeIndex]);

	const goToOtherImage = (href) => {
		const carousel = document.getElementById('carousel');
		if (carousel) {
			const target = document.querySelector(href);
			const left = target.offsetLeft;
			carousel.scrollTo({ left: left });
		}
	};

	return (
		<>
			<div className='z-0'>
				<Image
					alt='Amity Campus'
					height={845}
					widht={1539}
					className='h-[26rem] object-cover w-full'
					src={amityCampus}
				/>

				<h1 className='title-bg text-center uppercase text-white font-extrabold text-2xl py-2'>
					Computer Science & Engineering Department
				</h1>

				<div className='py-10 px-5'>
					<h1 className='title'>About Us</h1>
					<p>
						Department of Computer Science & Engineering was formed in 2003 at
						Amity University, Noida. Since its inception, the department has
						been recognized all over the world for excellence in research and
						teaching. It also provides a supportive, friendly and challenging
						environment for teaching, learning and research.
					</p>
					<p>
						Today, the Department has a vibrant student body numbering about
						more than 2500 students and many eminent professors with PhD/PhD
						pursuing. The Department also offers several attractive
						international exposures in terms of student exchange program,
						Industrial Internship, Minor Project and Major Project for UG and PG
						Programs.
					</p>
					<p>
						Department is nurtured by its clubs/committee and research groups.
						These clubs offer students the chance to gain experience in their
						interest areas and network with their peers. Each research group
						holds regular meetings and hold seminars to discuss current research
						topics and results
					</p>
				</div>

				<div className='px-5 py-10'>
					<h1 className='title'>HOI&apos;S Message</h1>

					<blockquote className='m-10 md:m-20'>
						<div className='z-10'>
							<em className='text-gray-800'>
								<p>
									Amity School of Engineering and Technology aim to develop
									globally adaptable professionals with social sensitivity. The
									institute is all set to bring out the potential within each
									student and provide proper guidance so that their potentials
									can be utilized to make them future engineers capable of
									meeting any challenge that will be faced by them after leaving
									the university. The university provides full support to
									improve their communication skills, critical thinking
									abilities, moral values and sense of responsibility.
								</p>
								<p>
									All efforts are made to improve the creativity and problem
									solving abilities of the students so that they can contribute
									their best to the society and the country.
								</p>
								<p>
									Today we are all witnessing the impact of globalization and
									liberalization. It is true that the technological
									transformation has impacted all our lives. In this era of
									globalization and liberalization there are lot many
									challenges. As an academic institute it is necessary to
									address these challenges. At institute level we are constantly
									taking efforts to ensure that our students will showcase their
									academic talent with high moral values. Our students being
									Engineers will contribute and for sure will keep Social
									Commitment. Faculty-members guide and monitor students by
									participating in their academic, research, sports & cultural
									pursuits. We want our students to be committed, dedicated to
									their goals along with integrity and concern for the
									environment and rural society they live in.
								</p>
								<p>
									We rely on a pedagogy that promotes creativity and innovation
									and teaching-learning practices of high standards. Creativity
									flourishes in an atmosphere that is free, friendly and above
									all, democratic and participatory in nature. Every course is
									designed, delivered and monitored in a manner that will add a
									significant value to a student. We equally emphasize on the
									development of core human values, mental well-being and
									physical well-being of our students.
								</p>
							</em>
						</div>

						<footer className='mt-12'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<Image
										loading='eager'
										className='size-40 rounded-full'
										src={mkpandey}
										alt='Image Description'
										width={500}
										height={500}
									/>
								</div>
								<div className='ms-4'>
									<div className='text-xl font-semibold '>
										Prof. (Dr.) Manoj Kumar Pandey
									</div>
									<div className='text-md'>Head of Institution</div>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>

				<div className='px-5 py-10'>
					<h1 className='title'>Placement Partners</h1>
					<div
						id='carousel'
						className='carousel carousel-center w-full p-4 space-x-4 bg-secondary rounded-box'
					>
						{imgs.map((img, i) => (
							<div
								key={`DaisyUICarousel_img_${i}`}
								id={`DaisyUICarousel_img_${i}`}
								className='carousel-item w-1/2 max-h-48 bg-base-100 rounded-xl'
							>
								<Image
									quality={100}
									key={i}
									className='object-contain aspect-square w-[50vw] bg-white rounded-lg p-5'
									src={img.img}
									alt={img.name}
									width={300}
									height={300}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
