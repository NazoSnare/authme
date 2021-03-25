import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import KeepAlive from "react-activation"

import { settings_main } from "../resources/settings.js"

const Settings = () => {
	useEffect(() => {
		setTimeout(() => {
			settings_main()
		}, 100)
	}, [])

	return (
		<KeepAlive>
			<div className="main">
				<h1>This is React inside Electron!</h1>
				<br />
				<h3>Settings</h3>
				<br />

				<Link to="/">Home</Link>

				<br />

				<h2>Names</h2>
				<button id="button0">Off</button>

				<br />

				<h2>Reveal</h2>
				<button id="button1">Off</button>
			</div>
		</KeepAlive>
	)
}

export default Settings
