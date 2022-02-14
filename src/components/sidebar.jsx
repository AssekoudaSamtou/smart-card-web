/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from "react"
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'
import Logo from '../images/logo.png'
import theme from '../../theme'
import { ChatIcon, LogoutIcon, UserIcon } from '../../icons/index'

const NavItem = ({text, active, icon, badge, href, onClick}) => {
	const textStyle = {fontSize: '14px', flexBasis: '50%', marginRight: '10px', fontWeight: '600', color: 'inherit', textDecoration: 'none'}
	
	return (
		<Link href={href || '#'} as={href || '#'}>
			<div onClick={onClick} sx={{
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				color: active ? 'primary' : '#425466',
				padding: '17px 22px 17px 0',
				cursor: 'pointer',
				
				'&:hover': {
					color: '#495392',
					backgroundColor: '#f5f9fc',
				}
			}}>
				<span sx={{
				width: '2px',
				height: '24px',
				backgroundColor: '#4C6FFF',
				marginRight: '22px',
				visibility: active ? 'visible' : 'hidden'
			}}/>
				{ React.createElement(icon, { fill: active ? theme.colors.primary : '#425466', sx: {marginRight: '20px'} }) }
				
				{ href ? (<a sx={textStyle} href={href}>{ text }</a>) : (<span sx={textStyle}>{ text }</span>)}
				
				{ badge && (<Badge text={badge} background={'#E1E8FF'}/>) }
			</div>
		</Link>
	)
}

const Badge = ({text, background, color}) => (
	<span sx={{borderRadius: '100px', width: '28px', height: '19px', background: background, color: color || 'inherit', fontWeight: 'bold', fontSize: '12px', lineHeight: '19px', textAlign: 'center'}}>{text}</span>
)

const navItems = [
	// {id: uuidv4(), text: 'Tableau de bord', icon: ChatIcon, href: '/'},
	// {id: uuidv4(), text: 'Utilisateurs', icon: ChatIcon, badge: 10, href: '/table'},
	{id: uuidv4(), text: 'Publications', icon: ChatIcon, badge: 6, href: '/'},
	{id: uuidv4(), text: 'Comptes', icon: ChatIcon, badge: 10, href: '/accounts'},
	{id: uuidv4(), text: 'Mon Profil', icon: UserIcon, href: '/profile'},
	{id: uuidv4(), text: 'Déconnexion', icon: LogoutIcon, onClick: () => location.replace('/auth/login')},
]

const Sidebar = () => {
	const router = useRouter()
	const [activeItem, setActiveItem] = useState(navItems.find(item => item.href === router.pathname) || navItems[0])
	
	return (
		<div sx={{width: '250px', border: '1px solid #EDF2F7', display: 'flex', flexDirection: 'column', bg: '#FFFFFF', position: 'fixed', height: '100vh'}}>
			<div sx={{display: 'flex', alignItems: 'center', margin: '30px 0 0 24px'}}>
				<Image src={Logo} sx={{cursor: 'pointer'}} onClick={() => router.push('/')}/>
				{/*<span sx={{background: 'linear-gradient(225deg, #D665FF 0%, #4C6FFF 100%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent', fontWeight: 700, marginLeft: '12px'}}>SMART CARD</span>*/}
			</div>
			
			<div sx={{margin: '4rem 0 0 0', flexBasis: '73%'}}>
				{
					navItems.slice(0, 2).map((item, i) => (
						<NavItem
							key={item.id}
							text={item.text}
							icon={item.icon}
							badge={item.badge}
							href={item.href}
							active={activeItem.id === item.id}
							onClick={() => setActiveItem(item)}
						/>
					))
				}
			</div>
			
			<div>
				{
					navItems.slice(2, 6).map((item, i) => (
						<NavItem
							key={i}
							text={item.text}
							icon={item.icon}
							active={activeItem.id === item.id}
							href={item.href}
							onClick={() => {
								setActiveItem(item)
								item.onClick && item.onClick()
							}}
						/>
					))
				}
			</div>
		</div>
	)
}

export default Sidebar
