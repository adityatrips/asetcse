import { Nunito_Sans, Noto_Sans_Symbols } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata = {
	title: 'Amity School of Engineering and Technology',
	description: 'This is the departmental website of ASET, Amity Noida.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={nunitoSans.className}>
				<Navbar />
				<Breadcrumbs
					homeElement='HOME'
					separator={<span className='text-xl select-none'> / </span>}
					activeClasses={'text-amber font-bold text-xl'}
					containerClasses={'flex py-5'}
					listClasses='hover:underline mx-2 font-bold text-xl'
					capitalizeLinks
				/>
				{children}
			</body>
		</html>
	);
}
