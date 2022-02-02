/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Tabs = ({items, active, onItemClickHandler}) => (
	<div sx={{display: 'flex', justifyContent: 'flex-start', height: '30px', margin: '25px 0 0 0'}}>
		{
			items.map((item, i) => (
				<span sx={{
					margin: '0 30px 0 0',
					fontWeight: '600',
					fontSize: '14px',
					lineHeight: '20px',
					cursor: 'pointer',
					borderBottom: item.id === active.id ? '2px solid #4C6FFF' : 'none',
					color: item.id === active.id ? '#1A202C' : 'inherit',
				}} key={i} onClick={ () => onItemClickHandler && onItemClickHandler(item) }>{item.text}</span>
			))
		}
	</div>
)

export default Tabs
