function filter(quality) {
	document.querySelectorAll(".card").forEach(card => {
		card.classList.remove("card--filtered")
	})

	let counter = 0;
	document.querySelectorAll(".card").forEach(card => {
		if (card.classList.length > counter) {
			counter = card.classList.length;
		}
	})
	
	document.querySelectorAll(".card").forEach(card => {
		console.log("length = ", card.classList.length, "counter = ", counter)

		if (card.classList.contains(`${quality}-filtered`) && (card.classList.length == counter || card.classList.length == 1)) {
			card.classList.add("card--filtered")
		}
	})
}

export default filter;