/**
 * 
 */
let menuCollapsed = false;
 
function handleButtonClick() {
	let leftColumn = document.getElementById("1");
	 
	if (menuCollapsed = true) {
	    leftColumn.style.display = "flex";
		console.log(`you opened the menu with: ${menuCollapsed}`);
		menuCollapsed = true;
	} else {
	    leftColumn.style.display = "none";
		console.log(`you opened the menu with: ${menuCollapsed}`);
		menuCollapsed = false;
	}
 }
