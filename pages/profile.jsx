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
				variant: 'containers.card',
				height: '7rem',
				display: 'flex',
				justifyContent: 'space-between'
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
		<div sx={{display: 'flex'}}>
			<div sx={{
				variant: 'containers.card',
				padding: '8px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'stretch',
				flexBasis: '343px',
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
			
			<div sx={{
				variant: 'containers.card',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'stretch',
				flexGrow: '2',
				m: '0 2rem',
				alignSelf: 'flex-start',
				'& .item:nth-last-child(1)': {
					borderBottom: 'none'
				}
			}}>
				{
					Array(3).fill(1).map((item, i) => (
						<div className='item' sx={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', p: '1rem 0',}}>
							<span sx={{
								p: '10px',
								display: 'flex',
								alignItems: 'center',
								bg: '#FFFFFF',
								boxShadow: '0px 0px 1px rgba(12, 26, 75, 0.2), 0px 1px 3px rgba(50, 50, 71, 0.1)',
								borderRadius: '100%',
								cursor: 'pointer',
								justifyContent: 'center',
								m: '0 20px 0 0'
							}}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_4946_23949)">
										<path d="M5.54676 14.8044L4.73983 17.8167L1.79054 17.8791C0.909128 16.2443 0.40918 14.3739 0.40918 12.3862C0.40918 10.4642 0.876619 8.65163 1.70519 7.05566H1.70582L4.33152 7.53705L5.48174 10.147C5.241 10.8488 5.10979 11.6022 5.10979 12.3862C5.10988 13.2371 5.264 14.0523 5.54676 14.8044Z" fill="#FBBB00"/>
										<path d="M23.3884 10.2207C23.5216 10.9219 23.591 11.646 23.591 12.386C23.591 13.2159 23.5037 14.0253 23.3375 14.8061C22.7733 17.4631 21.2989 19.7832 19.2565 21.425L19.2559 21.4244L15.9487 21.2557L15.4806 18.3337C16.8358 17.5389 17.8949 16.2951 18.4528 14.8061H12.2549V10.2207H18.5433H23.3884Z" fill="#518EF8"/>
										<path d="M19.2559 21.4239L19.2565 21.4245C17.2701 23.0211 14.7469 23.9764 12.0001 23.9764C7.58598 23.9764 3.74826 21.5092 1.79053 17.8785L5.54675 14.8037C6.5256 17.4161 9.04567 19.2758 12.0001 19.2758C13.27 19.2758 14.4597 18.9325 15.4805 18.3332L19.2559 21.4239Z" fill="#28B446"/>
										<path d="M19.3984 3.46337L15.6435 6.53749C14.5869 5.87708 13.338 5.49558 12 5.49558C8.97869 5.49558 6.41148 7.44054 5.48168 10.1466L1.70571 7.05528H1.70508C3.63415 3.336 7.52027 0.794922 12 0.794922C14.8124 0.794922 17.391 1.79672 19.3984 3.46337Z" fill="#F14336"/>
									</g>
									<defs>
										<clipPath id="clip0_4946_23949">
											<rect width="23.1818" height="23.1818" fill="white" transform="translate(0.40918 0.794922)"/>
										</clipPath>
									</defs>
								</svg>
							</span>
							<span sx={{alignSelf: 'center'}}>Non défini</span>
							<button sx={{variant: 'buttons.light', marginLeft: '1rem', alignSelf: 'center'}}>Setup</button>
						</div>
					))
				}
			</div>
			
			<div sx={{
				variant: 'containers.card',
				padding: '8px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'stretch',
				flexBasis: '343px',
			}}/>
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
