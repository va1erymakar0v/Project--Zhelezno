import React from "react";

import filter from "./filter";

function View() {

	function handleChange(event) {
		document.querySelectorAll(".card").forEach(card => {
			let view = card.querySelector(".card__view").innerHTML;
			if (event.target.value != view) {
				card.classList.remove("view-filtered")
			} else {
				card.classList.add("view-filtered")
			}
		})
		filter("view");
 }

	return(
		<section className="View">
			<h3 className="section-title">Вид из окна</h3>
			<ul className="filters-list">
				<li className="filters-item">
					<label className="view-label">
						<input className="view-input visually-hidden" type="radio" name="view" value="panoramic" onChange={handleChange} />
						<span className="view-checkbox"></span>
						Панорамный
					</label>
				</li>
				<li className="filters-item">
					<label className="view-label">
						<input className="view-input visually-hidden" type="radio" name="view" value="yard" onChange={handleChange} />
						<span className="view-checkbox"></span>
						Двор
					</label>
				</li>
				<li className="filters-item">
					<label className="view-label">
						<input className="view-input visually-hidden" type="radio" name="view" value="park" onChange={handleChange} />
						<span className="view-checkbox"></span>
						Парк
					</label>
				</li>
				<li className="filters-item">
					<label className="view-label">
						<input className="view-input visually-hidden" type="radio" name="view" value="city" onChange={handleChange} />
						<span className="view-checkbox"></span>
						Город
					</label>
				</li>
			</ul>
		</section>
		)
}

export default View;