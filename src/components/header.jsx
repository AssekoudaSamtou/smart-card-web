/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Header = () => (
	<header sx={{bg: '#FFF', borderColor: 'primary', display: 'flex', alignItems: 'center',  justifyContent: 'space-between', padding: '30px', borderBottom: '1px solid #EDF2F7'}}>
		<a sx={{fontWeight: 'bold', fontSize: '28px', color: '#27272E'}}>Dashboard</a>
		
		<nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', height: '100%'}}>
			<button sx={{variant: 'buttons.light'}}>
				<svg sx={{margin: '0 .5rem 0 0'}} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.6262 1.45451C11.7726 1.60095 11.7726 1.83839 11.6262 1.98484L10.844 2.767L9.34403 1.267L10.1262 0.484835C10.2726 0.338388 10.5101 0.338388 10.6565 0.484835L11.6262 1.45451Z" fill="black"/>
					<path d="M10.3137 3.29733L8.8137 1.79733L3.70396 6.90707C3.66279 6.94824 3.63178 6.99842 3.61337 7.05365L3.00995 8.86391C2.96109 9.01049 3.10054 9.14994 3.24712 9.10108L5.05738 8.49766C5.11261 8.47925 5.16279 8.44824 5.20396 8.40707L10.3137 3.29733Z" fill="black"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M0.75 10.125C0.75 10.7463 1.25368 11.25 1.875 11.25H10.125C10.7463 11.25 11.25 10.7463 11.25 10.125V5.625C11.25 5.41789 11.0821 5.25 10.875 5.25C10.6679 5.25 10.5 5.41789 10.5 5.625V10.125C10.5 10.3321 10.3321 10.5 10.125 10.5H1.875C1.66789 10.5 1.5 10.3321 1.5 10.125V1.875C1.5 1.66789 1.66789 1.5 1.875 1.5H6.75C6.95711 1.5 7.125 1.33211 7.125 1.125C7.125 0.917893 6.95711 0.75 6.75 0.75H1.875C1.25368 0.75 0.75 1.25368 0.75 1.875V10.125Z" fill="black"/>
				</svg>
				Download
			</button>
			<button sx={{variant: 'buttons.primary', marginLeft: '1rem'}}>
				<svg sx={{margin: '0 .5rem 0 0'}} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M6 0C6.66274 0 7.2 0.537258 7.2 1.2V4.8H10.8C11.4627 4.8 12 5.33726 12 6C12 6.66274 11.4627 7.2 10.8 7.2H7.2V10.8C7.2 11.4627 6.66274 12 6 12C5.33726 12 4.8 11.4627 4.8 10.8V7.2H1.2C0.537258 7.2 0 6.66274 0 6C0 5.33726 0.537258 4.8 1.2 4.8H4.8V1.2C4.8 0.537258 5.33726 0 6 0Z" fill="white"/>
				</svg>
				create
			</button>
		</nav>
	</header>
)

export default Header
