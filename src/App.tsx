import styles from './App.module.sass'

import { Routes, Route, useLocation } from 'react-router-dom'

import Main from './pages/main/Main'
import Contacts from './pages/contacts/Contacts'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
	const location = useLocation()

	return (
		<div className={styles.container}>
			<Header />
			<Routes location={location} key={location.pathname}>
				<Route path='/home' index element={<Main />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
