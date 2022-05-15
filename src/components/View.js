import React from "react";	

function View({monitorView}) {
	
	function handleChange(event) {
		monitorView(event.target.value);
	}

	return(
		<section className="View">
			<h3 className="section-title">Вид из окна</h3>
			<ul className="filters-list">
				<li className="filters-item">
					<label className="view-label">
						<input className="view-input visually-hidden" type="radio" name="view" value="Панорамный" onChange={handleChange} />
						<span className="view-checkbox"></span>
						Панорамный
					</label>
				</li>
				<li className="filters-item">
					<label className="view-label">
						<input className="view-input visually-hidden" type="radio" name="view" value="Во двор" onChange={handleChange} />
						<span className="view-checkbox"></span>
						Двор
					</label>
				</li>
				<li className="filters-item">
					<label className="view-label">
						<input className="view-input visually-hidden" type="radio" name="view" value="На парк" onChange={handleChange} />
						<span className="view-checkbox"></span>
						Парк
					</label>
				</li>
				<li className="filters-item">
					<label className="view-label">
						<input className="view-input visually-hidden" type="radio" name="view" value="На город" onChange={handleChange} />
						<span className="view-checkbox"></span>
						Город
					</label>
				</li>
			</ul>
		</section>
		)
}

export default View;