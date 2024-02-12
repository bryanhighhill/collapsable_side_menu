/**
 * 
 */
 
let menuCollapsed = "false";

function handleButtonClick() {
	const leftColumn = document.querySelector(".column-left");
	const rightColumn = document.querySelector(".column-right");
	
	console.log(` left and right columns ${leftColumn} + ${rightColumn}`)
	
	leftColumn.classList.toggle('collapse-sidebar');	 
}
