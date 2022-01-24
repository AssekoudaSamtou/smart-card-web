/** @jsxImportSource theme-ui */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Header from '../src/components/header'
import Sidebar from "../src/components/sidebar";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<div sx={{display: 'flex'}}>
				<Sidebar/>
				<div sx={{flexGrow: '1'}}>
					<Header />
					<Component {...pageProps} />
				</div>
			</div>
		</ThemeProvider>
	)
}
