import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import profile from '../../assets/profile-portfolio-removebg.png';
import { Link } from 'react-scroll';
import Typed from 'react-typed';
import './Home.css';

const Home = () => {
	return (
		<div
			name='home'
			className='w-full sm:h-screen bg-[#0a192f] sm:py-36 md:py-10 py-36'>
			<div className='md:flex  justify-center items-center mt-28'>
				<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
					<p className='text-pink-600 text-xl'>Hi, My name is</p>
					{/* <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>
						<Typed strings={['MD.Jamal Hossen']} typeSpeed={50} loop />
					</h1> */}
					<h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>
						MD.Jamal Hossen
					</h1>

					<h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>
						<Typed
							strings={["I'm Full Stack Developer"]}
							typeSpeed={80}
							loop></Typed>
					</h2>
					<p className='text-[#8892b0] py-4 max-w-[700px]'>
						I'm a full-stack developer specializing in building (and
						occasionally designing) <br /> exceptional digital experiences.
						Currently, <br /> I'm focused on building responsive full-stack web
						applications.
					</p>
					<div className=''>
						<Link to='work' smooth={true} duration={500}>
							<button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
								View Work
								<span className='group-hover:rotate-90 duration-300'>
									<HiArrowNarrowRight className='ml-3'></HiArrowNarrowRight>
								</span>
							</button>
						</Link>
					</div>
				</div>
				<div className='bg-img w-50'>
					<img
						className='md:w-3/4  px-4 my-4 rounded-lg object-cover portfolio-profile bg-[#0a2145]'
						src={profile}
						alt=''
					/>
				</div>
			</div>
			<About></About>
			<Skills></Skills>
			<Work></Work>
			<Contact></Contact>
		</div>
	);
};

export default Home;
