import './search.scss'

import GlobalInput from '../../atoms/inputs/globalInput/globalInput'
import RoundButton from '../../atoms/buttons/roundButton/roundButton'

import search from '../../assets/icons/search.png'

const Search = () => {
	return (
		<div className='search'>
			<GlobalInput></GlobalInput>
			<RoundButton className='search__button'>
				<img src={search} alt='search' />
			</RoundButton>
		</div>
	)
}

export default Search
