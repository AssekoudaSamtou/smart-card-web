/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Image from 'next/image'
import Avatar from '../src/images/img.png'

export default () => {
	const th = {
		padding: '18px 0 18px 24px',
		fontWeight: '600',
		fontSize: '10px',
		lineHeight: '16px',
		textAlign: 'left',
		letterSpacing: '0.06em',
		textTransform: 'uppercase',
		color: '#8492A6'
	}
	const td = {
		padding: '18px 0 18px 24px',
	}
	
	return (
		<div sx={{ height: `calc(100vh - 103px)`}}>
			index
		</div>
	)
}
