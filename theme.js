import { roboto } from '@theme-ui/presets'

const theme = {
	...roboto,
	containers: {
		card: {
			display: 'flex',
			flexDirection: 'column',
			boxShadow: '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)',
			borderRadius: '16px',
			p: 24,
			background: '#FFFFFF',
		},
		page: {
			maxWidth: '960px',
			m: 0,
			mx: 'auto',
		},
		alert: {
			boxShadow: '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)',
			borderRadius: '16px',
			display: 'inline-flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			p: 16,
			width: '475px',
			background: '#FFFFFF',
			position: 'fixed',
			top: 'calc(100% - 110px)',
			left: 'calc(100% - 500px)',
			
			'& .message': {
				fontWeight: 'normal',
				fontSize: '14px',
				lineHeight: '23px',
				fontFeatureSettings: '\'salt\' on',
				color: '#FFFFFF',
				ml: 16,
			},
			'& .close': {
				cursor: 'pointer',
				p: '0 4px',
			},
		},
		dropdown: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'stretch',
			p: '14px 12px',
			position: 'absolute',
			width: '100%',
			left: '0',
			top: '70px',
			bg: '#FFFFFF',
			boxShadow: '0px 0px 1px rgba(12, 26, 75, 0.2), 0px 1px 3px rgba(50, 50, 71, 0.1)',
			borderRadius: '8px',
			m: '9px 0px',
			'& .dropdown-item': {
				display: 'flex',
				justifyContent: 'flex-start',
				p: '10px',
				cursor: 'pointer',
				userSelect: 'none',
				color: '#425466'
			},
			'& .dropdown-item:hover': {
				bg: '#EDF2F7',
			},
			'& .dropdown-item.active': {
				bg: '#4C6FFF',
				borderRadius: '6px',
				color: '#FFFFFF'
			},
			'& .dropdown-item svg': {
				m: '0 12px 0 0',
			},
			'& .dropdown-item:active': {
				bg: '#4C6FFF',
				borderRadius: '6px',
				color: '#FFFFFF'
			},
			'& .dropdown-item.active span': {
				color: '#FFFFFF'
			},
			'& .dropdown-item span': {
				fontWeight: '500',
				fontSize: '14px',
				lineHeight: '14px',
				display: 'flex',
				alignItems: 'center',
			},
		}
	},
	buttons: {
		primary: {
			fontFamily: 'Inter',
			color: '#FFFFFF',
			background: '#4C6FFF',
			borderRadius: '6px',
			padding: '12px 20px',
			border: '0',
			fontWeight: 600,
			fontSize: '12px',
			lineHeight: '12px',
			cursor: 'pointer',
		},
		light: {
			fontFamily: 'Inter',
			color: '#16192C',
			background: '#FFFFFF',
			borderRadius: '6px',
			padding: '12px 20px',
			border: '1px solid #EDF2F7',
			boxSizing: 'border-box',
			fontWeight: 600,
			fontSize: '12px',
			lineHeight: '12px',
			cursor: 'pointer',
		},
	},
	icons: {
		rounded: {
			background: '#4AAE8C',
			borderRadius: '100%',
			p: 16,
			alignSelf: 'start',
			display: 'inline-flex'
		},
	},
	headings: {
		h5: {
			fontWeight: '600',
			fontSize: '16px',
			lineHeight: '25px',
			display: 'flex',
			alignItems: 'center',
			color: '#27272E',
		},
		h6: {
			fontWeight: '600',
			fontSize: '16px',
			lineHeight: '25px',
			display: 'flex',
			alignItems: 'center',
			color: '#27272E',
		},
	},
	text: {
		display: {
			1: {
				fontFamily: 'Inter',
				fontStyle: 'normal',
				fontWeight: 'bold',
				fontSize: '80px',
				lineHeight: '100px',
				color: '#425466',
			},
			2: {
				variant: 'text.display.1',
				fontSize: '72px',
				lineHeight: '92px',
			},
			3: {
				variant: 'text.display.1',
				fontSize: '64px',
				lineHeight: '77px',
			},
			4: {
				variant: 'text.display.1',
				fontSize: '56px',
				lineHeight: '68px',
			},
			5: {
				variant: 'text.display.1',
				fontSize: '48px',
				lineHeight: '58px',
			},
			6: {
				variant: 'text.display.1',
				fontSize: '40px',
				lineHeight: '48px',
			},
		},
		heading: {
			h1: {
				fontWeight: 'bold',
				fontStyle: 'normal',
				display: 'flex',
				alignItems: 'center',
				color: '#245466',
				fontSize: '36px',
				lineHeight: '136.02%',
			},
			h2: {
				variant: 'text.heading.h1',
				fontSize: '28px',
			},
			h3: {
				variant: 'text.heading.h1',
				fontSize: '20px',
			},
			h4: {
				variant: 'text.heading.h1',
				fontSize: '18px',
				lineHeight: '22px',
			},
			h5: {
				variant: 'text.heading.h1',
				fontSize: '16px',
				lineHeight: '25px',
			},
			h6: {
				fontSize: '14px',
				lineHeight: '24px',
			},
			custom: {
				fontSize: '11px',
				lineHeight: '13px',
				letterSpacing: '.03rem',
				textTransform: 'uppercase',
			},
		},
		paragraph: {
			lead: {
				fontWeight: '400',
				fontStyle: 'normal',
				display: 'flex',
				alignItems: 'center',
				color: '#245466',
				fontSize: '18px',
				lineHeight: '30px',
			},
		},
		base: {
			fontWeight: 'normal',
			fontStyle: 'normal',
			display: 'flex',
			alignItems: 'center',
			color: '#245466',
			fontSize: '16px',
			lineHeight: '162.02%',
		},
		xm: {
			variant: 'text.base',
			fontSize: '12px',
			lineHeight: '20px',
		},
		sm: {
			variant: 'text.base',
			fontSize: '14px',
			lineHeight: '23px',
		},
		lg: {
			variant: 'text.base',
			fontSize: '20px',
			lineHeight: '136%',
		},
		xl: {
			variant: 'text.base',
			fontSize: '28px',
			lineHeight: '136%',
		},
	},
	controls: {
		input: {
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
			margin: '.7rem 0',
			fontFamily: 'Inter',
			'&:focus': {
				boxShadow: '0px 0px 0px 2px rgba(76, 111, 255, 0.3)'
			}
		},
		search: {
			background: '#FFFFFF',
			outline: 'none',
			margin: '.7rem 0',
			fontFamily: 'Inter',
			appearance: 'none',
			backgroundClip: 'padding-box',
			border: '0',
			borderRadius: '.375rem',
			color: '#16192c',
			display: 'block',
			fontSize: '1rem',
			fontWeight: '400',
			lineHeight: '1.3',
			padding: '.5rem 1.25rem',
			transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
			'&:focus': {
			
			}
		},
		select: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			background: '#FFFFFF',
			boxShadow: '0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2)',
			borderRadius: '6px',
			outline: 'none',
			border: '0',
			padding: '14px 16px',
			fontWeight: '500',
			fontSize: '15px',
			color: '#7A828A',
			lineHeight: '19px',
			margin: '.7rem 0',
			fontFamily: 'Inter',
			'&:focus': {
				boxShadow: '0px 0px 0px 2px rgba(76, 111, 255, 0.3)'
			},
			'&:active': {
				boxShadow: '0px 0px 0px 2px rgba(76, 111, 255, 0.3)'
			},
			'& .control.disabled': {
				color: '#B5B5BD',
			},
		},
	},
	styles: {
		...roboto.styles
	},
	fonts: {
		body: 'Inter',
	},
	colors: {
		neutral: '#FFFFFF',
		primary: '#4C6FFF',
		secondary: '#E4ECF7',
		tertiary: '#FF92AE',
		success: '#66CB9F',
		info: '#68DBF2',
		danger: '#F16063',
		warning: '#F7936F',
		dark: '#16192C',
	},
	link: {
		color: '#4C6FFF',
		cursor: 'pointer',
		fontSize: '12px',
		fontWeight: '600',
	}
}

export default theme
