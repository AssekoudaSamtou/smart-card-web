/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const TextInput = ({label, name, value, setValue, type, help, style, required}) => (
	<div sx={{display: 'flex', flexDirection: 'column', ...style}}>
		<label htmlFor="phone" sx={{fontWeight: '500', fontSize: '14px', lineHeight: '17px', display: 'flex', alignItems: 'center', color: '#425466'}}>{label}</label>
		<input
			id={name}
			name={name}
			value={value}
			required={ required ? required : true}
			type={type ? type : 'text'}
			onChange={event => setValue && setValue(event.target.value)}
			sx={{variant: 'controls.input'}}
		/>
		{
			help ? (
				<span sx={{fontSize: '10px', lineHeight: '12px', color: help.color || '#718096'}}>{help.text}</span>
			) : ''
		}
	</div>
)

export default TextInput
