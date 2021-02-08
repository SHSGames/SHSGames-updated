// Import React
import React from "react";

// Import React Router
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
const Router = location.protocol === "file:" ? HashRouter : BrowserRouter;

let ROUTES = [];
const importAll = a => a.keys().forEach(k => ROUTES.push(a(k)));
importAll(require.context("../views", true, /\.js$/));

import Footer from "components/Footer";

// Create root component
class Root extends React.Component {

	// Moniter for route changes to reload Photon
	componentDidMount() {
		let route = app.getRoute();
		(function loop() {
			requestAnimationFrame(loop);
			if(route !== app.getRoute()) {
				route = app.getRoute();
				$(window).scrollTop(0);
				Photon.reload();
			}
		}());
	}

    render() {

		// Initial render of root component
		return (
			<Router>
				<main>
					{ ROUTES.map(({ route, View }, key) => <Route key={key} path={route} exact={true} component={View}/> ) }
				</main>
				<Footer/>
			</Router>
        );

    }

}

export default Root;
