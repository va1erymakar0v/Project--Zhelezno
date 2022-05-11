import React from "react";

import filter from "./filter";

function Ceiling() {
	
	function handleChange(event) {
		document.querySelectorAll(".card").forEach(card => {
			document.querySelectorAll(".Ceiling .filters-item").forEach(item => {
				item.classList.remove("checked")
			})
			event.target.parentElement.parentElement.classList.add("checked")
			let ceiling = card.querySelector(".card__ceiling").innerHTML;
			if (event.target.value != ceiling) {
				card.classList.remove("ceiling-filtered")
			} else {
				card.classList.add("ceiling-filtered")
			}
		})
		filter("ceiling");
 }

	return(
		<section className="Ceiling">
			<h3 className="section-title">Высота потолка, м</h3>
			<ul className="filters-list filters-list--horizontal">
				<li className="filters-item">
					<label className="ceiling-label">
						<input className="ceiling-input visually-hidden" type="checkbox" name="2.5" value="2.5" onChange={handleChange} />
						<span className="ceiling-checkbox"></span>
						2.5
					</label>
				</li>
				<li className="filters-item">
					<label className="ceiling-label">
						<input className="ceiling-input visually-hidden" type="checkbox" name="2.7" value="2.7" onChange={handleChange} />
						<span className="ceiling-checkbox"></span>
						2.7
					</label>
				</li>
				<li className="filters-item">
					<label className="ceiling-label">
						<input className="ceiling-input visually-hidden" type="checkbox" name="3.1" value="3.1" onChange={handleChange} />
						<span className="ceiling-checkbox"></span>
					3.1
					</label>
				</li>
			</ul>
		</section>
		)
}

export default Ceiling;