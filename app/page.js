import React from 'react';
import Image from 'next/image';
import Navbar from '../components/shared/Navbar';

export default function HomePage() {
	return (
		<>
			<div className='z-0'>
				<Image
					alt='Amity Campus'
					height='auto'
					widht='auto'
					className='h-[auto] max-h-[75vh] object-cover w-[100%]'
					src={JSON.parse(
						JSON.stringify(require('../images/Amity-campus.jpg'))
					)}
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
					<h1 className='title'>HOD&apos;S Message</h1>

					<blockquote className='m-10 md:m-20'>
						<div className='z-10'>
							<p className='text-gray-800 font-medium'>
								<em>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aperiam, vero magni nihil officiis labore eius alias
									dignissimos quasi consequatur corporis quod commodi hic
									aspernatur voluptate? Aperiam, alias odio unde dignissimos
									maxime debitis quod. Possimus quod dolore dolor! Culpa optio
									libero porro esse dolorum, dolor saepe! Inventore cum,
									obcaecati odio temporibus voluptatem laboriosam iste libero
									repudiandae ab at, quis doloremque similique quidem illo
									voluptatibus quia error incidunt assumenda modi commodi
									asperiores. At suscipit quisquam quod doloremque ratione totam
									explicabo dolor quam ea perferendis! Eligendi vero minus magni
									quidem facilis veritatis ea deserunt dolor numquam minima
									voluptate blanditiis iure est, quo ducimus aspernatur corporis
									porro, aliquam sunt unde distinctio harum neque. Nihil,
									explicabo molestias! Porro autem provident architecto, qui
									sapiente dolorem reiciendis laudantium quisquam alias. Nulla
									dolores harum dicta autem, mollitia odit sint tempora
									accusamus. Ut quas, ipsa et nobis quisquam voluptatibus
									voluptatum, cum, in dicta libero sint? Nihil iusto, earum
									rerum adipisci quisquam ex ipsam necessitatibus nobis
									excepturi voluptatem sapiente vel assumenda voluptate magni
									eum? Ipsum provident ad vero molestias sed nemo fugit
									consequuntur doloribus sint consectetur. Doloremque, nostrum
									consectetur odit ipsam architecto iusto maiores ea et
									explicabo? Dolorem unde ex, corporis modi accusantium beatae
									quo iste soluta laborum. Dolores dolorum nemo voluptatibus
									animi odio, exercitationem eligendi reiciendis repellendus,
									inventore quis recusandae provident quaerat saepe hic quos
									voluptas at eveniet minus nulla? Facere excepturi, ipsa quis
									explicabo dicta deleniti dolorum quod accusamus quisquam quas,
									nobis perspiciatis ullam omnis repellendus odio aliquid ea
									voluptates repudiandae eius nisi, recusandae accusantium?
									Iste, saepe vel!
								</em>
							</p>
						</div>

						<footer className='mt-12'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<Image
										className='size-20 rounded-full'
										src={JSON.parse(
											JSON.stringify(require('../images/mkpandey.jpeg'))
										)}
										alt='Image Description'
									/>
								</div>
								<div className='ms-4'>
									<div className='text-xl font-semibold text-black '>
										Prof. (Dr.) Manoj Kumar Pandey
									</div>
									<div className='text-md text-gray-500'>
										Head of Institution
									</div>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>

				<div className='px-5 py-10'>
					<h1 className='title'>Placement Partners</h1>
					<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(
									JSON.stringify(require('../images/accenture.jpg'))
								)}
								alt='accenture'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(
									JSON.stringify(require('../images/british-gas.jpg'))
								)}
								alt='british-gas'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(
									JSON.stringify(require('../images/capegemini.jpg'))
								)}
								alt='capegemini'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(JSON.stringify(require('../images/csc.jpg')))}
								alt='csc'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(JSON.stringify(require('../images/dell.jpg')))}
								alt='dell'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(
									JSON.stringify(require('../images/flipkart.jpg'))
								)}
								alt='flipkart'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(JSON.stringify(require('../images/ibm.jpg')))}
								alt='ibm'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(
									JSON.stringify(require('../images/icicic.jpg'))
								)}
								alt='icicic'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(JSON.stringify(require('../images/igate.jpg')))}
								alt='igate'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(
									JSON.stringify(require('../images/indian-navy.jpg'))
								)}
								alt='indian-navy'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(
									JSON.stringify(require('../images/indianoil.jpg'))
								)}
								alt='indianoil'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(
									JSON.stringify(require('../images/microsoft.jpg'))
								)}
								alt='microsoft'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(JSON.stringify(require('../images/tata.jpg')))}
								alt='tata'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(
									JSON.stringify(require('../images/unilibwe.jpg'))
								)}
								alt='unilibwe'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(
									JSON.stringify(require('../images/videocon.jpg'))
								)}
								alt='videocon'
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={JSON.parse(
									JSON.stringify(
										JSON.parse(JSON.stringify(require('../images/wipro.jpg')))
									)
								)}
								alt='wipro'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
