/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Tabs from "./tabs"
import ButtonWithDropdown from "./ButtonWithDropdown"
import {v4 as uuidv4} from "uuid"

const Header = ({tabs}) => (
	<header sx={{bg: '#FFF', position: 'fixed', width: 'calc(100vw - 250px)', borderColor: 'primary', display: 'flex', flexDirection: 'column', alignItems: 'stretch', padding: tabs && tabs.items ? '30px 30px 0' : '30px', borderBottom: '1px solid #EDF2F7', zIndex: '1'}}>
		<div sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between'}}>
			<span sx={{fontWeight: 'bold', fontSize: '28px', color: '#27272E'}}>Dashboard</span>
			<nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', height: '100%'}}>
				{/*<button sx={{variant: 'buttons.light'}}>
				<svg sx={{margin: '0 .5rem 0 0'}} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.6262 1.45451C11.7726 1.60095 11.7726 1.83839 11.6262 1.98484L10.844 2.767L9.34403 1.267L10.1262 0.484835C10.2726 0.338388 10.5101 0.338388 10.6565 0.484835L11.6262 1.45451Z" fill="black"/>
					<path d="M10.3137 3.29733L8.8137 1.79733L3.70396 6.90707C3.66279 6.94824 3.63178 6.99842 3.61337 7.05365L3.00995 8.86391C2.96109 9.01049 3.10054 9.14994 3.24712 9.10108L5.05738 8.49766C5.11261 8.47925 5.16279 8.44824 5.20396 8.40707L10.3137 3.29733Z" fill="black"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M0.75 10.125C0.75 10.7463 1.25368 11.25 1.875 11.25H10.125C10.7463 11.25 11.25 10.7463 11.25 10.125V5.625C11.25 5.41789 11.0821 5.25 10.875 5.25C10.6679 5.25 10.5 5.41789 10.5 5.625V10.125C10.5 10.3321 10.3321 10.5 10.125 10.5H1.875C1.66789 10.5 1.5 10.3321 1.5 10.125V1.875C1.5 1.66789 1.66789 1.5 1.875 1.5H6.75C6.95711 1.5 7.125 1.33211 7.125 1.125C7.125 0.917893 6.95711 0.75 6.75 0.75H1.875C1.25368 0.75 0.75 1.25368 0.75 1.875V10.125Z" fill="black"/>
				</svg>
				Download
			</button>*/}
				<ButtonWithDropdown options={[
					{ id: uuidv4(), text: 'Poste', icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M14.5 3H1.5C1.22386 3 1 3.22386 1 3.5V12.5C1 12.7761 1.22386 13 1.5 13H14.5C14.7761 13 15 12.7761 15 12.5V3.5C15 3.22386 14.7761 3 14.5 3ZM1.5 2C0.671573 2 0 2.67157 0 3.5V12.5C0 13.3284 0.671573 14 1.5 14H14.5C15.3284 14 16 13.3284 16 12.5V3.5C16 2.67157 15.3284 2 14.5 2H1.5Z" fill="#425466"/>
								<path fillRule="evenodd" clipRule="evenodd" d="M5 8C5 7.72386 5.22386 7.5 5.5 7.5H12.5C12.7761 7.5 13 7.72386 13 8C13 8.27614 12.7761 8.5 12.5 8.5H5.5C5.22386 8.5 5 8.27614 5 8Z" fill="#425466"/>
								<path fillRule="evenodd" clipRule="evenodd" d="M5 5.5C5 5.22386 5.22386 5 5.5 5H12.5C12.7761 5 13 5.22386 13 5.5C13 5.77614 12.7761 6 12.5 6H5.5C5.22386 6 5 5.77614 5 5.5Z" fill="#425466"/>
								<path fillRule="evenodd" clipRule="evenodd" d="M5 10.5C5 10.2239 5.22386 10 5.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H5.5C5.22386 11 5 10.7761 5 10.5Z" fill="#425466"/>
								<circle cx="3.5" cy="5.5" r="0.5" fill="#425466"/>
								<circle cx="3.5" cy="8" r="0.5" fill="#425466"/>
								<circle cx="3.5" cy="10.5" r="0.5" fill="#425466"/>
							</svg>) },
					{ id: uuidv4(), text: 'Contact', icon: (<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M8 3C8 4.10457 7.10457 5 6 5C4.89543 5 4 4.10457 4 3C4 1.89543 4.89543 1 6 1C7.10457 1 8 1.89543 8 3ZM6 6C7.65685 6 9 4.65685 9 3C9 1.34315 7.65685 0 6 0C4.34315 0 3 1.34315 3 3C3 4.65685 4.34315 6 6 6ZM12 11C12 12 11 12 11 12H1C1 12 0 12 0 11C0 10 1 7 6 7C11 7 12 10 12 11ZM11 10.9965C10.9986 10.7497 10.8462 10.0104 10.1679 9.33211C9.51563 8.67985 8.2891 8 5.99999 8C3.71088 8 2.48435 8.67985 1.8321 9.33211C1.15375 10.0104 1.00142 10.7497 1 10.9965H11Z" fill="#425466"/>
							</svg>) },
				]}>
					<button sx={{variant: 'buttons.primary', marginLeft: '1rem'}}>
						<svg sx={{margin: '0 .5rem 0 0'}} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M6 0C6.66274 0 7.2 0.537258 7.2 1.2V4.8H10.8C11.4627 4.8 12 5.33726 12 6C12 6.66274 11.4627 7.2 10.8 7.2H7.2V10.8C7.2 11.4627 6.66274 12 6 12C5.33726 12 4.8 11.4627 4.8 10.8V7.2H1.2C0.537258 7.2 0 6.66274 0 6C0 5.33726 0.537258 4.8 1.2 4.8H4.8V1.2C4.8 0.537258 5.33726 0 6 0Z" fill="white"/>
						</svg>
						Nouveau
					</button>
				</ButtonWithDropdown>
			</nav>
		</div>
		
		{
			tabs && tabs.items ? (<Tabs items={tabs.items} active={tabs.active || tabs.items[0]} onItemClickHandler={tabs.onClickHandler} />) : ''
		}
	</header>
)

export default Header
