import './paginationButtons.scss'

import ImportantButton from '../../atoms/buttons/importantButton/importantButton'

import { getPageArray } from '../../utils/pagePagination/pagePagination'

const PaginationButtons = ({ totalPages, page, changePage, ...props }) => {
	let pagesArray = getPageArray(totalPages)

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
