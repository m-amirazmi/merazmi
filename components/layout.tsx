import { ILayout } from '../utils/interfaces';
import Sidebar from './sidebar';

export default function Layout({ children }: ILayout) {
	return (
		<div className="min-h-screen w-screen bg-zinc-100 dark:bg-primary-dark">
			<div className="container mx-auto">
				<div className="flex flex-row">
					<div className="w-[250px] py-20">
						<Sidebar />
					</div>
					{/* <div className="w-full">{children}</div> */}
				</div>
			</div>
		</div>
	);
}
