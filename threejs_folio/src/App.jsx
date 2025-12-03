import React from 'react';
import Navbar from './layout/Navbar';
import HeroSection from './layout/HeroSection';
import About from './layout/About';
import Footer from './layout/Footer';
import ProjectSection from './layout/ProjectSection';

const App = () => {
	return (
		<main className='max-w-7xl mx-auto'>
			<Navbar />
			<HeroSection />
			<About />
			<ProjectSection />
			<Footer />
		</main>
	);
};

export default App;
