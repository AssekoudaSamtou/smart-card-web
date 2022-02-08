/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from "react"

const SelectInput = ({label, name, value, setValue, type, help, style, options}) => {
	const [showMenu, setShowMenu] = useState(false)
	const [selectedOption, setSelectedOption] = useState(undefined)
	
	const optionClickHandler = (option) => {
		setSelectedOption(option)
		setShowMenu(false)
	}
	
	return (
		<div sx={{display: 'flex', flexDirection: 'column', position: 'relative', ...style}}>
			<label htmlFor="phone" sx={{fontWeight: '500', fontSize: '14px', lineHeight: '17px', display: 'flex', alignItems: 'center', color: '#425466'}}>{label}</label>
			<span onClick={ () => setShowMenu(prevState => !prevState) } sx={{variant: 'controls.select'}}>
				<span className={`control ${ !selectedOption ? 'disabled' : '' }`}>{ selectedOption ? selectedOption.text : 'Selectionez une option' }</span>
				<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3.98252 5.65869L0.685113 1.89022C0.296153 1.4457 0.611838 0.75 1.20251 0.75H7.79733C8.388 0.75 8.70369 1.4457 8.31473 1.89022L5.01732 5.65869C4.74341 5.97173 4.25643 5.97173 3.98252 5.65869Z" fill="#B5B5BD"/>
				</svg>
			</span>
			{
				showMenu ? (
					<div sx={{variant: 'containers.dropdown'}}>
						{
							options && options.map((item, i) => (
								<div
									key={i}
									onClick={ () => optionClickHandler(item) }
									className={`dropdown-item ${ selectedOption && item.id === selectedOption.id ? 'active' : '' }`}
								>
									<span>{ item.text }</span>
								</div>
							))
						}
					</div>
				) : ''
			}
			{
				help ? (
					<span sx={{fontSize: '10px', lineHeight: '12px', color: help.color || '#718096'}}>{help.text}</span>
				) : ''
			}
		</div>
	)
}

export default SelectInput
