/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from 'next/router'
import Button from "../../src/components/Button"
import { InstagramIcon, TwitterIcon, LinkedInIcon } from "../profile"
import { TrashFill, Gear } from "../../icons/index"
import {v4 as uuidv4} from "uuid"
import Modal from "../../src/components/Modal"
import Avatar from "../../src/images/image 5.png"


export default () => {
	
	const router = useRouter()
	console.log(router.query)
	return (
		<div sx={{display: 'flex'}}>
			<section sx={{ variant: 'containers.card', padding: '8px', display: 'flex', alignItems: 'stretch', flexBasis: '300px', position: 'relative' }}>
				<div sx={{position: 'relative', height: '180px'}}>
					<span sx={{borderRadius: '16px', display: 'block', height: '125px', background: '#3B5999'}}/>
					<div sx={{
						position: 'absolute',
						width: '82px',
						height: '82px',
						left: 'calc(50% - 34.2px)',
						top: '100px',
						backgroundImage: `url(${ encodeURI(Avatar.src) })`,
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
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
				<div sx={{display: 'flex', flexDirection: 'column', margin: '10px 0 0 0'}}>
					<span sx={{ variant: 'headings.h5', justifyContent: 'center' }}>@pseudo</span>
					{/*<span sx={{ variant: 'text.sm', justifyContent: 'center' }}>Ville - Pays</span>*/}
				</div>
				
				<div sx={{variant: 'containers.dropdown', position: 'unset', width: '100%', boxShadow: 'unset', p: '14px 0'}}>
					{
						Array(5).fill(1).map((_, i) => (
							<div onClick={ undefined } className="dropdown-item">
								<Gear fill={'#B5B5BD'}/>
								<span>Menu item</span>
							</div>
						))
					}
				</div>
			</section>
			
			<section sx={{variant: 'containers.card', flexGrow: '1', m: '0 0 0 2rem'}}>
			
			</section>
		</div>
	)
}
