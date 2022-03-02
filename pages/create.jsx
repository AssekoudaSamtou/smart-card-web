/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, { useState } from "react"
import Image from "next/image"
import {PlusIcon, Instagram, Facebook, Twitter, LinkedIn, Check, TrashFill, Pencil, XCircleIcon} from "../icons"
import Button from "../src/components/Button"
import Avatar1 from "../src/images/image 5.png"
import Avatar3 from "../src/images/image 7.png"
import Avatar4 from "../src/images/image 10.png"
import Avatar5 from "../src/images/image 12.png"
import SearchInput from "../src/components/searchInput"
import theme from "../theme"
import lodash from "lodash"
import Avatar2 from "../src/images/image 6.png"


const tmp = [
	{id: 1, name: 'ABALONE Jackson', Icon: Instagram, avatar: Avatar5},
	{id: 2, name: 'Kevin Hart', Icon: Facebook, avatar: Avatar4},
	{id: 3, name: 'Nelson Eddy', Icon: Twitter, avatar: Avatar3},
	{id: 4, name: 'Bravo Celestin', Icon: LinkedIn, avatar: Avatar1},
]
export default () => {
	const [accounts, setAccounts] = useState(tmp)
	const [filterText, setFilterText] = useState('')
	const [files, setFiles] = useState([])
	
	const addFile = async (file) => {
		setFiles(prevState => {
			const files = Array.from(prevState)
			files.push(file)
			return files
		})
		await loadDataURL(file)
	}
	
	const deleteFile = async (file) => {
		setFiles(prevState => {
			let files = Array.from(prevState)
			const index = files.findIndex(item => item === file)
			if (index !== -1) {
				files = [...files.slice(0, index), ...files.slice(index + 1, files.length)]
			}
			return files
		})
	}
	
	const loadDataURL = async (file) => {
		const reader = new FileReader()
		reader.addEventListener("load", () => setFiles(prevState => {
			const files = Array.from(prevState)
			const index = files.findIndex(item => item === file)
			files[index].dataURL = reader.result
			return files
		}), false)
		
		if (file)
			await reader.readAsDataURL(file)
	}
	
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
					accounts
						.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()))
						.map((item, i) => (
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
								color: !item.selected ? 'success' : 'primary',
							},
						}} onClick={ () => setAccounts((prevState) => {
							const data = Array.from(prevState)
							const index = data.findIndex(i => i.id === item.id)
							data[index] = {...data[index], selected: !Boolean(data[index].selected)}
							return data
						})}>
							<div sx={{display: 'flex', alignItems: 'center'}}>
								<div sx={{width: '40px', height: '40px', position: 'relative'}}>
									<Image
										sx={{ borderRadius: '100%', border: '3px solid #FFFFFF' }}
										src={ item.avatar }
									/>
									<span sx={{
										position: 'absolute', width: '21px', height: '21px', left: 'calc(50% - 19px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
										top: 'calc(100% - 13px)', backgroundColor: `#16192C`, borderRadius: '100%',
									}}>
										{ React.createElement(item.Icon, { fill: 'white', sx: {width: 14, height: 14} }) }
									</span>
									
									{ item.selected ? (
										<span sx={{
											position: 'absolute', width: '15px', height: '15px', left: 'calc(100% - 9px)',
											top: 'calc(3px)', backgroundColor: `#DEFFEE`, borderRadius: '100%',display: 'flex',
											justifyContent: 'center',
											alignItems: 'center'
										}}>
											{ React.createElement(Check, { fill: '#66CB9F', sx: {width: 9, height: 6} }) }
										</span>
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
					
					
					<div sx={{ padding: '8px', margin: '0', display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', flexWrap: 'wrap' }}>
						{
							files.map((item, i) => (
								<div key={i} sx={{
									padding: '8px',
									backgroundImage: `url(${ item.dataURL })`,
									height: '150px',
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									margin: '0 1rem 1rem 0',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'stretch',
									flexBasis: '150px',
									'&:hover .action-btn': {
										visibility: 'visible'
									},
									'& .action-btn': {
										visibility: 'hidden'
									},
								}}>
									<div sx={{position: 'relative', width: '100%', height: '100%'}}>
										<Button
											className="action-btn"
											onClick={ () => deleteFile(item) }
							        style={{
								        position: 'absolute',
								        left: '8px',
								        top: 'calc(100% - 35px)',
								        padding: '3px',
							        }}
							        size={'default'} color="danger" rounded={'full'}
							        icon={{ position: 'center', component: XCircleIcon }}
										/>
										<Button
											className="action-btn"
											onClick={ () => undefined }
											style={{
												position: 'absolute',
												left: '50px',
												top: 'calc(100% - 35px)',
												padding: '3px',
												minWidth: '80px',
											}}
											size={'small'} color="secondary" rounded={'full'}
											icon={{ position: 'left', component: Pencil }}
										>Changer</Button>
									</div>
								</div>
							))
						}
					</div>
					
					<input accept="image/*, video/*, video/mp4" type="file" sx={{display: 'none'}} onChange={ event => event.target.files.length && addFile(event.target.files[0]) }/>
					<Button onClick={ event => event.target.previousElementSibling.click() } color={'secondary'} style={{display: 'block', width: '100%'}}>Cliquez, glissez et déposez les fichiers ici</Button>
				</div>
				
				<div sx={{display: 'flex', justifyContent: 'end', margin: '2rem 0 0 0'}}>
					<Button onClick={ undefined } color={'primary'} style={{}}>Poster</Button>
				</div>
			</section>
		</div>
	)
}
