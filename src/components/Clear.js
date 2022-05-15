import React from "react";

function Clear(props) {
	return(
		<button className="header__clear" onClick={props.onClick}>
			<span className="clear-text">Сбросить фильтры</span> 
		</button>
		)
}

export default Clear;