import React, { Fragment } from "react";
import Toolbar from "components/Toolbar";
import { Container } from "@photoncss/Layout";

// Export the path of the page to render
export const route = "/";

// Export view
export function View() {
	return (
		<Fragment>

			<Toolbar/>

			<Container>

				get started by editing `src/views/Index.js::View`

			</Container>

		</Fragment>
	)
}
