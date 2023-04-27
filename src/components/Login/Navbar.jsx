import React from 'react';
import { FaHome, FaUserTag, FaKeycdn, FaUserAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { HiBuildingStorefront } from 'react-icons/hi2';

const Navbar = () => {
	return (
		<div className='hidden lg:flex fixed flex-col top-[40%] right-0'>
			<ul className='text-gray-300 mr-[-100px]'>
				<li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[100px]  duration-300 bg-blue-600 p-4 my-2'>
					<Link
						to='home'
						smooth={true}
						duration={500}
						className='flex justify-between items-center w-full text-gray-300'>
						<FaHome size={30}></FaHome> Home
					</Link>
				</li>
				<li className='w-[160px] h-[60px] flex justify-between items-center  duration-300 bg-[#333333] p-4 my-2'>
					<Link
						to='about'
						smooth={true}
						duration={500}
						className='flex justify-between items-center w-full text-gray-300'>
						<FaUserTag size={30}></FaUserTag>About
					</Link>
				</li>
				<li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px]   duration-300 bg-[#6fc2b0] p-4 my-2'>
					<Link
						to='skills'
						smooth={true}
						duration={500}
						className='flex justify-between items-center w-full text-gray-300'>
						<FaKeycdn size={30}></FaKeycdn>Skills
					</Link>
				</li>
				<li className='w-[160px] h-[60px] flex justify-between items-center   duration-300 bg-[#565f69] p-4 my-2'>
					<Link
						to='work'
						smooth={true}
						duration={500}
						className='flex justify-between items-center w-full text-gray-300'>
						<HiBuildingStorefront size={30}></HiBuildingStorefront> Works
					</Link>
				</li>
				<li className='w-[160px] h-[60px] flex justify-between items-center  duration-300 bg-[#565f69] p-4 my-2'>
					<Link
						to='contact'
						smooth={true}
						duration={500}
						className='flex justify-between items-center w-full text-gray-300'>
						<FaUserAlt size={30}></FaUserAlt> Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
