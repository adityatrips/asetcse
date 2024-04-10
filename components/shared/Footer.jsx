'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='footer p-10 bg-secondary text-white'>
			<nav>
				<h6 className='footer-title'>Quick Links</h6>
				<Link
					href='/'
					className='link link-hover'
				>
					Home
				</Link>
				<Link
					href='/about/programmes'
					className='link link-hover'
				>
					Programmes
				</Link>
				<Link
					href='/innovations/patents-publications'
					className='link link-hover'
				>
					Publications
				</Link>
			</nav>
			<nav>
				<h6 className='footer-title'>Admissions</h6>
				<a
					href='http://www.amity.edu/admission-procedure-domestic.aspx'
					target='_blank'
					className='link link-hover'
				>
					Application Procedure
				</a>
				<a
					href='http://www.amity.edu/apply-now.aspx'
					target='_blank'
					className='link link-hover'
				>
					Apply Online
				</a>
				<a
					href='http://www.amity.edu/admissions-scholarship.aspx'
					target='_blank'
					className='link link-hover'
				>
					Amity Scholarship Scheme
				</a>
				<a
					href='http://www.amity.edu/admission-career-test.aspx'
					target='_blank'
					className='link link-hover'
				>
					Career Test
				</a>
				<a
					href='http://www.amity.edu/education-loan.aspx'
					target='_blank'
					className='link link-hover'
				>
					Education Loan
				</a>
			</nav>
			<nav>
				<h6 className='footer-title'>Contact Us</h6>
				<p>
					E - Block, Amity School of Engineering and Technology, Amity Campus
					Sector - 125 Noida- 201303
				</p>
				<a
					href='mailto:mkpandey1@amity.edu'
					className='link link-hover'
				>
					mkpandey1@amity.edu
				</a>
				<a
					href='tel:+911204392519'
					className='link link-hover'
				>
					+91 120-439-2519
				</a>
				<a
					href='tel:+911204392487'
					className='link link-hover'
				>
					+91 120-439-2487
				</a>
			</nav>
		</footer>
	);
};

export default Footer;
