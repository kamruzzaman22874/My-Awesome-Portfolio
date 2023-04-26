import React from 'react';

const Contact = () => {
	return (
		<div
			name='contact'
			className='w-full bg-[#0a192f] flex justify-center items-center p-4'>
			<form
				method='POST'
				action='https://getform.io/f/ba30f03b-0577-47ee-9cb0-2bf081b7a534'
				className='flex flex-col max-w-[600px] w-full'>
				<div className='pb-8 py-20'>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 text-center'>
						Talk To Me
					</p>
					<p className='py-4 text-gray-300'>
						Submit the form bellow or shoot me an email
						-hossen2022jamal@gmail.com
					</p>
				</div>

				<input
					className='bg-[#ccd6f6] p-2'
					type='text'
					placeholder='Name'
					name='name'
				/>
				<input
					className='my-4 p-2 bg-[#ccd6f6]'
					type='email'
					placeholder='Email'
					name='email'
				/>
				<textarea
					className='bg-[#ccd6f6] p-2'
					name='message'
					rows='10'
					placeholder='Message'></textarea>
				<button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
