/** @jsxImportSource theme-ui */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import React, {useState} from "react"
import theme from '../theme'
import Header from '../src/components/header'
import Sidebar from "../src/components/sidebar"
import Login from "./auth/login"
import Register from "./auth/register"
import Profile, {TABS as accountTabs} from "./profile"
import "../src/style.css"

export default function App({ Component, pageProps }) {
	const [activeTab, setActiveTab] = useState(accountTabs[0])
	
	const tabsItemClickHandler = (tab) => {
		setActiveTab(tab)
	}
	
	const TABS = {
		[Profile]: {
			items: accountTabs,
			active: activeTab,
			onClickHandler: tabsItemClickHandler
		},
	}
	
	return (
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				{
					[Login, Register].includes(Component) ? (
						<Component {...pageProps}/>
					) : (
						<div sx={{display: 'flex', bg: '#F7FAFC'}}>
							<Sidebar/>
							<div sx={{flexGrow: '1', paddingLeft: '250px'}}>
								<Header tabs={TABS[Component]}/>
								<div sx={{padding: '150px 30px 0 30px', height: `calc(100vh - 0px)`, overflow: 'scroll'}}>
									<Component {...pageProps} activeTab={activeTab} />
								</div>
							</div>
						</div>
					)
				}
			</ThemeProvider>
		</React.StrictMode>
	)
}
