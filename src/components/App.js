import React from "react";

import Card from "./Card";
import Header from "./Header"
import Rooms from "./Rooms";
import Plan from "./Plan";
import Project from "./Project";
import Release from "./Release";
import View from "./View";
import Ceiling from "./Ceiling";
import Price from "./Price";
import Meters from "./Meters";
import HeaderFilter from "./HeaderFilter";
import Clear from "./Clear";

import database from "../database"

function App() {
	const [projectState, setProjectState] = React.useState('');
	const [roomsState, setRoomsState] = React.useState('');
	const [releaseState, setReleaseState] = React.useState('');
	const [ceilingState, setCeilingState] = React.useState('');
	const [viewState, setViewState] = React.useState('');

	const [metersDownState, setMetersDownState] = React.useState('');
	const [metersUpState, setMetersUpState] = React.useState('');

	const [priceDownState, setPriceDownState] = React.useState('');
	const [priceUpState, setPriceUpState] = React.useState('');

	const [filtersState, setFiltersState] = React.useState({});

	function handleProjectChange(projectState) {
		setProjectState(projectState)
		if (projectState == 'UNDO') {
			delete filtersState['project']
		} else {
			setFiltersState(prev => ({...prev, project: projectState}))
		}
	}

	function handleRoomsChange(roomsState) {
		setRoomsState(roomsState)
		if (roomsState == 'UNDO') {
			delete filtersState['rooms']
		} else {
			setFiltersState(prev => ({...prev, rooms: roomsState}))
		}
	}

	function handleReleaseChange(releaseState) {
		setReleaseState(releaseState)
		if (releaseState == 'UNDO') {
			delete filtersState['release']
		} else {
			setFiltersState(prev => ({...prev, release: releaseState}))
		}
	}

	function handleCeilingChange(ceilingState) {
		setCeilingState(ceilingState)
		if (ceilingState == 'UNDO') {
			delete filtersState['ceiling']
		} else {
			setFiltersState(prev => ({...prev, ceiling: ceilingState}))
		}
	}

	function handleViewChange(viewState) {
		setViewState(viewState)
		setFiltersState(prev => ({...prev, view: viewState}))
	}

	function handleMetersChange(metersDownState, metersUpState) {
		setMetersDownState(metersDownState)
		setMetersUpState(metersUpState)
		setFiltersState(prev => ({...prev, metersDown: metersDownState, metersUp: metersUpState}))
	}

	function handlePriceChange(priceDownState, priceUpState) {
		setPriceDownState(priceDownState)
		setPriceUpState(priceUpState)
		setFiltersState(prev => ({...prev, priceDown: priceDownState, priceUp: priceUpState}))
	}

	function emptyState(state) {
		for (var i in state) {
				if (state.hasOwnProperty(i)) {
						return false;
				}
		}
		return true;
	}

	const cards = database.map((item) => {
		for (let filter in filtersState) {
			if (filtersState.hasOwnProperty(filter) && (filter != 'metersDown' && filter != 'metersUp' && filter != 'priceDown' && filter != 'priceUp')) {
				if (item[filter] == filtersState[filter]) {
					item.filtered = true;
				} else {
					item.filtered = false;
					break;
				}
			} else if (filter == 'metersDown' || filter === 'metersUp') {
				if (item.size <= filtersState.metersUp && item.size >= filtersState.metersDown) {
					item.filtered = true;
				} else {
					item.filtered = false;
					break;
				}
			} else if (filter == 'priceDown' || filter === 'priceUp') {
				if (item.lowestPrice >= filtersState.priceDown*1000000 && item.highestPrice <= filtersState.priceUp*1000000) {
					item.filtered = true;
				} else {
					item.filtered = false;
					break;
				}
			}
		}
		if (emptyState(filtersState)) {
			database.map((item) => {item.filtered = true})
		}
		if (item.filtered) {
			return(
				<Card
					key={item.id}
					item={item}
				/>
			)
		}
	})
	
	const headerFiltersArr = [];
	for (let filter in filtersState) {
		if (filter == 'metersDown') {
			headerFiltersArr.push([filter, 'площадь от ' + filtersState[filter] + 'м²'])
		} else if (filter == 'metersUp') {
			headerFiltersArr.push([filter, 'площадь до ' + filtersState[filter] + 'м²'])
		} else if (filter == 'priceDown') {
			headerFiltersArr.push([filter, 'цена от' + filtersState[filter] + 'млн'])
		} else if (filter == 'priceUp') {
			headerFiltersArr.push([filter, 'цена до ' + filtersState[filter] + 'млн'])
		} else if (filter == 'rooms') {
			headerFiltersArr.push([filter, 'комнат: ' + filtersState[filter]])
		} else if (filter == 'release') {
			headerFiltersArr.push([filter, 'дом сдан: ' + filtersState[filter]])
		} else if (filter == 'view') {
			headerFiltersArr.push([filter, 'вид ' + filtersState[filter]])
		} else if (filter == 'ceiling') {
			headerFiltersArr.push([filter, 'потолки: ' + filtersState[filter] + 'м'])
		} else if (filter == 'project') {
			headerFiltersArr.push([filter, filtersState[filter]])
		} 
	}

	const headerFilters = headerFiltersArr.map(item => {
		return(
			<HeaderFilter
				key={item[0]}
				value={item[1]}
			/>
		)
	})

	function openMenu() {
		document.querySelector('.header__burger').classList.toggle('header__burger--active')
		document.querySelector('.filters').classList.toggle('filters--active')
		document.querySelector('.cards-list').classList.toggle('cards-list--active')
	}

	function clearFilters() {
		setProjectState();
		setRoomsState();
		setReleaseState();
		setCeilingState();
		setViewState();
		setMetersDownState();
		setMetersUpState();
		setPriceDownState();
		setPriceUpState();
		setFiltersState({});
		let checkedItems = document.querySelectorAll('.checked');
		checkedItems.forEach(item => {
			item.classList.remove('checked');
		})
	}

	return(
		<div className="workspace">
			<div className="header">
				<header className="header-heading">
					<Header />
					<Clear onClick={clearFilters} />
					<button className="header__burger" onClick={openMenu}></button>
				</header>
				<div className="filters-highlights">
					{headerFilters}
				</div>
			</div>
			<div className="results">
				<div className="cards-list">
					{cards}
				</div>
			</div>
			<form className="filters">
				<Rooms monitorRooms={handleRoomsChange} />
				<Meters monitorMeters={handleMetersChange} />
				<Project monitorProject={handleProjectChange} />
				<Price monitorPrice={handlePriceChange} />
				<Release monitorRelease={handleReleaseChange} />
				<View monitorView={handleViewChange} />
				<Ceiling monitorCeiling={handleCeilingChange} />
			</form>
		</div>
		)
}

export default App;