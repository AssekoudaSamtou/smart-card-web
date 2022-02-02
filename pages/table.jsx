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
		<div sx={{}}>
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
						Array(10).fill(1).map((item, i) => (
							<tr key={i} sx={{
								fontSize: '14px',
								lineHeight: '20px',
								color: '#425466',
								boxShadow: 'inset 0px -1px 0px #EDF2F7'
							}}>
								<td sx={{...td, display: 'flex'}}>
									<Image src={Avatar} sx={{borderRadius: '100%'}} width={24} height={24}/>
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
										color: '#16192C',
										margin: '0 1rem 0 0',}}>
										View
									</button>
									<button sx={{
										variant: 'buttons.light',
										padding: '6px 8px',
									}}>
										<svg width="10" height="11" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.55769 5.86679C4.85508 5.86679 5.09615 6.10557 5.09615 6.40012V12.8001C5.09615 13.0947 4.85508 13.3335 4.55769 13.3335C4.26031 13.3335 4.01923 13.0947 4.01923 12.8001V6.40012C4.01923 6.10557 4.26031 5.86679 4.55769 5.86679Z" fill="black"/>
											<path d="M7.25 5.86679C7.54738 5.86679 7.78846 6.10557 7.78846 6.40012V12.8001C7.78846 13.0947 7.54738 13.3335 7.25 13.3335C6.95262 13.3335 6.71154 13.0947 6.71154 12.8001V6.40012C6.71154 6.10557 6.95262 5.86679 7.25 5.86679Z" fill="black"/>
											<path d="M10.4808 6.40012C10.4808 6.10557 10.2397 5.86679 9.94231 5.86679C9.64492 5.86679 9.40385 6.10557 9.40385 6.40012V12.8001C9.40385 13.0947 9.64492 13.3335 9.94231 13.3335C10.2397 13.3335 10.4808 13.0947 10.4808 12.8001V6.40012Z" fill="black"/>
											<path fillRule="evenodd" clipRule="evenodd" d="M14.25 3.20012C14.25 3.78923 13.7678 4.26679 13.1731 4.26679H12.6346V13.8668C12.6346 15.045 11.6703 16.0001 10.4808 16.0001H4.01923C2.82969 16.0001 1.86538 15.045 1.86538 13.8668V4.26679H1.32692C0.732155 4.26679 0.25 3.78923 0.25 3.20012V2.13346C0.25 1.54435 0.732155 1.06679 1.32692 1.06679H5.09615C5.09615 0.477685 5.57831 0.00012207 6.17308 0.00012207H8.32692C8.92169 0.00012207 9.40385 0.477685 9.40385 1.06679H13.1731C13.7678 1.06679 14.25 1.54435 14.25 2.13346V3.20012ZM3.06942 4.26679L2.94231 4.32974V13.8668C2.94231 14.4559 3.42446 14.9335 4.01923 14.9335H10.4808C11.0755 14.9335 11.5577 14.4559 11.5577 13.8668V4.32974L11.4306 4.26679H3.06942ZM1.32692 3.20012V2.13346H13.1731V3.20012H1.32692Z" fill="black"/>
										</svg>
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
