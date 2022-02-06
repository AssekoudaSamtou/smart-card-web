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
					<TextInput style={{flexBasis: '45%'}} name="phone" value="Lome" setValue={undefined} label="Adresse" type="text"/>
					<TextInput style={{flexBasis: '45%'}} name="phone" value="Lome" setValue={undefined} label="Adresse" type="text"/>
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
	
	const defaultSocialNetworks = [
		{id: uuidv4(), name: 'twitter', link: 'https://twitter.com', Icon: (<svg width="24" height="24" viewBox="0 0 256 209" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M256 25.4503C246.58 29.6273 236.458 32.4503 225.834 33.7203C236.679 27.2203 245.006 16.9273 248.927 4.66327C238.618 10.7811 227.338 15.0915 215.576 17.4083C205.995 7.20127 192.346 0.822266 177.239 0.822266C148.233 0.822266 124.716 24.3383 124.716 53.3423C124.716 57.4593 125.181 61.4673 126.076 65.3123C82.426 63.1213 43.726 42.2123 17.821 10.4363C13.301 18.1933 10.711 27.2163 10.711 36.8403C10.711 55.0623 19.984 71.1373 34.076 80.5563C25.7355 80.2951 17.5785 78.0424 10.286 73.9863C10.283 74.2063 10.283 74.4263 10.283 74.6473C10.283 100.094 28.387 121.322 52.413 126.147C44.6789 128.251 36.5663 128.559 28.695 127.047C35.378 147.913 54.775 163.097 77.757 163.522C59.782 177.608 37.135 186.005 12.529 186.005C8.289 186.005 4.109 185.756 0 185.271C23.243 200.173 50.85 208.868 80.51 208.868C177.117 208.868 229.944 128.837 229.944 59.4333C229.944 57.1553 229.894 54.8903 229.792 52.6383C240.074 45.2051 248.949 35.9984 256 25.4503" fill="#55ACEE"/>
			</svg>)},
		{id: uuidv4(), name: 'linkedin', link: 'https://linkedin.com', Icon: (<svg width="24" height="24" viewBox="0 0 256 209" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M256 25.4503C246.58 29.6273 236.458 32.4503 225.834 33.7203C236.679 27.2203 245.006 16.9273 248.927 4.66327C238.618 10.7811 227.338 15.0915 215.576 17.4083C205.995 7.20127 192.346 0.822266 177.239 0.822266C148.233 0.822266 124.716 24.3383 124.716 53.3423C124.716 57.4593 125.181 61.4673 126.076 65.3123C82.426 63.1213 43.726 42.2123 17.821 10.4363C13.301 18.1933 10.711 27.2163 10.711 36.8403C10.711 55.0623 19.984 71.1373 34.076 80.5563C25.7355 80.2951 17.5785 78.0424 10.286 73.9863C10.283 74.2063 10.283 74.4263 10.283 74.6473C10.283 100.094 28.387 121.322 52.413 126.147C44.6789 128.251 36.5663 128.559 28.695 127.047C35.378 147.913 54.775 163.097 77.757 163.522C59.782 177.608 37.135 186.005 12.529 186.005C8.289 186.005 4.109 185.756 0 185.271C23.243 200.173 50.85 208.868 80.51 208.868C177.117 208.868 229.944 128.837 229.944 59.4333C229.944 57.1553 229.894 54.8903 229.792 52.6383C240.074 45.2051 248.949 35.9984 256 25.4503" fill="#55ACEE"/>
			</svg>)},
		{id: uuidv4(), name: 'facebook', link: 'https://facebook.com', Icon: (<svg width="24" height="24" viewBox="0 0 256 209" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M256 25.4503C246.58 29.6273 236.458 32.4503 225.834 33.7203C236.679 27.2203 245.006 16.9273 248.927 4.66327C238.618 10.7811 227.338 15.0915 215.576 17.4083C205.995 7.20127 192.346 0.822266 177.239 0.822266C148.233 0.822266 124.716 24.3383 124.716 53.3423C124.716 57.4593 125.181 61.4673 126.076 65.3123C82.426 63.1213 43.726 42.2123 17.821 10.4363C13.301 18.1933 10.711 27.2163 10.711 36.8403C10.711 55.0623 19.984 71.1373 34.076 80.5563C25.7355 80.2951 17.5785 78.0424 10.286 73.9863C10.283 74.2063 10.283 74.4263 10.283 74.6473C10.283 100.094 28.387 121.322 52.413 126.147C44.6789 128.251 36.5663 128.559 28.695 127.047C35.378 147.913 54.775 163.097 77.757 163.522C59.782 177.608 37.135 186.005 12.529 186.005C8.289 186.005 4.109 185.756 0 185.271C23.243 200.173 50.85 208.868 80.51 208.868C177.117 208.868 229.944 128.837 229.944 59.4333C229.944 57.1553 229.894 54.8903 229.792 52.6383C240.074 45.2051 248.949 35.9984 256 25.4503" fill="#55ACEE"/>
			</svg>)},
		{id: uuidv4(), name: 'instagram', link: 'https://instagram.com', Icon: (<svg width="24" height="24" viewBox="0 0 256 209" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M256 25.4503C246.58 29.6273 236.458 32.4503 225.834 33.7203C236.679 27.2203 245.006 16.9273 248.927 4.66327C238.618 10.7811 227.338 15.0915 215.576 17.4083C205.995 7.20127 192.346 0.822266 177.239 0.822266C148.233 0.822266 124.716 24.3383 124.716 53.3423C124.716 57.4593 125.181 61.4673 126.076 65.3123C82.426 63.1213 43.726 42.2123 17.821 10.4363C13.301 18.1933 10.711 27.2163 10.711 36.8403C10.711 55.0623 19.984 71.1373 34.076 80.5563C25.7355 80.2951 17.5785 78.0424 10.286 73.9863C10.283 74.2063 10.283 74.4263 10.283 74.6473C10.283 100.094 28.387 121.322 52.413 126.147C44.6789 128.251 36.5663 128.559 28.695 127.047C35.378 147.913 54.775 163.097 77.757 163.522C59.782 177.608 37.135 186.005 12.529 186.005C8.289 186.005 4.109 185.756 0 185.271C23.243 200.173 50.85 208.868 80.51 208.868C177.117 208.868 229.944 128.837 229.944 59.4333C229.944 57.1553 229.894 54.8903 229.792 52.6383C240.074 45.2051 248.949 35.9984 256 25.4503" fill="#55ACEE"/>
			</svg>)},
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
					defaultSocialNetworks.map((item, i) => (
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
								{item.Icon}
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
		<div>
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
