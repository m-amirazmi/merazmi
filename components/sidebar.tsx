import Link from 'next/link';
import { useRouter } from 'next/router';
import { menu, socials } from '../data/menu';

export default function Sidebar() {
	const { pathname } = useRouter();

	return (
		<div className="sidelinks w-11/12">
			{menu.map((i) => (
				<Link
					key={i.id}
					id={i.id.toString()}
					href={i.link}
					className={`flex cursor-pointer items-center justify-end gap-2 border-r-4 border-primary-dark py-3 px-4 text-lg ${
						pathname === i.link ? 'active border-cyan-600 text-cyan-700' : ''
					}`}
				>
					<p>{i.name}</p>
					<div className="h-7 w-7">{<i.icon />}</div>
				</Link>
			))}
			<div className="mt-8 flex justify-between">
				{socials.map((i) => (
					<Link
						target="_blank"
						key={i.id}
						href={i.link}
						className="flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-gray-500 hover:border-cyan-700 hover:text-cyan-700"
					>
						<i className={`fa-brands ${i.icon} text-lg`}></i>
					</Link>
				))}
			</div>
		</div>
	);
}
