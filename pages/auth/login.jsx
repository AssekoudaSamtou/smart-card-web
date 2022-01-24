/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default () => (
	<div sx={{variant: 'containers.page', display: 'flex', alignItems: 'stretch'}}>
		<section sx={{flexBasis: '40%', bg: 'primary'}}>
		
		</section>
		<section sx={{flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<div sx={{width: '60%'}}>
				<span>👋</span>
				<div sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
					<span sx={{
						fontWeight: '600',
						fontSize: '28px',
						lineHeight: '136.02%',
						color: '#27272E'
					}}>Welcome back!</span>
					<span sx={{
						fontSize: '16px',
						lineHeight: '162.02%',
						fontFeatureSettings: '\'salt\' on',
						color: '#27272E'
					}}>Let's build someting great</span>
				</div>
			</div>
		</section>
	</div>
)
