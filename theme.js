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
