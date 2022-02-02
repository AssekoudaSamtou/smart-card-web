/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Image from 'next/image'
import React from 'react'
import Hero from '../src/images/Image.png'
import { v4 as uuidv4 } from 'uuid'
import TextInput from "../src/components/textInput";


const GeneralsTab = () => {
	return (
		<div sx={{width: '60vw', margin: 'auto'}}>
			<div sx={{
				background: '#FFFFFF',
				boxShadow: '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)',
				borderRadius: '16px',
				height: '7rem',
				display: 'flex',
				justifyContent: 'space-between',
				padding: '24px'
			}}>
				<div>
				
				</div>
				<div sx={{display: 'flex', alignItems: 'center'}}>
					<button sx={{variant: 'buttons.light'}}>upload</button>
				</div>
			</div>
			
			<form>
				<h3>Informations personnelles</h3>
				
				<div sx={{display: 'flex', justifyContent: 'space-between'}}>
					<TextInput style={{flexBasis: '45%'}} name="phone" value="Jhon" setValue={undefined} label="Nom de famille" type="text"/>
					<TextInput style={{flexBasis: '45%'}} name="phone" value="Doe" setValue={undefined} label="Prénoms" type="text"/>
				</div>
				
				<div sx={{display: 'flex', justifyContent: 'space-between'}}>
					<TextInput style={{flexBasis: '45%'}} name="phone" value="test@example.com" setValue={undefined} label="Email" type="email"/>
					<TextInput style={{flexBasis: '45%'}} name="phone" value="8454121" setValue={undefined} label="Numéro de telephone" type="text"/>
				</div>
				
				<div sx={{display: 'flex', justifyContent: 'space-between'}}>
					<TextInput style={{flexBasis: '100%'}} name="phone" value="Lome" setValue={undefined} label="Adresse" type="text"/>
				</div>
				
				<div sx={{display: 'flex', justifyContent: 'end'}}>
					<button sx={{variant: 'buttons.light', margin: '0 1rem 0 0'}}>cancel</button>
					<button sx={{variant: 'buttons.primary'}}>save</button>
				</div>
				
			</form>
		</div>
	)
}

const SocialNetWorkTab = () => {
	const stats = [
		{id: 1, value: '1 535', desc: 'Contacts'},
		{id: 2, value: '1 535', desc: 'Posts'},
		{id: 3, value: '1 535', desc: 'Likes'},
	]
	return (
		<div sx={{
			display: 'flex',
			flexDirection: 'column',
			padding: '8px',
			alignItems: 'stretch',
			bg: '#FFFFFF',
			boxShadow: '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)',
			borderRadius: '16px',
			width: '343px',
			// height: '499px',
		}}>
			<div sx={{position: 'relative', height: '180px'}}>
				<Image sx={{borderRadius: '16px'}} src={Hero}/>
				<div sx={{
					position: 'absolute',
					width: '82px',
					height: '82px',
					left: 'calc(50% - 34.2px)',
					top: '100px',
					// backgroundImage: `url(${Avatar.src})`,
					backgroundColor: `#4C6FFF`,
					borderRadius: '100%',
					border: '3px solid #FFFFFF',
				}}>
						<span sx={{
							position: 'absolute',
							width: '15.4px',
							height: '15.4px',
							left: 'calc(50% + 19px)',
							top: '0px',
							backgroundColor: `#30E398`,
							borderRadius: '100%',
							border: '3px solid #FFFFFF',
						}}/>
				</div>
			</div>
			<div sx={{display: 'flex', flexDirection: 'column', margin: '16px 0 0 0'}}>
					<span sx={{
						fontWeight: '600',
						fontSize: '16px',
						lineHeight: '25px',
						display: 'flex',
						alignItems: 'center',
						textAlign: 'center',
						color: '#27272E',
						alignSelf: 'center',
					}}>Nom & Prénoms</span>
				<span sx={{
					fontWeight: 'normal',
					fontSize: '14px',
					lineHeight: '23px',
					display: 'flex',
					alignItems: 'center',
					textAlign: 'center',
					fontFeatureSettings: '\'salt\' on',
					color: '#425466',
					alignSelf: 'center',
				}}>Ville - Pays</span>
			</div>
			<div sx={{border: '1px solid #F3F5F8', margin: '24px 0px'}}/>
			<div sx={{padding: '16px 8px 8px', display: 'flex', margin: '24px 0px', justifyContent: 'space-around'}}>
				{
					stats.map(item => (
						<div sx={{display: 'flex', flexDirection: 'column'}}>
								<span sx={{
									fontWeight: 'bold',
									fontSize: '18px',
									lineHeight: '22px',
									display: 'flex',
									alignItems: 'center',
									textAlign: 'center',
									letterSpacing: '-0.005em',
									color: '#4C6FFF',
									alignSelf: 'center'
								}}>{item.value}</span>
							<span sx={{
								fontWeight: 'normal',
								fontSize: '12px',
								lineHeight: '162.52%',
								display: 'flex',
								alignItems: 'center',
								textAlign: 'center',
								color: '#425466',
								alignSelf: 'center'
							}}>{item.desc}</span>
						</div>
					))
				}
			</div>
		</div>
	)
}

const SettingsTab = () => {
	return (
		<div sx={{}}>
			settings
		</div>
	)
}

export const TABS = [
	{id: uuidv4(), text: 'Generals', component: GeneralsTab},
	{id: uuidv4(), text: 'Social Networks', component: SocialNetWorkTab},
	{id: uuidv4(), text: 'Settings', component: SettingsTab},
]

export default ({activeTab}) => {
	const tab = TABS.find(item => item.id === activeTab.id)
	
	return (
		<div>
			{ tab && tab.component ? React.createElement(tab.component, {}) : "Not found!" }
		</div>
	)
}
