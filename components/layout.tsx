import { ILayout } from '../utils/interfaces';
import Sidebar from './sidebar';

export default function Layout({ children }: ILayout) {
	return (
		<div className="min-h-screen w-screen bg-zinc-100">
			<div className="container mx-auto">
				<div className="fixed w-[250px] py-20">
					<Sidebar />
				</div>
				<div className="flex min-h-screen w-full items-center justify-center pl-[300px]">{children}</div>
			</div>
		</div>
	);
}
