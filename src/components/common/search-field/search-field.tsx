import { SearchIcon } from 'assets/images'
import { ChangeEvent, FC } from 'react'
import styles from './search-field.module.scss'

interface Props {
	value?: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<Props> = ({ value, onChange }) => {
	return (
		<label className={styles.searchField}>
			<input
				className={styles.searchFieldInput}
				value={value}
				onChange={onChange}
				placeholder='Введите номер запчасти или VIN'
				type='text'
				aria-label='search-vin'
			/>
			<img
				className={styles.searchFieldIcon}
				src={SearchIcon}
				alt='SEARCH ICON'
			/>
		</label>
	)
}

export default SearchField
