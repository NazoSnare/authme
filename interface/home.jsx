import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import main from "../resources/index.js"

const Home = () => {
	console.log("________________________")

	useEffect(() => {
		main()
	}, [])

	return (
		<div className="main">
			<h1>Authme</h1>

			<h1 id="h1">fasz</h1>

			<br />
		</div>
	)
}

export default Home
