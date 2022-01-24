import { roboto } from '@theme-ui/presets'

const theme = {
	...roboto,
	containers: {
		card: {
			boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
			border: '1px solid',
			borderColor: 'muted',
			borderRadius: '4px',
			p: 2,
		},
		page: {
			width: '100%',
			maxWidth: '960px',
			m: 0,
			mx: 'auto',
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
