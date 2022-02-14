/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Search, XCircleIcon} from "../../icons"

const SearchInput = ({ name, value, setValue, help, style, required, placeholder }) => (
	<div sx={{display: 'flex', alignItems: 'center', ...style}}>
		{ value ? (<span onClick={ () => setValue && setValue('') }><XCircleIcon fill={'#FF92AE'}/></span>) : (<Search fill={'#7A828A'}/>) }
		<input
			id={name}
			name={name}
			value={value}
			required={ required ? required : true }
			type="text"
			onChange={event => setValue && setValue(event.target.value)}
			sx={{variant: 'controls.search'}}
			placeholder={ placeholder }
		/>
		{
			help ? (
				<span sx={{fontSize: '10px', lineHeight: '12px', color: help.color || '#718096'}}>{help.text}</span>
			) : ''
		}
	</div>
)

export default SearchInput
