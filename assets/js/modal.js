/*** SCRIPTS MODAL ***/

	// DOM ELEMENTS
	const modalContainer = document.querySelector(".bground");
	const modalBtnOpen = document.querySelectorAll(".modal-btn");
	const modalBtnClose = document.querySelector(".content .close");


	// VARIABLES
	let toggleModal = false;


	// FUNCTION TO EDIT NAV
	function editNav() {
		var x = document.getElementById("o-header");
		var btn = document.querySelector(".o-btn__nav");
		if (x.className === "o-header") {
			x.className += " responsive";
			btn.innerHTML = "<i class='fa fa-times'></i>";
		} else {
			x.className = "o-header";
			btn.innerHTML = "<i class='fa fa-bars'></i>";
		}
	}


	// FUNCTION FOR OPENING / CLOSING MODAL
	function openOrCloseModal() {
		
		if (toggleModal) {
			modalBtnClose.forEach( (btn) => btn.addEventListener("click", closeModal) );
		} else {
			modalBtnOpen.forEach( (btn) => btn.addEventListener("click", launchModal) );
			toggleModal = !toggleModal;
		}

	}


	// OPEN MODAL
	function launchModal() {
		modalContainer.classList.add("bground-open");
		modalContainer.classList.remove("bground-close");
	}


	// CLOSE MODAL
	function closeModal() {
		modalContainer.classList.add("bground-close");
		modalContainer.classList.remove("bground-open");
	}

/*** SCRIPTS MODAL ***/
