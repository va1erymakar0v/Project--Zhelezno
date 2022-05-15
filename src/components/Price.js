import React from "react";

function Price({monitorPrice}) {	
	const [startPrice, setStartPrice] = React.useState(1.5);
	const [finalPrice, setFinalPrice] = React.useState(10.5);
	

	function handleChange(event) {
		const lowerPrice = document.querySelector("#lower-price");
		const upperPrice = document.querySelector("#upper-price");
		const lowerSlider = document.querySelector('#lower');
		const upperSlider = document.querySelector('#upper');
		let lowerVal = Number(lowerSlider.value);
		let upperVal = Number(upperSlider.value);

		lowerPrice.onchange = function() {
			lowerSlider.value = lowerPrice.value;
		}

		upperPrice.onchange = function() {
			upperSlider.value = upperPrice.value;
		}

		upperSlider.oninput = function() {
			lowerVal = Number(lowerSlider.value);
			upperVal = Number(upperSlider.value);
			
			if (upperVal < lowerVal + 0.2) {
					lowerSlider.value = upperVal - 0.2;
					
					if (lowerVal === lowerSlider.min) {
						upperSlider.value = 0.2;
					}
			}
			setStartPrice(lowerSlider.value);
			setFinalPrice(upperVal);
			upperPrice.value = finalPrice;
		};


		lowerSlider.oninput = function() {
			lowerVal = Number(lowerSlider.value);
			upperVal = Number(upperSlider.value);
			
			if (lowerVal > upperVal - 0.2) {
					upperSlider.value = lowerVal + 0.2;
					
					if (upperVal === upperSlider.max) {
						lowerSlider.value = Number(upperSlider.max) - 0.2;
					}

			}
			setStartPrice(lowerVal);
			setFinalPrice(upperSlider.value);
			lowerPrice.value = startPrice;
		};

		// document.querySelectorAll(".card").forEach(card => {
		// 	let lowPrice = Number(card.querySelector(".card__lowest").innerHTML);
		// 	let highPrice = Number(card.querySelector(".card__highest").innerHTML);
		// 	if (highPrice <= upperVal*1000000 && lowPrice >= lowerVal*1000000) {
		// 		card.classList.add("price-filtered")
		// 	} else {
		// 		card.classList.remove("price-filtered")
		// 	}
		// })

		monitorPrice(lowerVal, upperVal);
	}

	return(
		<section className="Price">
			<h3 className="section-title">Стоимость, млн ₽</h3>
			<div className="price-result">
			<input className="price-number" type="number" name="low-price" id="lower-price" step={0.1} value={startPrice} onChange={handleChange} />
			<input className="price-number" type="number" name="high-price" id="upper-price" step={0.1} value={finalPrice} onChange={handleChange} />
			</div>
			<span className="multi-range">
				<input className="price-input" type="range" min="1.5" max="10.5" step={0.1} id="lower" value={startPrice} onChange={handleChange} />
				<input className="price-input" type="range" min="1.5" max="10.5" step={0.1} id="upper" value={finalPrice} onChange={handleChange} />
			</span>
		</section>
		)
}

export default Price;