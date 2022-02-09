/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Image from 'next/image'
import React from 'react'
import Hero from '../src/images/Image.png'
import { v4 as uuidv4 } from 'uuid'
import TextInput from "../src/components/textInput";
import SelectInput from "../src/components/selectInput";


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
					<SelectInput
						style={{flexBasis: '45%'}}
						name="phone" value="Lome"
						setValue={undefined}
						label="Adresse" type="text"
						options={[
							{ id: uuidv4(), text: 'First option' },
							{ id: uuidv4(), text: 'Second option' },
							{ id: uuidv4(), text: 'Third option' },
						]}
					/>
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
		{id: uuidv4(), name: 'linkedin', link: 'https://linkedin.com', Icon: (<svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M87.5 77.0833C87.5 82.8375 82.8375 87.5 77.0833 87.5H22.9167C17.1646 87.5 12.5 82.8375 12.5 77.0833V22.9167C12.5 17.1625 17.1646 12.5 22.9167 12.5H77.0833C82.8375 12.5 87.5 17.1625 87.5 22.9167V77.0833Z" fill="#0078D4"/>
					<path opacity="0.05" d="M62.5001 77.0833V56.0437C62.5001 52.525 60.7938 50.4229 57.9334 50.4229C56.2355 50.4229 54.9876 51.3792 54.2272 53.2646C54.1917 53.3979 54.1417 53.9417 54.1626 55.5854L54.1667 77.0833H39.5834V37.5H54.1667V39.7104C56.2959 38.2417 58.9063 37.5 61.9542 37.5C71.4272 37.5 77.0813 43.9438 77.0813 54.7375L77.0834 77.0833H62.5001ZM22.9167 77.0833V37.5H30.1188C25.9459 37.5 22.9167 34.4333 22.9167 30.2063C22.9167 25.9833 25.9959 22.9167 30.2376 22.9167C34.4292 22.9167 37.4147 25.8979 37.5001 30.1646C37.5001 34.4229 34.4188 37.5 30.1772 37.5H37.5001V77.0833H22.9167Z" fill="black"/>
					<path opacity="0.07" d="M63.5416 76.0417V56.0437C63.5416 51.9333 61.3937 49.3812 57.9333 49.3812C55.2353 49.3812 53.902 51.2812 53.2603 52.875C53.0895 53.2896 53.1124 54.9354 53.1207 55.6375L53.1249 76.0417H40.6249V38.5417H53.1249V41.9542C54.7812 40.2396 57.4478 38.5417 61.9541 38.5417C70.7728 38.5417 76.0395 44.5958 76.0395 54.7375L76.0416 76.0417H63.5416ZM23.9583 76.0417V38.5417H36.4583V76.0417H23.9583ZM30.1187 36.4583C26.5499 36.4583 23.9583 33.8292 23.9583 30.2062C23.9583 26.5854 26.5999 23.9583 30.2374 23.9583C33.8291 23.9583 36.3853 26.5188 36.4583 30.1854C36.4583 33.8292 33.8166 36.4583 30.177 36.4583H30.1187Z" fill="black"/>
					<path d="M25 39.5833H35.4167V75H25V39.5833ZM30.1771 35.4167H30.1187C27.0104 35.4167 25 33.1 25 30.2062C25 27.25 27.0729 25 30.2375 25C33.4062 25 35.3583 27.25 35.4167 30.2062C35.4167 33.0979 33.4062 35.4167 30.1771 35.4167ZM75 75H64.5833V56.0437C64.5833 51.4646 62.0312 48.3396 57.9333 48.3396C54.8062 48.3396 53.1146 50.4479 52.2937 52.4854C51.9937 53.2146 52.0833 55.2312 52.0833 56.25V75H41.6667V39.5833H52.0833V45.0333C53.5854 42.7083 55.9375 39.5833 61.9542 39.5833C69.4083 39.5833 74.9979 44.2708 74.9979 54.7375L75 75Z" fill="white"/>
				</svg>)},
		{id: uuidv4(), name: 'facebook', link: 'https://facebook.com', Icon: (<svg width="24" height="24" viewBox="0 0 256 209" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M256 25.4503C246.58 29.6273 236.458 32.4503 225.834 33.7203C236.679 27.2203 245.006 16.9273 248.927 4.66327C238.618 10.7811 227.338 15.0915 215.576 17.4083C205.995 7.20127 192.346 0.822266 177.239 0.822266C148.233 0.822266 124.716 24.3383 124.716 53.3423C124.716 57.4593 125.181 61.4673 126.076 65.3123C82.426 63.1213 43.726 42.2123 17.821 10.4363C13.301 18.1933 10.711 27.2163 10.711 36.8403C10.711 55.0623 19.984 71.1373 34.076 80.5563C25.7355 80.2951 17.5785 78.0424 10.286 73.9863C10.283 74.2063 10.283 74.4263 10.283 74.6473C10.283 100.094 28.387 121.322 52.413 126.147C44.6789 128.251 36.5663 128.559 28.695 127.047C35.378 147.913 54.775 163.097 77.757 163.522C59.782 177.608 37.135 186.005 12.529 186.005C8.289 186.005 4.109 185.756 0 185.271C23.243 200.173 50.85 208.868 80.51 208.868C177.117 208.868 229.944 128.837 229.944 59.4333C229.944 57.1553 229.894 54.8903 229.792 52.6383C240.074 45.2051 248.949 35.9984 256 25.4503" fill="#55ACEE"/>
			</svg>)},
		{id: uuidv4(), name: 'instagram', link: 'https://instagram.com', Icon: (<svg width="24" height="24" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M66 85.5H30C19.248 85.5 10.5 76.752 10.5 66V30C10.5 19.248 19.248 10.5 30 10.5H66C76.752 10.5 85.5 19.248 85.5 30V66C85.5 76.752 76.752 85.5 66 85.5ZM30 13.5C20.9025 13.5 13.5 20.9025 13.5 30V66C13.5 75.0975 20.9025 82.5 30 82.5H66C75.0975 82.5 82.5 75.0975 82.5 66V30C82.5 20.9025 75.0975 13.5 66 13.5H30Z" fill="url(#paint0_linear_5114_29217)"/>
					<path d="M48 67.5C37.248 67.5 28.5 58.752 28.5 48C28.5 37.248 37.248 28.5 48 28.5C58.752 28.5 67.5 37.248 67.5 48C67.5 58.752 58.752 67.5 48 67.5ZM48 34.5C40.557 34.5 34.5 40.557 34.5 48C34.5 55.4445 40.557 61.5 48 61.5C55.4445 61.5 61.5 55.4445 61.5 48C61.5 40.557 55.4445 34.5 48 34.5Z" fill="url(#paint1_linear_5114_29217)"/>
					<path d="M69 22.5C67.8065 22.5 66.6619 22.9741 65.818 23.818C64.9741 24.6619 64.5 25.8065 64.5 27C64.5 28.1935 64.9741 29.3381 65.818 30.182C66.6619 31.0259 67.8065 31.5 69 31.5C70.1935 31.5 71.3381 31.0259 72.182 30.182C73.0259 29.3381 73.5 28.1935 73.5 27C73.5 25.8065 73.0259 24.6619 72.182 23.818C71.3381 22.9741 70.1935 22.5 69 22.5Z" fill="url(#paint2_linear_5114_29217)"/>
					<defs>
						<linearGradient id="paint0_linear_5114_29217" x1="48" y1="10.0005" x2="48" y2="86.808" gradientUnits="userSpaceOnUse">
							<stop stopColor="#1A6DFF"/>
							<stop offset="1" stopColor="#C822FF"/>
						</linearGradient>
						<linearGradient id="paint1_linear_5114_29217" x1="48" y1="27.2505" x2="48" y2="68.5185" gradientUnits="userSpaceOnUse">
							<stop stopColor="#6DC7FF"/>
							<stop offset="1" stopColor="#E6ABFF"/>
						</linearGradient>
						<linearGradient id="paint2_linear_5114_29217" x1="69" y1="19.125" x2="69" y2="34.5735" gradientUnits="userSpaceOnUse">
							<stop stopColor="#6DC7FF"/>
							<stop offset="1" stopColor="#E6ABFF"/>
						</linearGradient>
					</defs>
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
				flexGrow: '3',
				m: '0 2rem',
				alignSelf: 'flex-start',
				'& .item:nth-last-child(1)': {
					borderBottom: 'none'
				}
			}}>
				{
					defaultSocialNetworks.map((item, i) => (
						<div className='item' sx={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', p: '1rem 0',}}>
							<div sx={{display: 'flex', alignItems: 'center'}}>
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
								<span sx={{fontWeight: 600, }}>{ item.name }</span>
							</div>
							
							<span sx={{alignSelf: 'center', fontWeight: '300', fontSize: '.7vmax'}}>Non défini</span>
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
