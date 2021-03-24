import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import { AliveScope } from "react-activation"

import Application from "./application.jsx"
import Settings from "./settings.jsx"

const Router = () => {
	return (
		<AliveScope>
			<HashRouter>
				<Switch>
					<Route exact path="/" component={Application} />
					<Route exact path="/settings" component={Settings} />
				</Switch>
			</HashRouter>
		</AliveScope>
	)
}

export default Router
