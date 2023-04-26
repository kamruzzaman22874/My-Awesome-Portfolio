import React from 'react';
import HTML from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import firebase from '../../assets/firebase.png';
import github from '../../assets/github.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import mongo from '../../assets/mongo.png';

const Skills = () => {
	return (
		<div
			name='skills'
			className='w-full sm:h-screen bg-[#0a192f] text-gray-300 md:px-32'>
			<div className='w-max-[1000px] mx-auto p-4 flex flex-col justify-center w-full '>
				<div className='py-20 text-center'>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
						Skills
					</p>
					<p className='py-4'>// There are technology I've worked with</p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
						<p className='my-4'>HTML</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={css} alt='css icon' />
						<p className='my-4'>CSS</p>
					</div>
					{/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={tailwind} alt='tailwind icon' />
						<p className='my-4'>Tailwind</p>
					</div> */}
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={javascript}
							alt='javascript icon'
						/>
						<p className='my-4'>Javascript</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={firebase} alt='firebase icon' />
						<p className='my-4'>Firebase</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={github} alt='github icon' />
						<p className='my-4'>Github</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={react} alt='react icon' />
						<p className='my-4'>React</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={node} alt='node icon' />
						<p className='my-4'>Node</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={mongo} alt='mongo icon' />
						<p className='my-4'>Mango DB</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
