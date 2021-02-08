import React from "react";
import { Drawer } from "@photoncss/Drawer";

export default function Component() {
	return (
		<Drawer from="left" id="drawer">

			<img
			  src={app.static("icon.png")}
			  alt=""
			  style={{
				margin: "1rem auto",
				borderRadius: "50%",
				width: "60%"
			  }}
			  className="raised-2"/>



		</Drawer>
	)
}
