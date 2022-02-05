/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'
import logo from './dark.png'
import Logo from '../images/logo.png'
import React, {useState} from "react"
import theme from '../../theme'
// import {router} from "next/client"

const NavItem = ({text, active, icon, badge, href, onClick}) => {
	const textStyle = {fontSize: '14px', flexBasis: '50%', marginRight: '10px', fontWeight: '600', color: 'inherit', textDecoration: 'none'}
	
	return (
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
			{ React.createElement(icon, {fill: active ? theme.colors.primary : '#425466'}) }
			{ href ? (
				<Link href={href} as={href}>
					<a sx={textStyle} href={href}>{ text }</a>
				</Link>
			) : (
				<span sx={textStyle}>{ text }</span>
			) }
			
			{ badge && (<Badge text={badge} background={'#E1E8FF'}/>) }
		</div>
	)
}

const ChatIcon = ({fill}) => (
	<svg sx={{marginRight: '20px'}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M2.67789 11.394C2.88828 11.6049 2.99363 11.8988 2.96523 12.1954C2.90159 12.8601 2.75502 13.5519 2.56677 14.1945C3.96166 13.8721 4.81358 13.4981 5.20082 13.3019C5.42062 13.1905 5.67381 13.1642 5.91182 13.228C6.56966 13.4044 7.27076 13.5 8 13.5C11.9956 13.5 15 10.6925 15 7.5C15 4.30754 11.9956 1.5 8 1.5C4.0044 1.5 1 4.30754 1 7.5C1 8.96809 1.6173 10.3304 2.67789 11.394ZM2.18489 15.2989C2.17816 15.3003 2.17142 15.3016 2.16466 15.3029C2.07283 15.321 1.97922 15.3388 1.88382 15.3563C1.75 15.3808 1.61264 15.4047 1.47172 15.4277C1.27271 15.4603 1.12037 15.2521 1.19898 15.0664C1.25034 14.9451 1.30097 14.8179 1.3503 14.6861C1.38164 14.6023 1.41245 14.5167 1.44259 14.4294C1.44389 14.4256 1.44518 14.4219 1.44648 14.4181C1.69422 13.6984 1.89596 12.8711 1.96979 12.1001C0.743061 10.8699 0 9.26087 0 7.5C0 3.63401 3.58172 0.5 8 0.5C12.4183 0.5 16 3.63401 16 7.5C16 11.366 12.4183 14.5 8 14.5C7.18324 14.5 6.39508 14.3929 5.65284 14.1939C5.13337 14.4571 4.01434 14.9363 2.18489 15.2989Z" fill={fill || '#425466'}/>
	</svg>
)

const UserIcon = ({fill}) => (
	<svg sx={{marginRight: '20px'}} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M10.6667 4.5C10.6667 5.97276 9.47276 7.16667 8 7.16667C6.52724 7.16667 5.33333 5.97276 5.33333 4.5C5.33333 3.02724 6.52724 1.83333 8 1.83333C9.47276 1.83333 10.6667 3.02724 10.6667 4.5ZM8 8.5C10.2091 8.5 12 6.70914 12 4.5C12 2.29086 10.2091 0.5 8 0.5C5.79086 0.5 4 2.29086 4 4.5C4 6.70914 5.79086 8.5 8 8.5ZM16 15.1667C16 16.5 14.6667 16.5 14.6667 16.5H1.33333C1.33333 16.5 0 16.5 0 15.1667C0 13.8333 1.33333 9.83333 8 9.83333C14.6667 9.83333 16 13.8333 16 15.1667ZM14.6666 15.162C14.6647 14.833 14.4616 13.8473 13.5572 12.9428C12.6875 12.0731 11.0521 11.1667 7.99999 11.1667C4.94784 11.1667 3.31247 12.0731 2.4428 12.9428C1.53834 13.8473 1.33523 14.833 1.33333 15.162H14.6666Z" fill={fill}/>
	</svg>
)

const LogoutIcon = ({fill}) => (
	<svg sx={{marginRight: '20px',}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M6 13C6 13.2761 6.22386 13.5 6.5 13.5L14.5 13.5C14.7761 13.5 15 13.2761 15 13L15 4C15 3.72386 14.7761 3.5 14.5 3.5L6.5 3.5C6.22386 3.5 6 3.72386 6 4L6 6C6 6.27614 5.77614 6.5 5.5 6.5C5.22386 6.5 5 6.27614 5 6L5 4C5 3.17157 5.67157 2.5 6.5 2.5L14.5 2.5C15.3284 2.5 16 3.17157 16 4L16 13C16 13.8284 15.3284 14.5 14.5 14.5L6.5 14.5C5.67157 14.5 5 13.8284 5 13L5 11C5 10.7239 5.22386 10.5 5.5 10.5C5.77614 10.5 6 10.7239 6 11L6 13Z" fill={fill}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M0.146446 8.85355C-0.0488157 8.65829 -0.0488157 8.34171 0.146446 8.14645L3.14645 5.14645C3.34171 4.95118 3.65829 4.95118 3.85355 5.14645C4.04882 5.34171 4.04882 5.65829 3.85355 5.85355L1.70711 8L10.5 8C10.7761 8 11 8.22386 11 8.5C11 8.77614 10.7761 9 10.5 9L1.70711 9L3.85355 11.1464C4.04882 11.3417 4.04882 11.6583 3.85355 11.8536C3.65829 12.0488 3.34171 12.0488 3.14645 11.8536L0.146446 8.85355Z" fill={fill}/>
	</svg>
)

const Badge = ({text, background, color}) => (
	<span sx={{borderRadius: '100px', width: '28px', height: '19px', background: background, color: color || 'inherit', fontWeight: 'bold', fontSize: '12px', lineHeight: '19px', textAlign: 'center'}}>{text}</span>
)

const navItems = [
	{id: uuidv4(), text: 'Tableau de bord', icon: ChatIcon, href: '/'},
	{id: uuidv4(), text: 'Applications', icon: ChatIcon, badge: 10, href: '/table'},
	{id: uuidv4(), text: 'Messages', icon: ChatIcon, badge: 6, href: '/'},
	{id: uuidv4(), text: 'Utilisateurs', icon: ChatIcon, badge: 10, href: '/table'},
	{id: uuidv4(), text: 'Account', icon: UserIcon, href: '/profile'},
	{id: uuidv4(), text: 'Logout', icon: LogoutIcon, onClick: () => location.replace('/auth/login')},
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
					navItems.slice(0, 4).map((item, i) => (
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
					navItems.slice(4, 6).map((item, i) => (
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
