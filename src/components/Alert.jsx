/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import RoundedIcon from "./RoundedIcon";

const Alert = ({  }) => (
	<div sx={{variant: 'containers.alert', bg: '#66CB9F'}}>
		<div sx={{ display: 'flex', alignItems: 'center' }}>
			<RoundedIcon/>
			<span  className='message'>A short alert message here…</span>
		</div>
		<span className="close">
			<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M8.14645 0.646447C8.34171 0.451184 8.65829 0.451184 8.85355 0.646447L11.8536 3.64645C12.0488 3.84171 12.0488 4.15829 11.8536 4.35355L8.85355 7.35355C8.65829 7.54882 8.34171 7.54882 8.14645 7.35355C7.95118 7.15829 7.95118 6.84171 8.14645 6.64645L10.7929 4L8.14645 1.35355C7.95118 1.15829 7.95118 0.841709 8.14645 0.646447Z" fill="#FFFFFF"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.41411e-08 3.72386 0.223858 3.5 0.5 3.5L11 3.5C11.2761 3.5 11.5 3.72386 11.5 4C11.5 4.27614 11.2761 4.5 11 4.5L0.5 4.5C0.223858 4.5 -2.41411e-08 4.27614 0 4Z" fill="#FFFFFF"/>
		</svg>
		</span>
	</div>
)

export default Alert
