export const navLinks = [
	{ id: 1, name: 'Work', href: '#work' },
	{ id: 2, name: 'About', href: '#about' },
	{ id: 3, name: 'Contact', href: '#contact' },
	{ id: 4, name: 'Home', href: '#hero' },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.05 : isMobile ? 0.25 : 0.3,
		deskPosition: isMobile ? [0.1, -0.3, 0] : [0.3, -0.8, 0.5],
		cubePosition: isSmall
			? [3, 4, 0]
			: isMobile
			? [1.5, -1.0, 1.7]
			: isTablet
			? [1.5, -1.0, 1.7]
			: [1.5, -1.0, 1.7],
		reactLogoPosition: isSmall
			? [-0.7, 1.5, 1]
			: isMobile
			? [-1, 1.5, 1]
			: isTablet
			? [-1.8, 2.5, 1]
			: [-2.5, 3, 1],
		ringPosition: isSmall
			? [-2, 1.0, 0.5]
			: isMobile
			? [-2, 1.0, 0.5]
			: isTablet
			? [-2, 1.5, 0.5]
			: [-2, 1.5, 0.5],
		pythonPosition: isSmall
			? [-1.5, 1.5, 0]
			: isMobile
			? [-2.5, 1.5, 0]
			: isTablet
			? [-2.5, 1.5, 0]
			: [-3.0, 1.5, 0],
		targetPosition: isSmall
			? [1.7, 1.3, 1]
			: isMobile
			? [1.8, 1.3, 1]
			: isTablet
			? [1.8, 1, 1]
			: [2.0, 1.5, 1],
	};
};

const python = {
	path: '/assets/python.svg',
	name: 'python',
};

const typescript = {
	path: 'assets/typescript.svg',
	name: 'typescript',
};

const github = {
	path: '/assets/github-mark.svg',
	name: 'github',
};

const framer = {
	path: '/assets/framer-.svg',
	name: 'framer motion',
};

const three = {
	path: '/assets/three.png',
	name: 'three js',
};

export const myProjects = [
	{
		title: 'Project01',
		desc: [
			'Suspendisse semper ante lorem, quis iaculis diam interdum sit amet. Morbi bibendum molestie diam. Nam fringilla sollicitudin tortor at volutpat. Nam sodales nisl condimentum mi cursus, sed ultricies magna tristique. Curabitur id magna nisi. ',
		],
		subDesc: [],
		href: 'https://www.google.com',
		className: 'animatedText2',
		texture: '/images/textures/screen.mp4',
		logo: '/assets/projects/project-logo2.png',
		logoStyle: {
			backgroundColor: '#0E1F38',
			border: '0.2px solid #0E2D58',
			boxShadow: '0px 0px 60px 0px #635BFF4D',
		},
		tags: [python, typescript, github],
		spotlight: '/assets/spotlight1.png',
	},
	{
		title: 'Project02',
		desc: [
			'Suspendisse semper ante lorem, quis iaculis diam interdum sit amet. Morbi bibendum molestie diam. Nam fringilla sollicitudin tortor at volutpat. Nam sodales nisl condimentum mi cursus, sed ultricies magna tristique. Curabitur id magna nisi. ',
		],
		subDesc: [],
		href: 'https://www.google.com',
		className: 'animatedText2',
		texture: '/images/textures/screen2.mp4',
		logo: '/assets/projects/project-logo2.png',
		logoStyle: {
			backgroundColor: '#0E1F38',
			border: '0.2px solid #0E2D58',
			boxShadow: '0px 0px 60px 0px #635BFF4D',
		},
		tags: [framer, three, typescript, github],
		spotlight: '/assets/spotlight1.png',
	},
	{
		title: 'Project03',
		desc: [
			'Nam sodales nisl condimentum mi cursus, sed ultricies magna tristique. Curabitur id magna nisi. ',
		],
		subDesc: [],
		href: 'https://www.google.com',
		className: 'animatedText2',
		texture: '/images/textures/screen.mp4',
		logo: '/assets/projects/project-logo2.png',
		logoStyle: {
			backgroundColor: '#0E1F38',
			border: '0.2px solid #0E2D58',
			boxShadow: '0px 0px 60px 0px #635BFF4D',
		},
		tags: [framer, three, python, github],
		spotlight: '/assets/spotlight1.png',
	},
];
