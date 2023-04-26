import React from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Navbar from '../Login/Navbar';
import { useState } from 'react';

const Header = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div>
			<div className='navbar fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f]  text-gray-300 md:px-36 px-8 py-4'>
				<div className='flex-1'>
					{/* <img src={logo} alt='' style={{ width: '50px' }} /> */}
					<h2>
						<span className='text-3xl'>My</span>
						<span className='text-xl text-pink-600 font-bold'>Awesome</span>
						<br />
						<span className='text-3xl font-bold'>Portfolio</span>
					</h2>
				</div>
				<div className='flex-none'>
					<ul className='hidden md:flex menu menu-horizontal px-1'>
						<li>
							<Link to='home' smooth={true} duration={500}>
								Home
							</Link>
						</li>
						<li tabIndex={0}>
							<Link to='about' smooth={true} duration={500}>
								About
							</Link>
						</li>
						<li>
							<Link to='skills' smooth={true} duration={500}>
								Skills
							</Link>
						</li>
						<li>
							<Link to='work' smooth={true} duration={500}>
								Works
							</Link>
						</li>
						<li>
							<Link to='contact' smooth={true} duration={500}>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				<div onClick={handleClick} className='md:hidden z-10'>
					{!nav ? <FaBars /> : <FaTimes />}
				</div>
				<ul
					className={
						!nav
							? 'hidden'
							: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
					}>
					<li className='py-6 text-4xl'>
						<Link to='home' smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li className='py-6 text-4xl'>
						<Link to='about' smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li className='py-6 text-4xl'>
						<Link to='skills' smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li className='py-6 text-4xl'>
						<Link to='work' smooth={true} duration={500}>
							Works
						</Link>
					</li>
					<li className='py-6 text-4xl'>
						<Link to='contact' smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			</div>

			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul className='text-gray-300'>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 p-4 my-2'>
						<Link
							to='https://www.linkedin.com/in/md-jamal-hossen-583989220/?originalSubdomain=bd'
							className='flex justify-between items-center w-full text-gray-300'>
							Linkedin <FaLinkedin size={30}></FaLinkedin>
						</Link>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] p-4 my-2'>
						<Link
							to='https://github.com/kamruzzaman22874'
							className='flex justify-between items-center w-full text-gray-300'>
							Github <FaGithub size={30}></FaGithub>
						</Link>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] p-4 my-2'>
						<Link className='flex justify-between items-center w-full text-gray-300'>
							Email <HiOutlineMail size={30}></HiOutlineMail>
						</Link>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] p-4 my-2'>
						<Link className='flex justify-between items-center w-full text-gray-300'>
							Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
						</Link>
					</li>
				</ul>
			</div>
			<Navbar></Navbar>
		</div>
	);
};

export default Header;
