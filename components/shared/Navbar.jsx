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
					className='bg-secondary justify-center w-full'
					floatingArrow
					label='About'
					dismissOnClick
				>
					<Dropdown.Item href='/about/programmes'>
						Programmes Offered
					</Dropdown.Item>
					<Dropdown.Item href='/about/social-media'>Contact</Dropdown.Item>
				</Dropdown>
				<Dropdown
					inline
					className='bg-secondary w-[calc(100%-5rem)]'
					floatingArrow
					label='Life@CSE'
					dismissOnClick
				>
					<Dropdown.Item href='/lifeatcse/club-activities'>
						Club Activities
					</Dropdown.Item>
					<Dropdown.Item href='/lifeatcse/industry-feedback'>
						Industry Feedback
					</Dropdown.Item>
					<Dropdown.Item href='/lifeatcse/parent-feedback'>
						Parent Feedback
					</Dropdown.Item>
					<Dropdown.Item href='/lifeatcse/student-particiaption'>
						Student Participation
					</Dropdown.Item>
				</Dropdown>
				<Dropdown
					inline
					className='bg-secondary w-[calc(100%-5rem)]'
					floatingArrow
					label='Events@CSE'
					dismissOnClick
				>
					<Dropdown.Item href='/eventsatcse/conferences'>
						Conferences
					</Dropdown.Item>
					<Dropdown.Item href='/eventsatcse/workshops'>Workshops</Dropdown.Item>
				</Dropdown>
				<Dropdown
					inline
					className='bg-secondary w-[calc(100%-5rem)]'
					floatingArrow
					label='Faculty@CSE'
					dismissOnClick
				>
					<Dropdown.Item href='/facultyatcse/faculty'>Faculty</Dropdown.Item>
					<Dropdown.Item href='/facultyatcse/honory-professors'>
						Honory Professors
					</Dropdown.Item>
				</Dropdown>
				<Dropdown
					inline
					className='bg-secondary w-[calc(100%-5rem)]'
					floatingArrow
					label='Innovations'
					dismissOnClick
				>
					<Dropdown.Item href='/innovations/entrepreneurs'>
						Entrepreneurs
					</Dropdown.Item>
					<Dropdown.Item href='/innovations/patents-publications'>
						Publications/Patents/Projects
					</Dropdown.Item>
					<Dropdown.Item href='/innovations/student-awards'>
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
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Nav;
