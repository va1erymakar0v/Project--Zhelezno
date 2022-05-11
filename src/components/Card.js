import React from "react";

function Card(props) {
	const [like, updateLike] = React.useState(false);
	
	let currentLike = like ? "like-empty" : "like";

	function toggleLike() {
		updateLike(prevState => !prevState);   
	}

	return(
		<div className="card card--filtered">
			<div className="card__inner">
				<img className="card__image-main" width="245" height="192" src={`../images/${props.item.image}.png`} alt="Основной план" />
				<img className="card__image-plan" width="245" height="192" src={`../images/${props.item.plan}.png`} alt="Чертеж" />
				<div className="card__info">
					<span className="card__title">{props.item.title}</span>
					<span className="card__location">{props.item.location}</span>
					<div className="card__offer">
						<span className="card__capacity">{props.item.capacity}</span>
						<span className="card__price">от {(props.item.lowestPrice / 1000000).toFixed(1)} млн</span>
					</div>
					<span className="card__like" onClick={toggleLike}>
						<img src={`./images/${currentLike}.svg`} />
					</span>
				</div>
				<div className="card__action">
					<button className="card__button">Выбери свою</button>
				</div>
				<div className="card__data">
					<span className="card__size">{props.item.size}</span>
					<span className="card__rooms">{props.item.rooms}</span>
					<span className="card__lowest">{props.item.lowestPrice}</span>
					<span className="card__highest">{props.item.highestPrice}</span>
					<span className="card__release">{props.item.release}</span>
					<span className="card__ceiling">{props.item.ceiling}</span>
					<span className="card__view">{props.item.view}</span>
					{ /*<span className="card__toilets">{props.item.toilets}</span>
					<span className="card__wardrobe">{props.item.wardrobe}</span>
					<span className="card__loggia">{props.item.bigLoggia}</span>
					<span className="card__studio">{props.item.studio}</span>
					<span className="card__laundry">{props.item.laundry}</span>	 */}
				</div>
			</div>
		</div>
	)
}

export default Card;