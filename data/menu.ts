import { BriefcaseIcon, HomeIcon, NewspaperIcon, PhotoIcon, UserIcon } from '@heroicons/react/24/outline';

export const menu = [
	{ id: 1, name: 'Home', icon: HomeIcon, link: '/' },
	{ id: 2, name: 'About', icon: UserIcon, link: '/about' },
	{ id: 3, name: 'Projects', icon: BriefcaseIcon, link: '/projects' },
	{ id: 4, name: 'Blogs', icon: NewspaperIcon, link: '/blogs' },
	{ id: 5, name: 'Gallery', icon: PhotoIcon, link: '/gallery' },
];

export const socials = [
	{ id: 1, name: 'LinkedIn', icon: 'fa-linkedin-in', link: 'https://www.linkedin.com/in/m-amirazmi/' },
	{ id: 2, name: 'GitHub', icon: 'fa-github-alt', link: 'https://github.com/m-amirazmi' },
	{ id: 3, name: 'Twitter', icon: 'fa-twitter', link: 'https://twitter.com/dev_amirazmi' },
	{ id: 4, name: 'WhatsApp', icon: 'fa-whatsapp', link: 'tel:01119821105' },
	{ id: 5, name: 'Hashnode', icon: 'fa-hashnode', link: 'https://merazmi.hashnode.dev/' },
];
