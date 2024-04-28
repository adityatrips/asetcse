import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '/components/shared/Navbar';
import Footer from '/components/shared/Footer';
import { Flowbite } from 'flowbite-react';

const rubik = Rubik({
	subsets: ['latin', 'latin-ext'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
	title: {
		default: 'ASET | Home',
		template: 'ASET | %s',
	},
	description:
		'Welcome to the official website of the Computer Science and Engineering department of Amity School of Engineering and Technology, Noida. Explore our website to know more about us.',
};

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			data-theme='light'
			className={rubik.className}
		>
			<body className={'min-h-[100vh]'}>
				<Flowbite
					theme={{
						radio: {
							primary: {
								checked: 'bg-primary',
								unchecked: 'bg-primary',
							},
						},
					}}
				>
					<Navbar />
					{children}
					<Footer />
				</Flowbite>
			</body>
		</html>
	);
}
