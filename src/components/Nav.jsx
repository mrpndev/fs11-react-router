import React from 'react'
import { Link } from 'react-router'

/* 
	? Link
	* replaces anchor tag
	* mounts/unmounts components without reloading the entire page
*/

export default function Nav() {
	return (
		<nav>
			<Link to={"/aboutme"}>About Me</Link>
			<Link to={"/contact"}>Contact</Link>
			<Link to={"/photos"}>Photos</Link>
			<Link to={"/aboutme"}>About Me</Link>
			<Link to={"https://linkedin.com/in/mrpndev"}>LinkedIn</Link>
		</nav>
	)
}
