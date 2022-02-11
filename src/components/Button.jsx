/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react";

const Button = ({ children, color, size, icon, rounded, style }) => {
	const textColor = color === 'secondary' ? '#505780' : color === 'neutral' ? '#16192C' : '#FFFFFF'
	const iconComponent = icon ? React.createElement(icon.component, {
		fill: textColor,
		sx: {
			margin: icon.position === 'left'
				? '0 8px 0 0'
				: icon.position === 'right'
					? '0 0 0 8px' : 0,
			width: icon.size,
			height: icon.size,
		}
	}) : null
	
	return (
		<button sx={{
			fontFamily: 'Inter',
			bg: color || 'primary',
			color: textColor,
			borderRadius: rounded === 'full' ? '100px' : '6px',
			padding: icon && icon.position === 'center'
				? '10px'
				: size === 'large'
					? '16px 24px'
					: size === 'small'
						? '8px 16px'
						: '12px 20px',
			border: color === 'neutral' ? '1px solid #EDF2F7' : '0',
			fontWeight: 600,
			fontSize: size === 'large' ? '14px' : size === 'small' ? '10px' : '12px',
			lineHeight: '12px',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			'&:active': {
				boxShadow: '0px 0px 0px 2px rgba(76, 111, 255, 0.3)'
			},
			...style
		}}>
			{
				icon ? icon.position === 'left' ? (
					<>
						{ iconComponent }
						{ children }
					</>
				) : icon.position === 'right' ? (
					<>
						{ children }
						{ iconComponent }
					</>
				) : icon.position === 'center' ? (
					<>
						{ iconComponent }
					</>
				) : children : children
			}
		</button>
	)
}

export default Button
