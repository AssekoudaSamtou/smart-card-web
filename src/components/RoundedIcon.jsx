/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const RoundedIcon = ({ roundColor }) => (
	<span sx={{variant: 'icons.rounded', bg: roundColor}}>
		<svg width="16" height="16" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M27.6169 3.95504C27.6169 2.07492 26.0927 0.550781 24.2126 0.550781H3.78707C1.90695 0.550781 0.382812 2.07492 0.382812 3.95504V17.5721C0.382812 19.4522 1.90695 20.9763 3.78707 20.9763H20.1033C20.5547 20.9763 20.9877 21.1556 21.3069 21.4749L26.164 26.332C26.7001 26.8681 27.6169 26.4884 27.6169 25.7302V3.95504ZM8.89345 10.7635C8.89345 11.7036 8.13138 12.4657 7.19132 12.4657C6.25126 12.4657 5.4892 11.7036 5.4892 10.7635C5.4892 9.82349 6.25126 9.06142 7.19132 9.06142C8.13138 9.06142 8.89345 9.82349 8.89345 10.7635ZM15.702 10.7635C15.702 11.7036 14.9399 12.4657 13.9998 12.4657C13.0598 12.4657 12.2977 11.7036 12.2977 10.7635C12.2977 9.82349 13.0598 9.06142 13.9998 9.06142C14.9399 9.06142 15.702 9.82349 15.702 10.7635ZM20.8083 12.4657C21.7484 12.4657 22.5105 11.7036 22.5105 10.7635C22.5105 9.82349 21.7484 9.06142 20.8083 9.06142C19.8683 9.06142 19.1062 9.82349 19.1062 10.7635C19.1062 11.7036 19.8683 12.4657 20.8083 12.4657Z" fill="white"/>
		</svg>
	</span>
)

export default RoundedIcon