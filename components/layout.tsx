import { ReactNode } from 'react';

interface IComponent {
	children: ReactNode;
}

interface ILayout extends IComponent {}

export default function Layout({ children }: ILayout) {
	return <div className="w-screen min-h-screen h-full bg-gray-300 dark:bg-gray-800">{children}</div>;
}
