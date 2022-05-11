import React from "react";

function Plan() {

	function handleChange(event) {
		// document.querySelectorAll(".card").forEach(card => {
		// 	let toilets = Number(card.querySelector(".card__toilets").innerHTML);
		// 	let wardrobe = card.querySelector(".card__wardrobe").innerHTML;
		// 	let loggia = card.querySelector(".card__loggia").innerHTML;
		// 	let studio = card.querySelector(".card__studio").innerHTML;
		// 	let laundry = card.querySelector(".card__laundry").innerHTML;

		// 	if (event.target.value == "toilets" && event.target.checked) {
		// 		if (toilets >= 2) {
		// 			card.classList.add("card--filtered")
		// 		} else {
		// 			card.classList.remove("card--filtered")
		// 		}
		// 	} else if (event.target.value == "toilets" && !event.target.checked) {
		// 		card.classList.toggle("card--filtered")
		// 	}

		// 	if (event.target.value == "wardrobe" && event.target.checked) {
		// 		if (wardrobe == "true") {
		// 			card.classList.add("card--filtered")
		// 		} else {
		// 			card.classList.remove("card--filtered")
		// 		}
		// 	} else if (event.target.value == "wardrobe" && !event.target.checked) {
		// 		card.classList.toggle("card--filtered")
		// 	}
		// })
 }

	return(
		<section className="Plan">
			<h3 className="section-title">Особенности планировки</h3>
			<ul className="filters-list">
				<li className="filters-item">
					<label className="plan-label">
						<input className="plan-input visually-hidden" type="checkbox" name="toilets" value="toilets" onChange={handleChange} />
						<span className="plan-checkbox"></span>
						2 и более санузла
					</label>
				</li>
				<li className="filters-item">
					<label className="plan-label">
						<input className="plan-input visually-hidden" type="checkbox" name="wardrobe" value="wardrobe" onChange={handleChange} />
						<span className="plan-checkbox"></span>
						Гардеробная
					</label>
				</li>
				<li className="filters-item">
					<label className="plan-label">
						<input className="plan-input visually-hidden" type="checkbox" name="bigLoggia" value="bigLoggia" onChange={handleChange} />
						<span className="plan-checkbox"></span>
						Большая лоджия
					</label>
				</li>
				<li className="filters-item">
					<label className="plan-label">
						<input className="plan-input visually-hidden" type="checkbox" name="studio" value="studio" onChange={handleChange} />
						<span className="plan-checkbox"></span>
						Кухня-гостиная
					</label>
				</li>
				<li className="filters-item">
					<label className="plan-label">
						<input className="plan-input visually-hidden" type="checkbox" name="laundry" value="laundry" onChange={handleChange} />
						<span className="plan-checkbox"></span>
						Прачечная
					</label>
				</li>
			</ul>
		</section>
		)
}

export default Plan;