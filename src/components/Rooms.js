import React from "react";

import filter from "./filter";
function Rooms() {
	
	function handleChange(event) {
		
		 document.querySelectorAll(".card").forEach(card => {
			 let rooms = Number(card.querySelector(".card__rooms").innerHTML);
			 console.log(event.target.value)
			 if (event.target.value != rooms) {
				 card.classList.remove("rooms-filtered")
			 } else {
				 card.classList.add("rooms-filtered")
			 }

			 if (event.target.value == "5+") {
				if (rooms < 5) {
					card.classList.remove("rooms-filtered")
				} else {
					card.classList.add("rooms-filtered")
				}
			 }
		 })
		 filter("rooms");	 
	}
	return(
		<section className="Rooms">
			<h3 className="section-title">Количество комнат</h3>
			<ul className="filters-list filters-list--horizontal">
				<li className="rooms-item">
					<label className="filters-label">
						<input className="rooms-input visually-hidden" type="radio" name="rooms" value="1" onChange={handleChange} />
						<span className="rooms-checkbox"></span>
						1
					</label>
				</li>
				<li className="rooms-item">
					<label className="filters-label">
						<input className="rooms-input visually-hidden" type="radio" name="rooms" value="2" onChange={handleChange} />
						<span className="rooms-checkbox"></span>
						2
					</label>
				</li>
				<li className="rooms-item">
					<label className="filters-label">
						<input className="rooms-input visually-hidden" type="radio" name="rooms" value="3" onChange={handleChange} />
						<span className="rooms-checkbox"></span>
						3
					</label>
				</li>
				<li className="rooms-item">
					<label className="filters-label">
						<input className="rooms-input visually-hidden" type="radio" name="rooms" value="4" onChange={handleChange} />
						<span className="rooms-checkbox"></span>
						4
					</label>
				</li>
				<li className="rooms-item">
					<label className="filters-label">
						<input className="rooms-input visually-hidden" type="radio" name="rooms" value="5" onChange={handleChange} />
						<span className="rooms-checkbox"></span>
						5
					</label>
				</li>
				<li className="rooms-item">
					<label className="filters-label">
						<input className="rooms-input visually-hidden" type="radio" name="rooms" value="5+" onChange={handleChange} />
						<span className="rooms-checkbox"></span>
						5+
					</label>
				</li>
			</ul>
		</section>
		)
}

export default Rooms;