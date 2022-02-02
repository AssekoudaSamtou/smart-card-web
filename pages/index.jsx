/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
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
		<div>
			<div sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
				{
					Array(4).fill(1).map((item, i) => (
						<div sx={{variant: 'containers.card', flexBasis: '370px', px: 12, mb: 24}}>
							<div sx={{display: 'flex', justifyContent: 'space-between'}}>
								<div sx={{display: 'flex', flexDirection: 'column'}}>
									<span sx={{fontSize: '0.875rem', fontWeight: 500}}>Budget</span>
									<span sx={{fontWeight: 600, color: '#16192c', fontSize: '1.375rem'}}>500.54</span>
								</div>
								<span sx={{
									background: 'rgb(255, 87, 154)',
									borderRadius: '100%',
									padding: '15px',
									alignSelf: 'start',
									display: 'flex'
								}}>
									<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M27.6169 3.95504C27.6169 2.07492 26.0927 0.550781 24.2126 0.550781H3.78707C1.90695 0.550781 0.382812 2.07492 0.382812 3.95504V17.5721C0.382812 19.4522 1.90695 20.9763 3.78707 20.9763H20.1033C20.5547 20.9763 20.9877 21.1556 21.3069 21.4749L26.164 26.332C26.7001 26.8681 27.6169 26.4884 27.6169 25.7302V3.95504ZM8.89345 10.7635C8.89345 11.7036 8.13138 12.4657 7.19132 12.4657C6.25126 12.4657 5.4892 11.7036 5.4892 10.7635C5.4892 9.82349 6.25126 9.06142 7.19132 9.06142C8.13138 9.06142 8.89345 9.82349 8.89345 10.7635ZM15.702 10.7635C15.702 11.7036 14.9399 12.4657 13.9998 12.4657C13.0598 12.4657 12.2977 11.7036 12.2977 10.7635C12.2977 9.82349 13.0598 9.06142 13.9998 9.06142C14.9399 9.06142 15.702 9.82349 15.702 10.7635ZM20.8083 12.4657C21.7484 12.4657 22.5105 11.7036 22.5105 10.7635C22.5105 9.82349 21.7484 9.06142 20.8083 9.06142C19.8683 9.06142 19.1062 9.82349 19.1062 10.7635C19.1062 11.7036 19.8683 12.4657 20.8083 12.4657Z" fill="white"/>
									</svg>
								</span>
							</div>
							<div sx={{display: 'flex', alignItems: 'center'}}>
								<span sx={{color: '#00cc88', lineHeight: '1rem', marginRight: '.5rem', backgroundColor: '#ccf5e7', borderRadius: '.375rem', display: 'inline-block',
									padding: '.2rem .6rem',
									fontSize: '0.75em',
									fontWeight: '600',
									textAlign: 'center',
									whiteSpace: 'nowrap',
									verticalAlign: 'baseline'}}>
									<svg width="10" height="10" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M5.25 14.0001C5.52614 14.0001 5.75 13.7763 5.75 13.5001V1.70723L8.89645 4.85368C9.09171 5.04894 9.40829 5.04894 9.60355 4.85368C9.79882 4.65841 9.79882 4.34183 9.60355 4.14657L5.60355 0.146568C5.40829 -0.0486937 5.09171 -0.0486937 4.89645 0.146568L0.896447 4.14657C0.701184 4.34183 0.701184 4.65841 0.896447 4.85368C1.09171 5.04894 1.40829 5.04894 1.60355 4.85368L4.75 1.70723V13.5001C4.75 13.7763 4.97386 14.0001 5.25 14.0001Z" fill="#00cc88"/>
									</svg>
									13%
								</span>
								<span sx={{fontSize: '0.75rem'}}>Since last month</span>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}
