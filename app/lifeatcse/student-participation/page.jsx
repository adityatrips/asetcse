import Image from 'next/image';
import React from 'react';

const data = [
	{
		img: JSON.parse(JSON.stringify(require('/images/student/1.jpg'))),
		text: "Mr. Abhishek Bhattacharya, An Alumnus (B.Tech-CSE Class of 2017, ASET, Noida) Co -founder Whrrl & Bru Finance recently received the National Startup Award, '22 in the presence of Shri Piyush Goyal ji.",
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/2.jpg'))),
		text: 'Katha Chanda of B.Tech. (CSE) batch 2012-16 of ASET, did her Masters from Georgia Tech, has got offer from Microsoft, USA for 1.30 crore',
	},
	{
		text: 'Mayur Agarwal & Piyush Malhotra, Batch 2014-18, Department of Computer Science & Engineering, Amity School of Engineering & Technology, won 2nd consolation prize (5th overall rank) of Rs 10,000 for "App-a-thon", an software application based competition of 48 hours (non – stop) organized by Tata Power –DDL, in association with India Smart Grid Forum and Netaji Subhas Institute of Technology from 20 - 22 Jan, 2017.',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/4.jpg'))),
		text: 'Monica Rungta won first position with cash prize of Rs 30000 in a team of 4 for "COMSTORM"17, THE NEGOTIATION TABLE" on 17/1/2017 organized by SRCC in collaboration with IIT DELHI.',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/5.jpg'))),
		text: 'Ms. Mansha Imtiyaz, student of B.Tech.(CSE) batch 2011-15, has won IET India Scholarship 2014 of Rs. 75,000/- in the IET National Round held in Bangalore.',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/6.jpg'))),
		text: "Grand Finale of \"Accenture Innovation Jockeys Season 3, powered by Yahoo India - Hunt for India's most innovative minds across campuses\" Contest , held at Taj Vivanta, Bangalore on Friday 22nd Aug, our student Niel Mathew has won the award in the 'Digital Government' Innovation category.",
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/7.jpg'))),
		text: 'Mr. Neil Mathew of B.Tech Computer Science & Engineering + MBA, 2010-2015 batch has participated in the #OpenDataApps Challenge and received cash award of Rs. 50,000/- in #OpenDataApps Challenge organized by NIC in association with NASSCOM, under the National Data Sharing and Accessibility Policy (NDSAP), Government of India on 18th February, 2014.',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/8.jpg'))),
		text: 'Mr. Anshul Sharma, who is the co-founder of a startup company Fluper Corp, presented Project RUVAN at IIT Kanpur’s Technical and Entrepreneurial Fest, Techkriti. The main presenters Mr. AnshulSharma(3rd Year B.Tech CSE, ASET) and Mr. Dhruv Pathak(3rd Year B.Tech CSE, ASET) received 2 sparkling trophies from IIT KANPUR.',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/9.jpg'))),
		text: 'Mr. Piyush Arora(Right) presenting the CMS and Web Portal made for Based NGO to Dr. Ashok K Chauhan(Left) with Prof. (Dr.)Abhay Bansal(Center)',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/10.jpg'))),
		text: 'Mr. Archit Sharma at CERN, SWITZERLAND Open Lab',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/11.jpg'))),
		text: 'Mr. Anshul Sharma, who is the co-founder of a startup company Fluper Corp, presented Project RUVAN at IIT Kanpur’s Technical and Entrepreneurial Fest, Techkriti.',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/12.jpg'))),
		text: 'An innovative device “Metro card Replacement system” by Mr. Priyakant Bhardwaj of B.Tech Computer Science and Engineering. The web application will provide all the necessary data about travel and transactions and when linked with IoT model, it will work as digital metro card, making everything hassle free.',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/13.jpg'))),
		text: 'A project titled “Elderly Care System with smart homes” by Mr. UtkarshJain of B.Tech Computer Science and Engineering. This project will lead to better quality of living for the elderly people which would indeed result in increase in happiness within the family.',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/14.jpg'))),
		text: 'A project on "Smart Agriculture and Agronomy using IOT" by Mr. Ishan Saini of B.Tech Computer Science and Engineering. This system is designed for helping farmers in upgrading their technological concepts of IoT to generate better produce.',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/15.jpg'))),
		text: 'An innovative device "Self-Driving Vehicle using Artificial Intelligence" by Mr. Sahil Gupta of B.Tech Computer Science and Engineering. The project applies concepts of Artificial Intelligence to implement a Self-Driving Vehicle.',
	},
	{
		text: 'Mayur Agarwal & Piyush Malhotra, Batch 2014-18, Department of Computer Science & Engineering, Amity School of Engineering & Technology, won 2nd consolation prize (5th overall rank) of Rs 10,000 for "App-a-thon", an software application based competition of 48 hours (non – stop) organized by Tata Power –DDL, in association with India Smart Grid Forum and Netaji Subhas Institute of Technology from 20 - 22 Jan, 2017.',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/17.jpg'))),
		text: 'Kaushelendra Pratap Singh, Utkarsh Gupa, Sahil Jha, Manas Kashyup, Ayush Bhardwaj, Swarnim Arun, Samyak Jain have won "Google Summer of Code 2020" award by Google.',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/18.jpg'))),
		text: 'Aditya Oberai was awarded as "Azure Heroes "Community Hero" Digital Badger" by Microsoft in 2020',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/19.jpg'))),
		text: 'Aditya Oberai was awarded as "Microsoft Visual Studio Code Hackathon: Best Overall Winner" Digital Badger" by Microsoft and Major League Hacking (MLH) in 2020',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/20.jpg'))),
		text: 'Swati Singh of B.Tech(CSE) batch of 2016-20, got selected to attend F8 Hackathon and Conference happening in San Jose California, USA, from 28th April 2019 to 1st May 2019.',
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/21.jpg'))),
		text: "Mr. Vipul Gupta of B.Tech(CSE) batch of 2016-20, A Linux and FOSS enthusiast, working in Python have been selected into Massachusetts Institute of Technology's biggest undergraduate hackathon, HackMIT 2018, with financial assistance from Amity.",
	},
	{
		img: JSON.parse(JSON.stringify(require('/images/student/22.jpg'))),
		text: 'Anirvin Sharma, B.Tech(CSE) 2015-19 Secured First Position in "Wordsworth" at Ambedkar University, Delhi.',
	},
	{
		text: 'Archit Kapoor B.Tech(CSE), Secured third position in environment quiz organized by LSR college.',
	},
	{
		text: 'Utkarsh Gupta & Hardik Sharma, B.Tech(CSE), Participated in the DTU Techfest, 2018 and secured 1st position.',
	},
	{
		text: "Utkarsh Gupta & Divyansh Roy B.Tech(CSE), participated in the Jamia Hamdard's Techfest, 2018 and secured 2nd position.",
	},
	{
		text: 'Katha Chanda - B.Tech CSE, batch 2012-16, Software Developer, Machine Learning Group. Microsoft Corp. Washington. She did her M.S(Comp Sci.) from the prestigious Georgia Institute of Technology, Atlanta, USA. She has been offered a full time position from Microsoft, USA with a salary and benefits package of 1.30 crore (INR).',
	},
	{
		text: 'Mr. Rahat Khanna, B.Tech(CSE), batch 2008-12, is working with Apple India Pvt. Ltd. as Senior Software Engineer with Salary of 64 lacs p.a.',
	},
	{
		text: 'Mr. Aniket Maithani, B.Tech(CSE), batch 2011-15, is working with Corseco Technologies Pvt. Ltd. having Salary of 32 lacs p.a.',
	},
	{
		text: 'Mr. Raghav Gogia, B.Tech(CSE), batch 2012-16 , is working with Microsoft Global Delivery at Microsoft, India with a package of 11 lacs p.a.',
	},
	{
		text: 'Mr. Shivang Kumar, B.Tech(CSE), batch 2012-16 , is working with ANZ Banking Corporation with a package of 31.4 lacs p.a.',
	},
	{
		text: 'Mr. Avinash Srivaastava, Student of B. Tech(CSE), batch 2010-14 has got 36 lacs p.a. (Highest Salary of 2010-14 batch) and working with British Gas Group, UK.',
	},
];

const StudentParticipation = () => {
	return (
		<div className='px-5 py-10'>
			<h1 className='title pb-10'>Student Participation</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
				{data.map((item, index) => {
					return (
						<div
							key={index}
							className='flex flex-col items-center p-5 border border-black rounded-lg shadow-2xl hover:scale-[102%] transition-all justify-center bg-white'
						>
							{item.img && (
								<Image
									src={item.img}
									alt='student'
									className='object-cover'
								/>
							)}
							<p className='text-center mt-4'>{item.text}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default StudentParticipation;
