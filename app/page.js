import React from 'react';
import Navbar from './componsents/shared/Navbar';
import Image from 'next/image';

export default function HomePage() {
	return (
		<div className='z-0'>
			<Image
				alt='Amity Campus'
				className='h-[auto] max-h-[75vh] object-cover w-[100%]'
				src={require('@/images/Amity-campus.jpg')}
			/>

			<h1 className='title-bg text-center uppercase text-white font-extrabold text-2xl py-2'>
				Computer Science & Engineering Department
			</h1>

			<div className='py-10 px-5'>
				<h1 className='title'>About Us</h1>
				<p>
					Department of Computer Science & Engineering was formed in 2003 at
					Amity University, Noida. Since its inception, the department has been
					recognized all over the world for excellence in research and teaching.
					It also provides a supportive, friendly and challenging environment
					for teaching, learning and research.
				</p>
				<p>
					Today, the Department has a vibrant student body numbering about more
					than 2500 students and many eminent professors with PhD/PhD pursuing.
					The Department also offers several attractive international exposures
					in terms of student exchange program, Industrial Internship, Minor
					Project and Major Project for UG and PG Programs.
				</p>
				<p>
					Department is nurtured by its clubs/committee and research groups.
					These clubs offer students the chance to gain experience in their
					interest areas and network with their peers. Each research group holds
					regular meetings and hold seminars to discuss current research topics
					and results
				</p>
			</div>

			<div className='px-5 py-10'>
				<h1 className='title'>HOI&apos;S Message</h1>

				<blockquote class='m-10 md:m-20'>
					<div class='z-10'>
						<p class='text-gray-800 font-medium'>
							<em>
								Amity School of Engineering and Technology aim to develop
								globally adaptable professionals with social sensitivity. The
								institute is all set to bring out the potential within each
								student and provide proper guidance so that their potentials can
								be utilized to make them future engineers capable of meeting any
								challenge that will be faced by them after leaving the
								university. The university provides full support to improve
								their communication skills, critical thinking abilities, moral
								values and sense of responsibility. All efforts are made to
								improve the creativity and problem solving abilities of the
								students so that they can contribute their best to the society
								and the country. Today we are all witnessing the impact of
								globalization and liberalization. It is true that the
								technological transformation has impacted all our lives. In this
								era of globalization and liberalization there are lot many
								challenges. As an academic institute it is necessary to address
								these challenges. At institute level we are constantly taking
								efforts to ensure that our students will showcase their academic
								talent with high moral values. Our students being Engineers will
								contribute and for sure will keep Social Commitment.
								Faculty-members guide and monitor students by participating in
								their academic, research, sports &amp; cultural pursuits. We
								want our students to be committed, dedicated to their goals
								along with integrity and concern for the environment and rural
								society they live in. We rely on a pedagogy that promotes
								creativity and innovation and teaching-learning practices of
								high standards. Creativity flourishes in an atmosphere that is
								free, friendly and above all, democratic and participatory in
								nature. Every course is designed, delivered and monitored in a
								manner that will add a significant value to a student. We
								equally emphasize on the development of core human values,
								mental well-being and physical well-being of our students.
							</em>
						</p>
					</div>

					<footer class='mt-12'>
						<div class='flex items-center'>
							<div class='flex-shrink-0'>
								<Image
									class='size-20 rounded-full'
									src={require('@/images/mkpandey.jpeg')}
									alt='Image Description'
								/>
							</div>
							<div class='ms-4'>
								<div class='text-xl font-semibold text-black '>
									Prof. (Dr.) Manoj Kumar Pandey
								</div>
								<div class='text-md text-gray-500'>Head of Institution</div>
							</div>
						</div>
					</footer>
				</blockquote>
			</div>

			<div className='px-5 py-10'>
				<h1 className='title'>Placement Partners</h1>
				<div class='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/accenture.jpg')}
							alt='accenture'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/british-gas.jpg')}
							alt='british-gas'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/capegemini.jpg')}
							alt='capegemini'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/csc.jpg')}
							alt='csc'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/dell.jpg')}
							alt='dell'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/flipkart.jpg')}
							alt='flipkart'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/ibm.jpg')}
							alt='ibm'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/icicic.jpg')}
							alt='icicic'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/igate.jpg')}
							alt='igate'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/indian-navy.jpg')}
							alt='indian-navy'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/indianoil.jpg')}
							alt='indianoil'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/microsoft.jpg')}
							alt='microsoft'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/tata.jpg')}
							alt='tata'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/unilibwe.jpg')}
							alt='unilibwe'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/videocon.jpg')}
							alt='videocon'
						/>
					</div>
					<div class='flex justify-center items-center'>
						<Image
							src={require('@/images/wipro.jpg')}
							alt='wipro'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
