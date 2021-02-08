import React, { Fragment } from "react";

import { Container } from "@photoncss/Layout";
import SearchBar from "components/SearchBar";
import Toolbar from "components/Toolbar";

// Export the path of the page to render
export const route = "/";

// Export view
export function View() {
	return (
		<Fragment>

			<Toolbar/>

			<Container>

				<SearchBar/>

				get started by editing `src/views/Index.js::View`

			</Container>

		</Fragment>
	)
}
