import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/workImg.jpeg';
import img1 from '../..//assets/realestate.jpg';

const Work = () => {
	return (
		<div
			name='work'
			className='bg-[#0a192f] w-full md:h-screen text-gray-300 md:pt-56 md:px-32'>
			<div className='max-w-[1000px]  p-4 flex flex-col justify-center w-full h-full'>
				<div className='text-center'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
						Work
					</p>
					<p className='py-4'>// Check out some of my recent work</p>
				</div>

				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16'>
					<div
						style={{ backgroundImage: `url(${img})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						<div className='opacity-0 group-hover:opacity-80'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								React JS Application
							</span>
							<div className='pt-8 text-center'>
								<Link to='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
										Demo
									</button>
								</Link>
								<Link to='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
										Code
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${img1})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						<div className='opacity-0 group-hover:opacity-80'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								React JS Application
							</span>
							<div className='pt-8 text-center'>
								<Link to='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
										Demo
									</button>
								</Link>
								<Link to='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
										Code
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${img})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						<div className='opacity-0 group-hover:opacity-80'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								React JS Application
							</span>
							<div className='pt-8 text-center'>
								<Link to='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
										Demo
									</button>
								</Link>
								<Link to='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
										Code
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${img1})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						<div className='opacity-0 group-hover:opacity-80'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								React JS Application
							</span>
							<div className='pt-8 text-center'>
								<Link to='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
										Demo
									</button>
								</Link>
								<Link to='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
										Code
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${img})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						<div className='opacity-0 group-hover:opacity-80'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								React JS Application
							</span>
							<div className='pt-8 text-center'>
								<Link to='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
										Demo
									</button>
								</Link>
								<Link to='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
										Code
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${img1})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						<div className='opacity-0 group-hover:opacity-80'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								React JS Application
							</span>
							<div className='pt-8 text-center'>
								<Link to='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
										Demo
									</button>
								</Link>
								<Link to='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
										Code
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
