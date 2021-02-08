import React, { Fragment } from "react";
import { Toolbar, ToolbarTitle, ToolbarSpacer } from "@photoncss/Toolbar";
import { Icon } from "@photoncss/Icon";

export default function Component({ children = false }) {
	return (
		<Fragment>
			<Toolbar position="fixed" elevate color="white text-black">
				<Icon onClick={ () => Photon.Drawer("#drawer").open() }>menu</Icon>
				{ children ? <ToolbarTitle subtitle="SHS Games">{children}</ToolbarTitle> : <ToolbarTitle>SHS Games</ToolbarTitle> }
			</Toolbar>
			<ToolbarSpacer/>
		</Fragment>
	)
}
