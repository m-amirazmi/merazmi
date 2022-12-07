import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { menu } from '../data/menu';

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
		</div>
	);
}
