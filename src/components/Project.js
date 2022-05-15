import React from "react";

function Project({monitorProject}) {

	function handleProjectChange(event) {
		if (event.target.parentElement.parentElement.classList.contains("checked")) {
			event.target.parentElement.parentElement.classList.remove("checked")
			monitorProject('UNDO');
		} else {
			document.querySelectorAll(".Project .filters-item").forEach(item => {
				item.classList.remove("checked")
			})
			event.target.parentElement.parentElement.classList.add("checked")
			monitorProject(event.target.value);
		}
	}

	return(
		<section className="Project">
			<h3 className="section-title">Проект</h3>
			<ul className="filters-list filters-list--horizontal">
				<li className="filters-item">
					<label className="project-label">
						<input className="project-input visually-hidden" type="checkbox" name="ZNAK" value="«ZNAK»" onChange={handleProjectChange} />
						<img className="project-image" src="./images/projects-logos/znak.png" width="16" height="16" alt="project znak logo"/>
						ZNAK
					</label>
				</li>
				<li className="filters-item">
					<label className="project-label">
						<input className="project-input visually-hidden" type="checkbox" name="Zhelezno" value="«Железно на Володарского»" onChange={handleProjectChange} />
						<img className="project-image" src="./images/projects-logos/lomonosov.png" width="16" height="16" alt="project lomonosov logo"/>
						Железно
					</label>
				</li>
				<li className="filters-item">
					<label className="project-label">
						<input className="project-input visually-hidden" type="checkbox" name="Vasilky" value="«Васильки»" onChange={handleProjectChange} />
						<img className="project-image" src="./images/projects-logos/vasilki.png" width="16" height="16" alt="project vasilki logo"/>
						Васильки
					</label>
				</li>
				<li className="filters-item">
					<label className="project-label">
						<input className="project-input visually-hidden" type="checkbox" name="Yolki" value="«Ёлки-Park»" onChange={handleProjectChange} />
						<img className="project-image" src="./images/projects-logos/yolki.png" width="16" height="16" alt="project yolki logo"/>
						Ёлки-Park
					</label>
				</li>
			</ul>
		</section>
		)
}

export default Project;