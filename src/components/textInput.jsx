/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const TextInput = ({label, name, value, setValue, type, help}) => (
	<div sx={{display: 'flex', flexDirection: 'column'}}>
		<label htmlFor="phone" sx={{fontWeight: '500', fontSize: '14px', lineHeight: '17px', display: 'flex', alignItems: 'center', color: '#425466'}}>{label}</label>
		<input type={type ? type : 'text'} id={name} name={name} value={value} onChange={event => setValue && setValue(event.target.value)} sx={{
			background: '#FFFFFF',
			boxShadow: '0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2)',
			borderRadius: '6px',
			outline: 'none',
			border: '0',
			padding: '14px 16px',
			fontWeight: '500',
			fontSize: '15px',
			color: '#7A828A',
			lineHeight: '15px',
			margin: '.7rem 0'
		}}/>
		{
			help ? (
				<span sx={{fontSize: '10px', lineHeight: '12px', color: help.color || '#718096'}}>{help.text}</span>
			) : ''
		}
	</div>
)

export default TextInput
