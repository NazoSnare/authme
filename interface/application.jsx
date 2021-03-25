import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import KeepAlive from "react-activation"

import { application_main, application_cancel } from "../resources/application.js"

const Application = () => {
	useEffect(() => {
		setTimeout(() => {
			application_main()
		}, 100)
	}, [])

	return (
		<KeepAlive>
			<div className="main">
				<h1>Authme</h1>
				<br />
				<h1 id="time">Time</h1>
				<h1 id="token">Token</h1>

				<br />
				<Link
					to="/settings"
					onClick={() => {
						application_cancel()
					}}
				>
					Settings
				</Link>
			</div>

			<div className="grid"></div>
		</KeepAlive>
	)
}

export default Application
