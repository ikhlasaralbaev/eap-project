import { Outlet } from 'react-router-dom'
import Footer from './footer/footer'
import Header from './header/header'
import styles from './layout.module.scss'

const Layout = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
