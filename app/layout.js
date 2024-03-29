import { Nunito_Sans, Noto_Sans_Symbols } from 'next/font/google';
import './globals.css';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata = {
	title: 'Amity School of Engineering and Technology',
	description: 'This is the departmental website of ASET, Amity Noida.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={nunitoSans.className + " min-h-[100vh]"}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
