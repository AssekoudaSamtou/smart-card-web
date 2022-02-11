/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Tabs from "./tabs"
import ButtonWithDropdown from "./ButtonWithDropdown"
import {v4 as uuidv4} from "uuid"
import { PlusIcon } from "../../icons";
import Button from "./Button";
import React from "react";

const Header = ({tabs}) => (
	<header sx={{bg: '#FFF', position: 'fixed', width: 'calc(100vw - 250px)', borderColor: 'primary', display: 'flex', flexDirection: 'column', alignItems: 'stretch', padding: tabs && tabs.items ? '30px 30px 0' : '30px', borderBottom: '1px solid #EDF2F7', zIndex: '1'}}>
		<div sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between'}}>
			<span sx={{fontWeight: 'bold', fontSize: '28px', color: '#27272E'}}>Tableau de bord</span>
			<nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', height: '100%'}}>
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
					{ id: uuidv4(), text: 'Réseau social', icon: (<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M8 3C8 4.10457 7.10457 5 6 5C4.89543 5 4 4.10457 4 3C4 1.89543 4.89543 1 6 1C7.10457 1 8 1.89543 8 3ZM6 6C7.65685 6 9 4.65685 9 3C9 1.34315 7.65685 0 6 0C4.34315 0 3 1.34315 3 3C3 4.65685 4.34315 6 6 6ZM12 11C12 12 11 12 11 12H1C1 12 0 12 0 11C0 10 1 7 6 7C11 7 12 10 12 11ZM11 10.9965C10.9986 10.7497 10.8462 10.0104 10.1679 9.33211C9.51563 8.67985 8.2891 8 5.99999 8C3.71088 8 2.48435 8.67985 1.8321 9.33211C1.15375 10.0104 1.00142 10.7497 1 10.9965H11Z" fill="#425466"/>
						</svg>) },
				]}>
					<Button size={'default'} color="primary" icon={{ position: 'left', component: PlusIcon, size: 12 }}>Nouveau</Button>
				</ButtonWithDropdown>
			</nav>
		</div>
		
		{
			tabs && tabs.items ? (<Tabs items={tabs.items} active={tabs.active || tabs.items[0]} onItemClickHandler={tabs.onClickHandler} />) : ''
		}
	</header>
)

export default Header
