/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const RoundedIcon = ({ roundColor, children }) => (
	<span sx={{variant: 'icons.rounded', bg: roundColor}}>
		{ children }
	</span>
)

export default RoundedIcon
