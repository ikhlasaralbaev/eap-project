import { Home } from 'pages/index'

export interface IRoute {
	path: string
	element: () => JSX.Element
}

export const routes: IRoute[] = [
	{
		path: '/',
		element: Home,
	},
]
