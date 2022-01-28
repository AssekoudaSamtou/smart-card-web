/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Image from 'next/image'
import Avatar from '../src/images/img.png'

export default () => {
	const th = {
		padding: '18px 0 18px 24px',
		fontWeight: '600',
		fontSize: '10px',
		lineHeight: '16px',
		textAlign: 'left',
		letterSpacing: '0.06em',
		textTransform: 'uppercase',
		color: '#8492A6'
	}
	const td = {
		padding: '18px 0 18px 24px',
	}
	
	return (
		<div sx={{ height: `calc(100vh - 103px)`}}>
			<div sx={{borderRadius: '16px', margin: '30px', bg: '#FFFFFF', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)'}}>
				<div sx={{
					fontWeight: '600',
					fontSize: '14px',
					lineHeight: '24px',
					display: 'flex',
					alignItems: 'center',
					color: '#1F2D3D',
					padding: '18px 0 18px 24px',
				}}>Applications</div>
				<table sx={{borderCollapse: 'collapse', width: '100%'}}>
					<thead>
					<tr sx={{bg: '#FAFAFB', boxShadow: 'inset 0px -1px 0px #EDF2F7', borderTop: '1px solid #EDF2F7'}}>
						<th sx={th}>INVOICE</th>
						<th sx={th}>DATE</th>
						<th sx={th}>COMPANY</th>
						<th sx={th}>OFFER</th>
						<th sx={th}>MEETING</th>
						<th sx={th}/>
					</tr>
					</thead>
					<tbody>
					{
						Array(6).fill(1).map((item, i) => (
							<tr key={i} sx={{
								fontSize: '14px',
								lineHeight: '20px',
								color: '#425466',
								boxShadow: 'inset 0px -1px 0px #EDF2F7'
							}}>
								<td sx={{...td, display: 'flex'}}>
									<Image src={Avatar} sx={{borderRadius: '100%', zIndex: '-1'}} width={24} height={24}/>
									<span sx={{
										fontWeight: '600',
										fontSize: '12px',
										lineHeight: '20px',
										display: 'flex',
										alignItems: 'center',
										color: '#425466',
										marginLeft: '1rem'
									}}>Theresa Webb</span>
								</td>
								<td sx={td}><span>Feb 15, 2020</span></td>
								<td sx={td}><span>Mailchimp</span></td>
								<td sx={td}><span>$3,500</span></td>
								<td sx={td}><span>Scheduled</span></td>
								<td sx={td}>
									<button sx={{variant: 'buttons.light', padding: '8px 12px', fontWeight: '600',
										fontSize: '10px',
										lineHeight: '10px',
										letterSpacing: '-0.005em',
										color: '#16192C'}}>
										Download
									</button>
								</td>
							</tr>
						))
					}
					
					</tbody>
				</table>
				<div sx={{
					fontWeight: 'normal',
					fontSize: '14px',
					lineHeight: '23px',
					display: 'flex',
					alignItems: 'center',
					color: '#718096',
					padding: '18px 0 18px 24px',
				}}>Showing 10 items out of 250 results found</div>
			</div>
		</div>
	)
}
