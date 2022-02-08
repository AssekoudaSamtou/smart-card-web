import { roboto } from '@theme-ui/presets'

const theme = {
	...roboto,
	containers: {
		card: {
			boxShadow: '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)',
			borderRadius: '16px',
			p: 24,
			background: '#FFFFFF',
		},
		page: {
			// width: '100vw',
			// height: '100vh',
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
				p: '10px',
				cursor: 'pointer'
			},
			'& .dropdown-item:hover': {
				bg: '#EDF2F7',
			},
			'& .dropdown-item.active': {
				bg: '#4C6FFF',
				borderRadius: '6px',
				color: '#FFFFFF'
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
				color: '#425466'
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
			color: '#16192C',
		}
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
		text: '#718096',
		background: '#FFFFFF',
		primary: '#4C6FFF',
	},
}

export default theme
