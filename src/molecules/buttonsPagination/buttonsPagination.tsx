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
							? 'buttons-pagination buttons-pagination_active'
							: 'buttons-pagination'
					}>
					{i}
				</ImportantButton>
			))}
		</div>
	)
}

export default ButtonsPagination
