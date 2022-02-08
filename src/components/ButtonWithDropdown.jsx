/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from "react"

const ButtonWithDropdown = ({ options, children }) => {
	const [showDropdown, setShowDropdown] = useState(false)
	
	const optionClickHandler = (option) => {
		setShowDropdown(false)
	}
	
	return (
		<div sx={{display: 'flex', flexDirection: 'column', position: 'relative'}}>
			<div onClick={ () => setShowDropdown(prevState => !prevState) }>
				{ children }
			</div>
			{
				showDropdown ? (
					<div sx={{variant: 'containers.dropdown', top: '40px', width: 'unset'}}>
						{
							options && options.map((item, i) => (
								<div
									key={ i }
									onClick={ () => optionClickHandler(item) }
									className={`dropdown-item`}
								>
									{ item.icon }
									<span>{ item.text }</span>
								</div>
							))
						}
					</div>
				) : ''
			}
		</div>
	)
}

export default ButtonWithDropdown
