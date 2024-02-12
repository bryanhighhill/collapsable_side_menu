/**
 * 
 */
 
let menuCollapsed = "false";

function handleButtonClick() {
	const leftColumn = document.querySelector(".column-left");
	const rightColumn = document.querySelector(".column-right");
	
	rightColumn.classList.toggle('enlarge-body');	 
	leftColumn.classList.toggle('collapse-sidebar');
}
