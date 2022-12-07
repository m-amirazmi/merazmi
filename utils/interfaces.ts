import { ReactNode } from 'react';

export interface IComponent {
	children: ReactNode;
}

export interface ILayout extends IComponent {}

export interface IHomepage extends IComponent {
	data: [];
}
