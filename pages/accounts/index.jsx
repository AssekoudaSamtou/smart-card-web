/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from 'next/router'
import Button from "../../src/components/Button"
import {Pencil, PlusIcon, TrashFill} from "../../icons"
import Avatar1 from "../../src/images/image 5.png"
import Avatar2 from "../../src/images/image 6.png"
import Avatar3 from "../../src/images/image 7.png"
import Avatar4 from "../../src/images/image 10.png"
import Avatar5 from "../../src/images/image 12.png"
import { InstagramIcon, TwitterIcon, LinkedInIcon } from "../profile"
import lodash from 'lodash'
import {v4 as uuidv4} from "uuid"
import Modal from "../../src/components/Modal";

const defaultSocialNetworks = [
	{id: uuidv4(), name: 'tout'},
	{id: uuidv4(), name: 'twitter', Icon: TwitterIcon},
	{id: uuidv4(), name: 'linkedin', Icon: LinkedInIcon},
	{id: uuidv4(), name: 'facebook', Icon: TwitterIcon},
	{id: uuidv4(), name: 'instagram', Icon: InstagramIcon},
]
export default () => {
	const [selectedAccount, setSelectedAccount] = useState(defaultSocialNetworks[0])
	const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false)
	
	const router = useRouter()
	
	return (
		<div>
			<div sx={{display: 'flex', justifyContent: 'center', margin: '0 0 2rem 0'}}>
				{
					defaultSocialNetworks.map((item, i) => (
						<Button
							onClick={ () => setSelectedAccount(item) }
							key={ i } size={'small'} color={ item.id === selectedAccount.id ? 'primary' : 'secondary' } rounded={'full'} style={{ margin: '0 1rem 0 0', textTransform: 'capitalize' }}
							// icon={item.Icon ? { position: 'left', component: item.Icon, width: '12px', height: '12px' } : undefined }
						>{ item.name }</Button>
					))
				}
				
			</div>
			
			<div sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start'}}>
				<div sx={{variant: 'containers.card', padding: '8px', margin: '0 2rem 2rem 0', display: 'flex', flexDirection: 'row', justifyContent: 'center', flexBasis: '200px', alignItems: 'center'}}>
					<Button
						style={{ border: '2px dashed #3d6892' }}
						onClick={ () => router.push('/create') }
						size={'default'}
						color="neutral"
						rounded={'full'}
						icon={{ position: 'center', component: PlusIcon }}
					/>
				</div>
				{
					Array(8).fill(1).map((_, i) => (
						<div key={i} sx={{
							variant: 'containers.card',
							padding: '8px',
							margin: '0 2rem 2rem 0',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'stretch',
							flexBasis: '200px',
							'&:hover .action-btn': {
								visibility: 'visible'
							},
							'& .action-btn': {
								visibility: 'hidden'
							},
						}}>
							<div sx={{position: 'relative'}}>
								<Image sx={{borderRadius: '16px'}} src={ lodash.sample([ Avatar1, Avatar2, Avatar3, Avatar4, Avatar5 ]) }/>
								
								<Button
									style={{
										position: 'absolute',
										left: 'calc(100% - 52px)',
										top: '16px'
									}}
									size={'default'}
									color="neutral"
									rounded={'full'}
									icon={{ position: 'center', component: lodash.sample([ TwitterIcon, InstagramIcon, LinkedInIcon ]) }}
								/>
								<Button className="action-btn" onClick={ () => setShowDeleteConfirmModal(true) }
									style={{
										position: 'absolute',
										left: '8px',
										top: 'calc(100% - 50px)'
									}}
									size={'default'} color="danger" rounded={'full'}
									icon={{ position: 'center', component: TrashFill }}
								/>
								<Button
									className="action-btn"
									onClick={ () => router.push(`/accounts/${ i }`) }
									style={{
										position: 'absolute',
										left: '50px',
										top: 'calc(100% - 50px)'
									}}
									size={'default'} color="warning" rounded={'full'}
									icon={{ position: 'center', component: Pencil }}
								/>
							</div>
							<div sx={{padding: '0 8px'}}>
								<div sx={{display: 'flex', justifyContent: 'center', alignItems: 'stretch'}}>
									<span sx={{variant: 'headings.h5'}}>John Doe</span>
								</div>
							</div>
						</div>
					))
				}
			</div>
			
			{
				showDeleteConfirmModal ? (
					<Modal handleClose={ undefined }>
						<div sx={{width: '500px'}}>
							<span sx={{variant: 'headings.h5'}}>Voulez-vous réelement supprimer ce compte ?</span>
							
							<div sx={{display: 'flex', justifyContent: 'end', alignItems: 'flex-end', height: '150px'}}>
								<Button className="action-btn" style={{ margin: '0 1rem 0 0'}} color="danger">Supprimer</Button>
								<Button className="action-btn" color="secondary" rounded={'default'} onClick={ () => setShowDeleteConfirmModal(false) }>Annuler</Button>
							</div>
						</div>
					</Modal>
				) : ''
			}
		</div>
	)
}
