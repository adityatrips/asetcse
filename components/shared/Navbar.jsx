'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='navbar bg-[#FFF]'>
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
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60'
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
									<li>
										<Link href='/lifeatcse/'>Student Chapters</Link>
									</li>
									<li>
										<Link href='/lifeatcse/'>Parent Feedback</Link>
									</li>
									<li>
										<Link href='/lifeatcse/'>Industry Feedback</Link>
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
									<li>
										<Link href='/eventsatcse/'>Guest Lectures</Link>
									</li>
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
										<Link href=''>Entrepreneurs</Link>
									</li>
									<li>
										<Link href=''>Student Innovation</Link>
									</li>
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
									<li>
										<Link href=''>Alumni Awards</Link>
									</li>
									<li>
										<Link href=''>Alumni Messages</Link>
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
				<span className='font-bold'>
					Amity School of Engineering and Technology
				</span>
			</div>
			<div className='navbar-end'></div>
		</div>
	);
};

export default Navbar;
