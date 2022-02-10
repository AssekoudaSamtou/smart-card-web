/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Button = ({ children, color }) => (
	<button sx={{
		fontFamily: 'Inter',
		bg: color || 'primary',
		color: '#FFFFFF',
		borderRadius: '6px',
		padding: '12px 20px',
		border: '0',
		fontWeight: 600,
		fontSize: '12px',
		lineHeight: '12px',
		cursor: 'pointer',
	}}>{ children }</button>
)

export default Button
