import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-secondary p-10'>
			<div className='grid grid-cols-1 lg:grid-cols-4'>
				<div>
					<h1 className='text-primary font-extrabold uppercase text-2xl mt-4 lg:mt-0'>
						Quick Links
					</h1>
					<ul>
						<Link
							href='#'
							target='_blank'
						>
							<li className='font-semibold text-white underline underline-offset-4 pb-2 hover:text-primary transition-all duration-100'>
								Programmes
							</li>
						</Link>
						<Link
							href='#'
							target='_blank'
						>
							<li className='font-semibold text-white underline underline-offset-4 pb-2 hover:text-primary transition-all duration-100'>
								Life@CSE
							</li>
						</Link>
						<Link
							href='#'
							target='_blank'
						>
							<li className='font-semibold text-white underline underline-offset-4 pb-2 hover:text-primary transition-all duration-100'>
								International Collaborations
							</li>
						</Link>
					</ul>
				</div>
				<div className='flex flex-col'>
					<h1 className='text-primary font-extrabold uppercase text-2xl mt-4 lg:mt-0'>
						Admissions
					</h1>
					<a
						className='font-semibold text-white underline underline-offset-4 pb-2 hover:text-primary transition-all duration-100'
						href='http://www.amity.edu/admission-procedure-domestic.aspx'
						target='_blank'
					>
						Application Procedure
					</a>
					<a
						className='font-semibold text-white underline underline-offset-4 pb-2 hover:text-primary transition-all duration-100'
						href='http://www.amity.edu/apply-now.aspx'
						target='_blank'
					>
						Apply Online
					</a>
					<a
						className='font-semibold text-white underline underline-offset-4 pb-2 hover:text-primary transition-all duration-100'
						href='http://www.amity.edu/admission-procedure-domestic.aspx'
						target='_blank'
					>
						Amity Scholarship Scheme
					</a>
					<a
						className='font-semibold text-white underline underline-offset-4 pb-2 hover:text-primary transition-all duration-100'
						href='http://www.amity.edu/admission-procedure-domestic.aspx'
						target='_blank'
					>
						Career Test
					</a>
					<a
						className='font-semibold text-white underline underline-offset-4 pb-2 hover:text-primary transition-all duration-100'
						href='http://www.amity.edu/admission-procedure-domestic.aspx'
						target='_blank'
					>
						Education Loans
					</a>
				</div>
				<div>
					<h1 className='text-primary font-extrabold uppercase text-2xl mt-4 lg:mt-0'>
						Download our apps
					</h1>
					<a
						className='font-semibold text-white underline underline-offset-4 pb-2 hover:text-primary transition-all duration-100'
						href='https://play.google.com/store/apps/details?id=com.amityonline.sis&hl=en_US'
						target='_blank'
					>
						Google Play
					</a>
				</div>
				<div>
					<h1 className='text-primary font-extrabold uppercase text-2xl mt-4 lg:mt-0'>
						Contact Us
					</h1>
					<p className='text-white'>
						E - Block, Amity School of Engineering and Technology, Amity Campus
						Sector - 125 Noida- 201303
					</p>
					<p className='text-white'>
						Email:&nbsp;
						<a
							href='mailto:mkpandey1@amity.edu'
							className='font-semibold underline underline-offset-4 pb-2 text-primary transition-all duration-100'
							target='_blank'
						>
							mkpandey1@amity.edu
						</a>
					</p>
					<p className='text-white flex flex-col'>
						Hepline Numbers:
						<a
							className='font-semibold underline underline-offset-4 pb-2 text-primary transition-all duration-100'
							href='tel:+911204392519'
							target='_blank'
						>
							&nbsp;+91 120-439-2519
						</a>
						<a
							className='font-semibold underline underline-offset-4 pb-2 text-primary transition-all duration-100'
							href='tel:+911204392519'
							target='_blank'
						>
							&nbsp;+91 120-439-2487
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
