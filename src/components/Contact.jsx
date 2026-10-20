import React from 'react'

export default function Contact() {
  return (
	<form action="">
		<input type="email" name="email" id="email" placeholder='Email' />
		<input type="text" name="subject" id="subject" placeholder='Subject' />
		<button type="button">Send</button>
	</form>
  )
}
