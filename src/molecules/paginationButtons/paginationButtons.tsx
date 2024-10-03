import './paginationButtons.scss'

import { FC } from 'react'

import ImportantButton from '../../atoms/buttons/importantButton/importantButton'

import { getPageArray } from '../../utils/pagePagination/pagePagination'

interface interfacePaginationButtons {
	totalPages: number
	page: number
	changePage: (page: number) => void
}

const PaginationButtons: FC<interfacePaginationButtons> = ({
	totalPages,
	page,
	changePage,
	...props
}) => {
	const pagesArray = getPageArray(totalPages)

	return (
		<div {...props} className='pagination-buttons'>
			{pagesArray.map((i) => (
				<ImportantButton
					key={i}
					onClick={() => changePage(i)}
					className={
						page === i
							? 'pagination-buttons__button pagination-buttons__button_active'
							: 'pagination-buttons__button'
					}>
					{i}
				</ImportantButton>
			))}
		</div>
	)
}

export default PaginationButtons
