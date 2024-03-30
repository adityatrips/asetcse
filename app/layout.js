import { Rubik, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '/components/shared/Navbar';
import Footer from '/components/shared/Footer';

const rubik = Rubik({
	subsets: ['latin', 'latin-ext'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const playfairDisplay = Playfair_Display({
	subsets: ['latin', 'latin-ext'],
	weight: ['900'],
});

export const metadata = {
	title: 'Amity School of Engineering and Technology',
	description: 'This is the departmental website of ASET, Amity Noida.',
};

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className={rubik.className}
		>
			<body className={'min-h-[100vh]'}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
