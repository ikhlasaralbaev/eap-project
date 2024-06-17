import Layout from 'components/layout/layout'
import { routes } from 'lib/routes/routes'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{routes.map(item => (
					<Route path={item.path} element={<item.element />} key={item.path} />
				))}
			</Route>
		</Routes>
	)
}

export default App
