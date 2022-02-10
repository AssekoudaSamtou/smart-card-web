/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from "react"
import Image from "next/image"
import RoundedIcon from "../src/components/RoundedIcon"
import {PersonLineFill, UserIcon, GlobeIcon} from "../icons"
import Hero from "../src/images/Rounded Rectangle.png"

const stats = [
	{title: 'Utilisateurs', value: '500.54', icon: UserIcon, trend: 13},
	{title: 'Contacts', value: '500', icon: PersonLineFill, trend: 13},
	{title: 'Réseaux sociaux', value: '70', icon: GlobeIcon, trend: 13},
	{title: 'Lectures', value: '800', icon: GlobeIcon, trend: 13},
]

export default () => {
	return (
		<div>
			<div sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
				{
					stats.map((item, i) => (
						<div key={i} sx={{variant: 'containers.card', flexBasis: '23%', px: 24, mb: 24}}>
							<div sx={{display: 'flex', justifyContent: 'space-between'}}>
								<div sx={{display: 'flex', flexDirection: 'column'}}>
									<span sx={{fontSize: '0.875rem', fontWeight: 500}}>{ item.title }</span>
									<span sx={{fontWeight: 600, color: '#16192c', fontSize: '1.375rem', mt: '8px'}}>{ item.value }</span>
								</div>
								<RoundedIcon roundColor={'#4C6FFF'}>
									{ React.createElement(item.icon, { fill: '#FFFFFF' }) }
								</RoundedIcon>
							</div>
							<div sx={{display: 'flex', alignItems: 'center', mt: '8px'}}>
								<span sx={{color: '#00cc88', lineHeight: '1rem', marginRight: '.5rem', backgroundColor: '#ccf5e7', borderRadius: '.375rem', display: 'inline-block',
									padding: '.2rem .6rem',
									fontSize: '0.75em',
									fontWeight: '600',
									textAlign: 'center',
									whiteSpace: 'nowrap',
									verticalAlign: 'baseline'}}>
									<svg width="10" height="10" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M5.25 14.0001C5.52614 14.0001 5.75 13.7763 5.75 13.5001V1.70723L8.89645 4.85368C9.09171 5.04894 9.40829 5.04894 9.60355 4.85368C9.79882 4.65841 9.79882 4.34183 9.60355 4.14657L5.60355 0.146568C5.40829 -0.0486937 5.09171 -0.0486937 4.89645 0.146568L0.896447 4.14657C0.701184 4.34183 0.701184 4.65841 0.896447 4.85368C1.09171 5.04894 1.40829 5.04894 1.60355 4.85368L4.75 1.70723V13.5001C4.75 13.7763 4.97386 14.0001 5.25 14.0001Z" fill={"#00cc88"}/>
									</svg>
									{ item.trend }%
								</span>
								<span sx={{fontSize: '0.75rem'}}>Depuis le mois dernier</span>
							</div>
						</div>
					))
				}
			</div>
			
			
			<div sx={{display: 'flex'}}>
				<div sx={{
					variant: 'containers.card',
					padding: '8px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'stretch',
					flexBasis: '343px',
				}}>
					<div sx={{position: 'relative'}}>
						<Image sx={{borderRadius: '16px'}} src={Hero}/>
					</div>
					<div sx={{display: 'flex', flexDirection: 'column'}}>
						<span sx={{
						variant: 'headings.h5',
						// alignItems: 'center',
						// textAlign: 'center',
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
			</div>
			
		</div>
	)
}
