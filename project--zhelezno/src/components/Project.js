import React from "react";

import filter from "./filter";

function Project() {

	function handleChange(event) {
		document.querySelectorAll(".card").forEach(card => {
			document.querySelectorAll(".Project .filters-item").forEach(item => {
				item.classList.remove("checked")
			})
			event.target.parentElement.parentElement.classList.add("checked")
			let project = card.querySelector(".card__location").innerHTML;
			if (event.target.value != project) {
				card.classList.remove("project-filtered")
			} else {
				card.classList.add("project-filtered")
			}
		})
		filter("project");
 }

	return(
		<section className="Project">
			<h3 className="section-title">Проект</h3>
			<ul className="filters-list filters-list--horizontal">
				<li className="filters-item">
					<label className="project-label">
						<input className="project-input visually-hidden" type="radio" name="project" value="ZNAK" onChange={handleChange} />
						<img className="project-image" src="./images/projects-logos/znak.png" width="16" height="16" alt="project znak logo"/>
						ZNAK
					</label>
				</li>
				<li className="filters-item">
					<label className="project-label">
						<input className="project-input visually-hidden" type="radio" name="project" value="«Железно на Володарского»" onChange={handleChange} />
						<img className="project-image" src="./images/projects-logos/lomonosov.png" width="16" height="16" alt="project lomonosov logo"/>
						Железно
					</label>
				</li>
				<li className="filters-item">
					<label className="project-label">
						<input className="project-input visually-hidden" type="radio" name="project" value="Васильки" onChange={handleChange} />
						<img className="project-image" src="./images/projects-logos/vasilki.png" width="16" height="16" alt="project vasilki logo"/>
						Васильки
					</label>
				</li>
				<li className="filters-item">
					<label className="project-label">
						<input className="project-input visually-hidden" type="radio" name="project" value="Ёлки-Park" onChange={handleChange} />
						<img className="project-image" src="./images/projects-logos/yolki.png" width="16" height="16" alt="project yolki logo"/>
						Ёлки-Park
					</label>
				</li>
			</ul>
		</section>
		)
}

export default Project;