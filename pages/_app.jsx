/** @jsxImportSource theme-ui */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Header from '../src/components/header'
import Sidebar from "../src/components/sidebar"
import Index from "./index"
import "../src/style.css"
import Login from "./auth/login";
import Register from "./auth/register";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			{
				[Login, Register].includes(Component) ? (
					<Component {...pageProps} />
				) : (
					<div sx={{display: 'flex', bg: '#F7FAFC'}}>
						<Sidebar/>
						<div sx={{flexGrow: '1', paddingLeft: '250px'}}>
							<Header />
							<div sx={{paddingTop: '103px'}}>
								<Component {...pageProps} />
							</div>
						</div>
					</div>
				)
			}
		</ThemeProvider>
	)
}
