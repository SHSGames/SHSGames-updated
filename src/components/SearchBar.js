import React, { Fragment } from "react";

import { Icon } from "@photoncss/Icon";

export default function({ onChange = () => null }) {
	return (
		<div className="search-bar-wrapper">
			<Icon waves={false}>search</Icon>
		</div>
	)
}
