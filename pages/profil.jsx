/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '../src/images/Image.png'
import Avatar from '../src/images/avatar.png'

export default () => {
	console.log(Avatar)
	return (
		<div sx={{ height: `calc(100vh - 103px)`}}>
			<div sx={{
				display: 'flex',
				flexDirection: 'column',
				padding: '8px',
				alignItems: 'stretch',
				bg: '#FFFFFF',
				boxShadow: '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)',
				borderRadius: '16px',
				width: '343px',
				height: '499px',
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
				<div></div>
			</div>
		</div>
	)
}
