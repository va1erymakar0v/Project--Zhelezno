import React from "react";

import filter from "./filter";

function Release() {
	
	function handleChange(event) {
		document.querySelectorAll(".card").forEach(card => {
			document.querySelectorAll(".Release .filters-item").forEach(item => {
				item.classList.remove("checked")
			})
			event.target.parentElement.parentElement.classList.add("checked")
			let release = card.querySelector(".card__release").innerHTML;
			if (event.target.value != release) {
				card.classList.remove("release-filtered")
			} else {
				card.classList.add("release-filtered")
			}
		})
		filter("release");
 }

	return(
		<section className="Release">
			<h3 className="section-title">Срок сдачи</h3>
			<ul className="filters-list filters-list--horizontal">
				<li className="filters-item">
					<label className="release-label">
						<input className="release-input visually-hidden" type="checkbox" name="2022" value="2022" onChange={handleChange} />
						<span className="release-checkbox"></span>
						2022
					</label>
				</li>
				<li className="filters-item">
					<label className="release-label">
						<input className="release-input visually-hidden" type="checkbox" name="2023" value="2023" onChange={handleChange} />
						<span className="release-checkbox"></span>
						2023
					</label>
				</li>
				<li className="filters-item">
					<label className="release-label">
						<input className="release-input visually-hidden" type="checkbox" name="2024" value="2024" onChange={handleChange} />
						<span className="release-checkbox"></span>
						2024
					</label>
				</li>
			</ul>
		</section>
		)
}

export default Release;