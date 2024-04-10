'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	const changeTheme = () => {
		const html = document.documentElement;
		if (html.getAttribute('data-theme') === 'dark') {
			html.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		} else {
			html.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		}
	};

	return (
		<div className='navbar z-50 bg-secondary'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='z-50 menu menu-sm dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-72'
					>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<details>
								<summary>About</summary>
								<ul>
									<li>
										<Link href='/about/programmes'>Programmes Offered</Link>
									</li>
									<li>
										<Link href='/about/social-media'>Social Media</Link>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>Life@CSE</summary>
								<ul>
									<li>
										<Link href='/lifeatcse/student-participation'>
											Student Participation & Achievements
										</Link>
									</li>
									<li>
										<Link href='/lifeatcse/club-activities'>
											Club/Committee Activities
										</Link>
									</li>
									{/* <li>
										<Link href='/lifeatcse/'>Student Chapters</Link>
									</li> */}
									<li>
										<Link href='/lifeatcse/parent-feedback'>
											Parent Feedback
										</Link>
									</li>
									<li>
										<Link href='/lifeatcse/industry-feedback'>
											Industry Feedback
										</Link>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>Events@CSE</summary>
								<ul>
									<li>
										<Link href='/eventsatcse/conferences'>Conferences</Link>
									</li>
									{/* <li>
										<Link href='/eventsatcse/'>Guest Lectures</Link>
									</li> */}
									<li>
										<Link href='/eventsatcse/workshops'>Workshops</Link>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>Faculty@CSE</summary>
								<ul>
									<li>
										<Link href='/facultyatcse/honory-professors'>
											Honory Professors
										</Link>
									</li>
									<li>
										<Link href='/facultyatcse/faculty'>Faculty</Link>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>Innovations</summary>
								<ul>
									<li>
										<Link href='/innovations/patents-publications'>
											Publications/Patents/Projects
										</Link>
									</li>
									<li>
										<Link href='/innovations/entrepreneurs'>Entrepreneurs</Link>
									</li>
									{/* <li>
										<Link href=''>Student Innovation</Link>
									</li> */}
									<li>
										<Link href='/innovations/student-awards'>
											Student Awards
										</Link>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>Alumni</summary>
								<ul>
									{/* <li>
										<Link href=''>Alumni Awards</Link>
									</li> */}
									<li>
										<Link href='/alumni/message'>Alumni Messages</Link>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>International Relations</summary>
								<ul>
									<li>
										<Link href=''>International Student Exchange</Link>
									</li>
									<li>
										<Link href=''>Students at Foreign Universities</Link>
									</li>
									<li>
										<Link href=''>International Visits</Link>
									</li>
									<li>
										<Link href=''>International Speakers</Link>
									</li>
									<li>
										<Link href=''>Student&apos;s Feedback</Link>
									</li>
									<li>
										<Link href=''>Gallery</Link>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</div>
			<div className='navbar-center'>
				<Link
					href='/'
					className='font-bold text-text'
				>
					ASET
				</Link>
			</div>
			<div className='navbar-end'>
				<button
					onClick={changeTheme}
					className='btn  btn-primary text-text'
				>
					Change Theme
				</button>
			</div>
		</div>
	);
};

export default Navbar;
