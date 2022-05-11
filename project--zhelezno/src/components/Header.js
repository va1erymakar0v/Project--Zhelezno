import React from "react";

import HeaderFilters from "./HeaderFilters";

function Header() {

	return(
		<header className="header">
			<span className="header__title">Найдено {document.querySelectorAll(".card--filtered").length} планировок</span>
			{/* <HeaderFilters /> */}
		</header>
		)
}

export default Header;