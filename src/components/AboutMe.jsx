import React from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router'

/* 
	? useSearchParams
	* reads query-string values from the URL, such as ?firstName=John

	? useParams
	* reads params from the url
	* will require sub url
	
	? useNavigate()
	* router hook
	* allows us to navigate anywhere within the BrowserRouter
*/

export default function AboutMe() {
	// const [searchParams] = useSearchParams()
	// const firstName = searchParams.get('firstName')

	const { name } = useParams()

	const navigate = useNavigate()

	return (
		// <div>This page is about {firstName ?? 'you'}</div>
		<div>
			<h1>This page is about {name}</h1>
			<button onClick={() => navigate("/")}>Take me home</button>
		</div>
	)
}
