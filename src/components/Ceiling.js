import React from "react";

function Ceiling({monitorCeiling}) {
	function handleChange(event) {
		if (event.target.parentElement.parentElement.classList.contains("checked")) {
			event.target.parentElement.parentElement.classList.remove("checked")
			monitorCeiling('UNDO');
		} else {
			document.querySelectorAll(".Ceiling .filters-item").forEach(item => {
				item.classList.remove("checked")
			})
			event.target.parentElement.parentElement.classList.add("checked")
			monitorCeiling(event.target.value);
		}
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