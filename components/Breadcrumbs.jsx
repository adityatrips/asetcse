'use client';

import React, { ReactNode } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumbs = ({
	homeElement,
	separator,
	containerClasses,
	listClasses,
	activeClasses,
	capitalizeLinks,
}) => {
	const paths = usePathname();
	const pathNames = paths.split('/').filter((path) => path);

	return (
		<div>
			<ul className={containerClasses}>
				<li className={listClasses}>
					<Link href={'/'}>{homeElement}</Link>
				</li>
				{pathNames.length > 0 && separator}
				{pathNames.map((link, index) => {
					let href = `/${pathNames.slice(0, index + 1).join('/')}`;
					let itemClasses =
						paths === href ? `${listClasses} ${activeClasses}` : listClasses;
					let itemLink = capitalizeLinks ? link.toUpperCase() : link;
					return (
						<React.Fragment key={index}>
							<li className={itemClasses}>
								<Link href={href}>{itemLink.replace('-', ' ')}</Link>
							</li>
							{pathNames.length !== index + 1 && separator}
						</React.Fragment>
					);
				})}
			</ul>
		</div>
	);
};

export default Breadcrumbs;
