/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from "react"
import Image from "next/image"
import RoundedIcon from "../src/components/RoundedIcon"
import Button from "../src/components/Button"
import {PersonLineFill, UserIcon, GlobeIcon, SelectArrow, PlusIcon} from "../icons"
import Hero from "../src/images/Rounded Rectangle.png"
import { InstagramIcon, TwitterIcon, LinkedInIcon } from "./profile";
import lodash from 'lodash'
import {v4 as uuidv4} from "uuid";
import ButtonWithDropdown from "../src/components/ButtonWithDropdown";

const stats = [
	{title: 'Utilisateurs', value: '500.54', icon: UserIcon, trend: 13},
	{title: 'Contacts', value: '500', icon: PersonLineFill, trend: 13},
	{title: 'Réseaux sociaux', value: '70', icon: GlobeIcon, trend: 13},
	{title: 'Lectures', value: '800', icon: GlobeIcon, trend: 13},
]

export default () => {
	return (
		<div>
			{/*<div sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
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
			</div>*/}
			
			<div sx={{display: 'flex', p: '0rem 0 2rem', width: '96%', margin: 'auto'}}>
				<ButtonWithDropdown options={[
					{ id: uuidv4(), text: 'Jan 2022' },
					{ id: uuidv4(), text: 'Dec 2021' },
				]}>
					<Button color="neutral" rounded={'full'} icon={{ position: 'right', component: SelectArrow, size: 12 }}>Ce mois</Button>
				</ButtonWithDropdown>
				<Button style={{alignSelf: 'center', ml: '1rem'}} color="primary" rounded={'full'} icon={{ position: 'center', component: PlusIcon, size: 12 }}/>
			</div>
			
			<div sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start'}}>
				{
					Array(8).fill(1).map((_, i) => (
						<div key={ i } sx={{variant: 'containers.card', padding: '8px', margin: '0 1rem 2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'stretch', flexBasis: '300px'}}>
							<div sx={{position: 'relative'}}>
								<Image sx={{borderRadius: '16px'}} src={Hero}/>
								
								{/*<Button
									style={{
										position: 'absolute',
										left: 'calc(100% - 52px)',
										top: '16px'
									}}
									size={'default'}
									color="neutral"
									rounded={'full'}
									icon={{ position: 'center', component: lodash.sample([ TwitterIcon, InstagramIcon, LinkedInIcon ]) }}
								/>*/}
							</div>
							<div sx={{padding: '0 8px'}}>
								<div sx={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
									<span sx={{variant: 'headings.h5'}}>Titre du poste</span>
									<span sx={{fontSize: '14px', lineHeight: '23px', color: '#718096'}}>Monday Jan 20 , 2020</span>
								</div>
								
								<p sx={{fontSize: '14px', lineHeight: '23px', color: '#425466'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut platea... </p>
								
								<div sx={{display: 'flex'}}>
									<Button size={'default'} color="secondary" rounded={'full'} icon={{ position: 'left', component: GlobeIcon }}>Read more</Button>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}
