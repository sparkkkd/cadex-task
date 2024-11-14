import styles from './App.module.sass'

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Main from './pages/main/Main'
import Contacts from './pages/contacts/Contacts'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import backgroundImage from './images/noise-bg.jpg'

function App() {
	const location = useLocation()

	return (
		<>
			<div
				className={styles.background}
				style={{ backgroundImage: `url(${backgroundImage})` }}
			></div>
			<div className={styles.container}>
				<Header />
				<AnimatePresence mode='wait'>
					<Routes location={location} key={location.pathname}>
						<Route path='/home' index element={<Main />} />
						<Route path='/contacts' element={<Contacts />} />
					</Routes>
				</AnimatePresence>
				<Footer />
			</div>
		</>
	)
}

export default App
