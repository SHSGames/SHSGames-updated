import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer, FooterCopyright } from "@photoncss/Footer";
import { Container, Row, Col } from "@photoncss/Layout";
import DiscordInvite from "components/DiscordInvite";

export function MoTD() {

	// Initialize state
	const [ state, setState ] = useState(null);

	// Have state sync with server every second while component is mounted
	useEffect(function() {
		if(state === null) fetch(`https://joshm.us.to/api/v1/motd`).then(resp => resp.json()).then(setState);
	});

	// If loading
	if(state === null) return null;

	// Return motd
	return <p>{state.motd}</p>

}

export default function Component() {
	return (
		<Footer>
			<Container>
				<Row>
					<Col md={4}>
						<Link to="/"><div className="title"><h3>SHS Games</h3></div></Link>
						<MoTD/>
					</Col>
					<Col md={8}>
						<div style={{ float: "right" }}>
							<DiscordInvite guild="584437072618717209" palette={Photon.getTheme().theme}/>
						</div>
					</Col>
				</Row>
			</Container>
			<FooterCopyright>
				<Container style={{ paddingLeft: 12 }}>
				
					Copyright © 2019 - { new Date().getFullYear() }
					{" • "}
					<a href="//github.com/SHSGames/SHSGames/blob/master/LICENSE" className="link">Liscense</a>

					<br/>

					<a href="//joshmerlino.github.io" className="link">Josh Merlino</a>
					{" & "}
					<a href="//th3skeleton.github.io/pshel" className="link">Parker Sheldon</a>
					{" & "}
					<a className="link">George Lock</a>

				</Container>
			</FooterCopyright>
		</Footer>
	);
}
