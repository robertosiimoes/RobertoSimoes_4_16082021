/*** SCRIPTS MODAL ***/

	/* DOM Elements */
	const modalContainer = document.querySelector(".bground");
	const modalBtnOpen = document.querySelectorAll(".modal-btn");
	const modalBtnClose = document.querySelector(".content .close");
	const formData = document.querySelectorAll(".formData");
	const btnSubmit = document.querySelector(".btn-submit");

	/* Variables */
	let toggleModal = false;

	/* Function to Edit Nav */
	function editNav() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}

	/*
	* Function for opening/closing modal
	* If => Close modal
	* Else => Open modal
	*/
	function openOrCloseModal() {
		
		if (toggleModal) {
			modalBtnClose.forEach( (btn) => btn.addEventListener("click", closeModal) );
		} else {
			modalBtnOpen.forEach( (btn) => btn.addEventListener("click", launchModal) );
			toggleModal = !toggleModal;
		}

	}

	// Lanch Modal Form
	function launchModal() {
		modalContainer.classList.add("bground-open");
		modalContainer.classList.remove("bground-close");
	}

	// Close Modal Form
	function closeModal() {
		modalContainer.classList.add("bground-close");
		modalContainer.classList.remove("bground-open");
	}

	// Launching functions
	openOrCloseModal();

	

	// Function for form verification before submiting it and submit it in case of conform
	/*function submitForm() {
		// Testing if the user clic on submit button
		if () {

		} else {

		}
	}*/

/*** SCRIPTS MODAL ***/
