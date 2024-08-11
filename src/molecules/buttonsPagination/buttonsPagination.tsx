import './buttonsPagination.scss'

import ImportantButton from '../../atoms/buttons/importantButton/importantButton'

import { getPageArray } from '../../utils/pagePagination/pagePagination'

const ButtonsPagination = ({ totalPages, page, changePage, ...props }) => {
	let pagesArray = getPageArray(totalPages)

	return (
		<div {...props} className='buttons-pagination'>
			{pagesArray.map((i) => (
				<ImportantButton
					key={i}
					onClick={() => changePage(i)}
					className={
						page === i
							? 'buttons-pagination__button buttons-pagination__button_active'
							: 'buttons-pagination__button'
					}>
					{i}
				</ImportantButton>
			))}
		</div>
	)
}

export default ButtonsPagination
