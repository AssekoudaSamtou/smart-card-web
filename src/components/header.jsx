/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Tabs from "./tabs"
import { PlusIcon } from "../../icons"
import Button from "./Button"
import React from "react"

const Header = ({tabs}) => {
	const router = useRouter()
	
	return (
		<header sx={{
			bg: '#FFF',
			position: 'fixed',
			width: 'calc(100vw - 250px)',
			borderColor: 'primary',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'stretch',
			padding: tabs && tabs.items ? '30px 30px 0' : '30px',
			borderBottom: '1px solid #EDF2F7',
			zIndex: '1'
		}}>
			<div sx={{display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
				{/*<span sx={{fontWeight: 'bold', fontSize: '28px', color: '#27272E'}}>Tableau de bord</span>*/}
				<nav sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
					<Button onClick={ () => router.push('/create') } size={'default'} color="primary" icon={{position: 'left', component: PlusIcon, size: 12}}>Céer</Button>
				</nav>
			</div>
			
			{
				tabs && tabs.items ? (<Tabs items={tabs.items} active={tabs.active || tabs.items[0]} onItemClickHandler={tabs.onClickHandler}/>) : ''
			}
		</header>
	)
}

export default Header
