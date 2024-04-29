'use client';

import React from 'react';
import { Dropdown, Navbar } from 'flowbite-react';

const Nav = () => {
	return (
		<Navbar className='bg-secondary px-10 py-5 m-0 flex items-center justify-center w-full'>
			<div className='flex gap-5 md:hidden'>
				<Navbar.Toggle
					theme={{
						base: 'text-primary',
					}}
				/>
				<Navbar.Brand href='/'>ASET_CSE</Navbar.Brand>
			</div>
			<Navbar.Collapse>
				<Navbar.Link
					className='border-0'
					href='/'
				>
					Home
				</Navbar.Link>
				<Dropdown
					inline
					className='bg-secondary justify-center   hover:bg-secondary hover:text-primary'
					floatingArrow
					label='About'
					dismissOnClick
				>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/about/programmes'
					>
						Programmes Offered
					</Dropdown.Item>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/about/social-media'
					>
						Contact
					</Dropdown.Item>
				</Dropdown>
				<Dropdown
					inline
					className='bg-secondary justify-center  hover:bg-secondary hover:text-primary'
					floatingArrow
					label='Life@CSE'
					dismissOnClick
				>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/lifeatcse/club-activities'
					>
						Club Activities
					</Dropdown.Item>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/lifeatcse/industry-feedback'
					>
						Industry Feedback
					</Dropdown.Item>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/lifeatcse/parent-feedback'
					>
						Parent Feedback
					</Dropdown.Item>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/lifeatcse/student-particiaption'
					>
						Student Participation
					</Dropdown.Item>
				</Dropdown>
				<Dropdown
					inline
					className='bg-secondary justify-center  hover:bg-secondary hover:text-primary'
					floatingArrow
					label='Events@CSE'
					dismissOnClick
				>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/eventsatcse/conferences'
					>
						Conferences
					</Dropdown.Item>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/eventsatcse/workshops'
					>
						Workshops
					</Dropdown.Item>
				</Dropdown>
				<Dropdown
					inline
					className='bg-secondary justify-center  hover:bg-secondary hover:text-primary'
					floatingArrow
					label='Faculty@CSE'
					dismissOnClick
				>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/facultyatcse/faculty'
					>
						Faculty
					</Dropdown.Item>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/facultyatcse/honory-professors'
					>
						Honory Professors
					</Dropdown.Item>
				</Dropdown>
				<Dropdown
					inline
					className='bg-secondary justify-center  hover:bg-secondary hover:text-primary'
					floatingArrow
					label='Innovations'
					dismissOnClick
				>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/innovations/entrepreneurs'
					>
						Entrepreneurs
					</Dropdown.Item>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/innovations/patents-publications'
					>
						Publications/Patents/Projects
					</Dropdown.Item>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/innovations/student-awards'
					>
						Student Awards
					</Dropdown.Item>
				</Dropdown>
				<Navbar.Link href='/alumni/message'>Alumni&apos;s Message</Navbar.Link>
				{/* 
					International Relations
						International Student Exchange
						Students at Foreign Universities
						International Visits
						International Speakers
						Gallery
				*/}
				<Dropdown
					inline
					className='bg-secondary justify-center   hover:bg-secondary hover:text-primary'
					floatingArrow
					label='International Relations'
					dismissOnClick
				>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/international/students'
					>
						Students in Foreign Universities
					</Dropdown.Item>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/international/visits'
					>
						International Visits
					</Dropdown.Item>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/international/student-feedback'
					>
						Student Feedback
					</Dropdown.Item>
					<Dropdown.Item
						className='bg-secondary w-full  hover:bg-secondary hover:text-primary '
						href='/international/gallery'
					>
						Gallery
					</Dropdown.Item>
				</Dropdown>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Nav;
