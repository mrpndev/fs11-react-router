import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Photos from './components/Photos'
import AboutMe from './components/AboutMe'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {

	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path='/' element={<h1>This is the home route</h1>} />
					<Route path='/aboutme' element={<AboutMe/>}>
						<Route path='/aboutme/:name' element={<AboutMe/>}/>
					</Route>
					<Route path='/photos' element={<Photos/>} />
					<Route path='/contact' element={<Contact/>} />
					<Route path='*' element={<h1>404 Page Not Found</h1>}/>
				</Routes>

			</BrowserRouter>
		</>
	)
}

export default App

/* 
	? React Router
	* dependency creating client endpoints for us
	* they correspond to endpoints on the server
	* as we hite specific endpoint, we render the component
	
	? How to use
	* install using `npm i react-router`
	* import BrowserRouter component
		* this component encapsulates the entire application
		* often insdie main.jsx, wrapping App/ component
	* encapsulate your components into Routes
		* main container holding elements
		* delcares where components will live and their navigation
	* Route
		* individual path you can take
		* takes path prop (url)
		* takes element prop (component to render)

*/