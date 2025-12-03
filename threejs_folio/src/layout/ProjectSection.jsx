import { Suspense, useState } from 'react';
import { Center, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { myProjects } from '../constants/index';
import Button from '../components/Button';
import CanvasLoader from '../components/CanvasLoader';
import DemoScreen from '../components/DemoScreen';

const ProjectSection = () => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const currentProject = myProjects[selectedProjectIndex];
	const projectCount = myProjects.length;
	const handleNavigation = (direction) => {
		setSelectedProjectIndex((prevIndex) => {
			if (direction === 'previous') {
				return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
			} else {
				return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
			}
		});
	};

	return (
		<section className='c-space my-20' id='work'>
			<p className='head-text'>My Work</p>
			<div className='grid-2-cols mt-12 w-full'>
				<div className='flex flex-col gap-5 relative sm:p-10 py-6 px-6 shadow-xl shadow-black-200'>
					<div className='flex items-center content-center'>
						<div className='max-w-full absolute top-0 right-0 overflow-hidden rounded-xl'>
							<img
								src={currentProject.spotlight}
								alt='spotlight'
								className='w-full h-auto object-cover object-top spotlight'
							/>
						</div>
						<div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-xl style={currentProject.logoStyle}'>
							<img
								src={currentProject.logo}
								alt='logo'
								className='w-10 h-10 shadow-sm'
							/>
						</div>
					</div>
					<div className='flex flex-col gap-4 text-white-600 mt-2 mb-2 pt-14 sm:pt-20'>
						<p className='text-white text-2xl font-bold animatedText'>
							{currentProject.title}
						</p>
						<p className='body-text animatedText'>{currentProject.desc}</p>
						<p className='body-text animatedText'>{currentProject.subDesc}</p>
					</div>
					<div className='flex items-center justify-between flex-wrap gap-5'>
						<div className='flex items-center gap-3'>
							{currentProject.tags.map((tag, index) => (
								<div key={index} className='tech-logo'>
									<img src={tag.path} alt={tag.name} />
								</div>
							))}
						</div>
						<div className='flex justify-center items-center rounded-lg border bg-white-50'>
							<a
								className='flex items-center justify-center gap-2 cursor-pointer text-white-600'
								href={currentProject.href}
								target='_blank'
								rel='noreferrer'>
								<Button
									name='Check Live Site'
									image='/assets/arrow-right-up.svg'
								/>
								<img
									src='/assets/arrow-right-up.svg'
									className='clickable size-6 sm:size-8 '
									alt='right up arrow'
								/>
							</a>
						</div>
					</div>
					<div className='flex justify-between items-center mt-10'>
						<button
							className='clickable arrow-btn'
							onClick={() => handleNavigation('previous')}>
							<img src='assets/arrow-left.svg' alt='left arrow' />
						</button>
						<button
							className='clickable arrow-btn'
							onClick={() => handleNavigation('next')}>
							<img src='assets/arrow-right2.svg' alt='right arrow' />
						</button>
					</div>
				</div>
				<div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
					<Canvas>
						<ambientLight intensity={Math.PI / 2} />
						<directionalLight position={[10, 10, 5]} />
						<Center>
							<Suspense fallback={<CanvasLoader />}>
								<group
									scale={14}
									position={[-0.8, 1.2, 0]}
									rotation={[0, -0.1, 0]}>
									<DemoScreen texture={currentProject.texture} />
								</group>
							</Suspense>
						</Center>
						<OrbitControls
							maxPolarAngle={Math.abs(Math.PI / 2)}
							enableZoom={false}
						/>
					</Canvas>
				</div>
			</div>
		</section>
	);
};

export default ProjectSection;
