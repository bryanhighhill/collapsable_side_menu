/**
 * 
 */
 
let menuCollapsed = "false";

function handleButtonClick() {
	const leftColumn = document.querySelector(".column-left");
	const rightColumn = document.querySelector(".column-right");
	const sideBarContent = document.querySelector(".sidebar-content");
	
	rightColumn.classList.toggle('enlarge-body');	 
	leftColumn.classList.toggle('collapse-sidebar');
	sideBarContent.classList.toggle('collapse-sidebar-content');
}
