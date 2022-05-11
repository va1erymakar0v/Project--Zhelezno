import React from "react";
import filter from "./filter";

function Meters(props) {	
	const [startMeters, setStartMeters] = React.useState(24);
	const [finalMeters, setFinalMeters] = React.useState(100);
	

	function handleChange(event) {
		const lowerMeters = document.querySelector("#lower-meters");
		const upperMeters = document.querySelector("#upper-meters");
		const lowerSlider = document.querySelector('#lower-m');
		const upperSlider = document.querySelector('#upper-m');
		let lowerVal = Number(lowerSlider.value);
		let upperVal = Number(upperSlider.value);

		lowerMeters.onchange = function() {
			lowerSlider.value = lowerMeters.value;
		}

		upperMeters.onchange = function() {
			upperSlider.value = upperMeters.value;
		}

		upperSlider.oninput = function() {
			lowerVal = Number(lowerSlider.value);
			upperVal = Number(upperSlider.value);
			
			if (upperVal < lowerVal + 4) {
					lowerSlider.value = upperVal - 4;
					
					if (lowerVal == lowerSlider.min) {
						upperSlider.value = 4;
					}
			}
			setFinalMeters(upperVal);
			upperMeters.value = finalMeters;
		};


		lowerSlider.oninput = function() {
			lowerVal = Number(lowerSlider.value);
			upperVal = Number(upperSlider.value);
			
			if (lowerVal > upperVal - 4) {
					upperSlider.value = lowerVal + 4;
					
					if (upperVal == upperSlider.max) {
						lowerSlider.value = Number(upperSlider.max) - 4;
					}

			}
			setStartMeters(lowerVal);
			lowerMeters.value = startMeters;
		};

		document.querySelectorAll(".card").forEach(card => {
			let meters = Number(card.querySelector(".card__size").innerHTML);
			if (meters <= upperVal && meters >= lowerVal) {
				card.classList.add("meters-filtered")
			} else {
				card.classList.remove("meters-filtered")
			}
		})
		filter("meters");
	}

	return(
		<section className="Meters">
			<h3 className="section-title">Размер, м²</h3>
			<div className="meters-result">
			<input className="meters-number" type="number" name="low-meters" id="lower-meters" step={1} value={startMeters} onChange={handleChange} />
			<input className="meters-number" type="number" name="high-meters" id="upper-meters" step={1} value={finalMeters} onChange={handleChange} />
			</div>
			<span className="multi-range">
				<input className="meters-input" type="range" min="23" max="140" step={1} id="lower-m" value={startMeters} onChange={handleChange} />
				<input className="meters-input" type="range" min="23" max="140" step={1} id="upper-m" value={finalMeters} onChange={handleChange} />
			</span>
		</section>
		)
}

export default Meters;