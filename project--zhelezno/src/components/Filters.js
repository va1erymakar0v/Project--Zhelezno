import React from "react";

import Rooms from "./Rooms";
// import Plan from "./Plan";
import Project from "./Project";
import Release from "./Release";
import View from "./View";
import Ceiling from "./Ceiling";
import Price from "./Price";
import Meters from "./Meters";

function Filters() {

	return(
		<form className="filters">
			<Rooms />
			<Meters />
			<Price />
			<Project />
			<Release />
			<View />
			<Ceiling />
		</form>
		)
}

export default Filters;