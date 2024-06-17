import classNames from 'classnames'
import { FC } from 'react'
import styles from './container.module.scss'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element
}

const Container: FC<Props> = ({ children, className, ...rest }) => {
	return (
		<div className={classNames(styles.container, className)} {...rest}>
			{children}
		</div>
	)
}

export default Container
