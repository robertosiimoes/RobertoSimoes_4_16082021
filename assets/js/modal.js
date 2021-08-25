/*** SCRIPTS MODAL ***/

	// DOM Elements
	const modalbg = document.querySelector(".bground");
	const modalBtn = document.querySelectorAll(".modal-btn");
	const formData = document.querySelectorAll(".formData");
	const btnCloseModal = document.querySelector(".content .close");

	// Function to Edit Nav
	function editNav() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}

	// Launch Modal Event
	modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

	// Lanch Modal Form
	function launchModal() {
		modalbg.style.opacity = "1";
		modalbg.style.transform = "translateY(0)";
	}

	// Close Modal Event
	btnCloseModal.forEach((btn) => btn.removeEventListener("click", closeModal));

	// Close Modal Form
	function closeModal() {
		modalbg.style.opacity = "0";
		modalbg.style.transform = "translateY(-100%)";
	}

/*** SCRIPTS MODAL ***/
