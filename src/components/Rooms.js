import React from "react";

function Rooms({monitorRooms}) {
	function handleChange(event) {
		if (event.target.parentElement.parentElement.classList.contains("checked")) {
			event.target.parentElement.parentElement.classList.remove("checked")
			monitorRooms('UNDO');
		} else {
			document.querySelectorAll(".Rooms .filters-item").forEach(item => {
				item.classList.remove("checked")
			})
			event.target.parentElement.parentElement.classList.add("checked")
			monitorRooms(event.target.value);
		}
	}

	return(
		<section className="Rooms">
			<h3 className="section-title">Количество комнат</h3>
			<ul className="filters-list filters-list--horizontal">
				<li className="filters-item">
					<label className="rooms-label">
						<input className="rooms-input visually-hidden" type="checkbox" name="1" value="1" onChange={handleChange} />
						<span className="rooms-checkbox"></span>
						1
					</label>
				</li>
				<li className="filters-item">
					<label className="rooms-label">
						<input className="rooms-input visually-hidden" type="checkbox" name="2" value="2" onChange={handleChange} />
						<span className="rooms-checkbox"></span>
						2
					</label>
				</li>
				<li className="filters-item">
					<label className="rooms-label">
						<input className="rooms-input visually-hidden" type="checkbox" name="3" value="3" onChange={handleChange} />
						<span className="rooms-checkbox"></span>
					3
					</label>
				</li>
				<li className="filters-item">
					<label className="rooms-label">
						<input className="rooms-input visually-hidden" type="checkbox" name="4" value="4" onChange={handleChange} />
						<span className="rooms-checkbox"></span>
					4
					</label>
				</li>
				<li className="filters-item">
					<label className="rooms-label">
						<input className="rooms-input visually-hidden" type="checkbox" name="5" value="5" onChange={handleChange} />
						<span className="rooms-checkbox"></span>
					5
					</label>
				</li>
				<li className="filters-item">
					<label className="rooms-label">
						<input className="rooms-input visually-hidden" type="checkbox" name="6" value="6" onChange={handleChange} />
						<span className="rooms-checkbox"></span>
					5+
					</label>
				</li>
			</ul>
		</section>
		)
}

export default Rooms;