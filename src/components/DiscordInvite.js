import React, { useState, useEffect } from "react";
import "./DiscordInvite.less";

export default function({ palette = "dark", guild = "635938104775278602" }) {

    const [ state, setState ] = useState({ success: null });

	// Function to fetch the updated server stats
	const pull = () => fetch(`https://joshm.us.to/api/joshobot/v1/guild?guild=${guild}`).then(resp => resp.json()).then(setState);

	// Have state sync with server every second while component is mounted
	useEffect(function() {
		const sync = setInterval(pull, 1000);
		return () => clearInterval(sync);
	});

	// If failed to get state
	if(state.success === false || state.success === null) return (
		<div className={`DiscordInvite-root palette-${palette}`}>
			<h5 className="DiscordInvite-title">
				You received an invite to a server
			</h5>
			<div className="DiscordInvite-body">
	            <div className="DiscordInvite-serverIcon"/>
	            <div className="DiscordInvite-content">
	                <h3 className="DiscordInvite-serverName"></h3>
	                <strong className="DiscordInvite-memberCount">
	                </strong>
	            </div>
				<a className="DiscordInvite-joinLink disabled">Join</a>
	        </div>
	    </div>
	);

    return (
		<div className={`DiscordInvite-root palette-${palette}`}>
	        <h5 className="DiscordInvite-title">
	            You received an invite to a server
	        </h5>
	        <div className="DiscordInvite-body">
	            <div className="DiscordInvite-serverIcon" style={{ backgroundImage: `url(${state.iconURL})` }}/>
	            <div className="DiscordInvite-content">
	                <h3 className="DiscordInvite-serverName">{state.name}</h3>
	                <strong className="DiscordInvite-memberCount">
	                    <span>{state.memberOnline} Online</span>
	                    <span>{state.memberCount} Members</span>
	                </strong>
	            </div>
				<a className="DiscordInvite-joinLink" href={`//discord.gg/${state.inviteCodes[0]}`}>Join</a>
	        </div>
	    </div>
	);

}
