// Import React
import React from "react";
import { render } from "react-dom";
import YAML from "yaml";

// Import app stylesheet
import "./index.less";

// Import jQuery
import "script-loader!jquery";

// Import PhotonCSS
import "photoncss";

// Register a static asset caching service-worker
if((location.protocol === "https:" || location.hostname === "localhost") && location.port === "" && "serviceWorker" in navigator)
  navigator.serviceWorker.register("/service-worker.js");

// Import root component
import Root from "components/Root";

// Wait for the DOM to load before rendering
document.addEventListener("DOMContentLoaded", function() {

	// Append a container to the DOM to render content into
	const root = document.createElement("DIV");
	root.id = "root";
	document.body.append(root);

	// Render root component into react-root container
	render(<Root/>, document.getElementById("root"));

});

// Create global `app` definition
global.app = {};

// Resolve assets from the static folder
app.static = asset => require(`./static/${asset}`).default;

// Get current route
app.getRoute = () => location.protocol === "file:" ? (location.href.split("#")[1] || "/") : location.pathname;

// Add API request system
app.api = (path, data = {}) => new Promise(function(resolve, reject) {
	fetch(`/api/${path}`, {
		method: "POST",
		mode: "cors",
	    cache: "no-cache",
	    credentials: "same-origin",
	    headers: { "Content-Type": "application/json" },
	    redirect: "follow",
	    referrerPolicy: "no-referrer",
		body: JSON.stringify(data)
	})
	.then(resp => resp.json())
	.then(resolve).catch(reject);
});

if(location.hostname !== "localhost") {
	const client = require("raw-loader!../hash");
	fetch(`/hash`).then(resp => resp.text()).then(async server => {
		if(server.match(/([0-9]|[a-f]|[A-F]){8}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){12}/gmi)) {
			if(server !== client) {
				await (await caches.keys()).map(async a => await caches.delete(a));
			}
		}
	}).catch(e => console.error("Offline", e));
}

// Get games
app.games = YAML.parse(require("raw-loader!../games.yml").default);
