/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, { useState } from "react"
import Image from "next/image"
import {v4 as uuidv4} from "uuid"
import {PlusIcon} from "../icons";
import Button from "../src/components/Button";
import {InstagramIcon, LinkedInIcon, TwitterIcon} from "./profile";
import Avatar1 from "../src/images/image 5.png"
import Avatar3 from "../src/images/image 7.png"
import Avatar4 from "../src/images/image 10.png"
import Avatar5 from "../src/images/image 12.png"
import SearchInput from "../src/components/searchInput"
import theme from "../theme"


const tmp = [
	{id: uuidv4(), name: 'ABALONE Jackson', Icon: React.createElement(TwitterIcon), avatar: Avatar5},
	{id: uuidv4(), name: 'Kevin Hart', Icon: React.createElement(LinkedInIcon), avatar: Avatar4},
	{id: uuidv4(), name: 'Nelson Eddy', Icon: React.createElement(TwitterIcon), avatar: Avatar3},
	{id: uuidv4(), name: 'Bravo Celestin', Icon: React.createElement(InstagramIcon), avatar: Avatar1},
]
export default () => {
	const [accounts, setAccounts] = useState(tmp)
	const [filterText, setFilterText] = useState('')
	
	console.log(accounts)
	
	return (
		<div sx={{ display: 'flex' }}>
			<section sx={{
				variant: 'containers.card', alignItems: 'stretch', m: '0 2rem', alignSelf: 'flex-start',
				'& .item:nth-last-child(1)': {
					borderBottom: 'none'
				}
			}}>
				<div sx={{display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
					<span sx={{variant: 'link', display: 'flex', alignItems: 'center'}}>
						<PlusIcon fill={'#4C6FFF'} sx={{width: '12px', height: '12px', margin: '0 5px 0 0'}}/>
						Ajouter un compte
					</span>
				</div>
				
				<SearchInput name={'search'} value={ filterText } setValue={ value => setFilterText(value) } placeholder="Rechercher un compte..." />
				
				{
					accounts.map((item, i) => (
						<div key={ i } className='item' sx={{
							display: 'flex',
							justifyContent: 'space-between',
							borderBottom: '1px solid #E2E8F0',
							p: '.5rem 0',
							color: item.selected ? 'primary' : 'unset',
							opacity: item.selected ? 1 : .5,
							cursor: 'pointer',
							'&:hover': {
								opacity: 1,
								color: 'primary',
							},
						}} onClick={ () => setAccounts((prevState) => {
							const index = prevState.findIndex(i => i.id === item.id)
							prevState[index] = {...prevState[index], selected: !Boolean(prevState[index].selected)}
							return [...prevState]
						})}>
							<div sx={{display: 'flex', alignItems: 'center'}}>
								<div sx={{width: '40px', height: '40px', position: 'relative'}}>
									<Image
										sx={{ borderRadius: '100%', border: '3px solid #FFFFFF' }}
										src={ item.avatar }
									/>
									<span sx={{
										position: 'absolute', width: '15.4px', height: '15.4px', left: 'calc(50% - 19px)',
										top: 'calc(100% - 13px)', backgroundColor: `#30E398`, borderRadius: '100%', border: '3px solid #FFFFFF',
									}}/>
									
									{ item.selected ? (
										<span sx={{
											position: 'absolute', width: '15.4px', height: '15.4px', left: 'calc(50% - 19px)',
											top: 'calc(13px)', backgroundColor: `#F16063`, borderRadius: '100%', border: '3px solid #FFFFFF',
										}}/>
									) : '' }
									
								</div>
								<span sx={{fontWeight: 600, margin: '0 0 0 1rem', fontSize: '13px' }}>{ item.name }</span>
							</div>
						</div>
					))
				}
			</section>
			
			<section sx={{variant: 'containers.card', flexGrow: '1'}}>
				<div sx={{borderRadius: '4px', border: `2px solid ${ theme.colors.secondary }`, padding: '10px'}}>
					<textarea sx={{
						display: 'block',
						fontFamily: 'Inter', padding: '10px',
						width: '100%', height: '200px',
						border: 'none', backgroundColor: 'transparent',
						resize: 'none', outline: 'none',
					}} placeholder="Ecrivez du text..." />
					
					<input type="file" sx={{display: 'none'}}/>
					<Button onClick={ event => event.target.previousElementSibling.click() } color={'secondary'} style={{display: 'block', width: '100%'}}>Click, Drag & Drop files here</Button>
				</div>
				
				<div sx={{display: 'flex', justifyContent: 'end', margin: '2rem 0 0 0'}}>
					<Button onClick={ undefined } color={'primary'} style={{}}>Poster</Button>
				</div>
			</section>
		</div>
	)
}
