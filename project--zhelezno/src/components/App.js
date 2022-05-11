import React from "react";

import Card from "./Card";
import Header from "./Header"
import Rooms from "./Rooms";
import Plan from "./Plan";
import Project from "./Project";
import Release from "./Release";
import View from "./View";
import Ceiling from "./Ceiling";
import Price from "./Price";
import Meters from "./Meters";

import database from "../database"

function App() {
	// const [state, setState] = React.useState([])

	// function handleChange(state) {
	// 	setState(prevState => [...prevState, state])
	// }


	const cards = database.map((item) => {
		return(
			<Card
				key={item.id}
				item={item}
			/>
		)
	}) 

	return(
		<div className="workspace">
			<Header />
			<div className="results">
				<div className="cards-list">
					{cards}
				</div>
			</div>
			<form className="filters">
				<Rooms />
				<Meters />
				<Project />
				<Price />
				<Release />
				<View />
				<Ceiling />
			</form>
		</div>
		)
}

export default App;