/*** VALIDATE FORM MODAL ***/

	// DOM ELEMENTS
	const firstname = document.querySelector("#firstname");
	const lastname = document.querySelector("#lastname");
	const mail = document.querySelector("#email");
	const birthdate = document.querySelector("#birthdate");
	const quantity = document.querySelector("#quantity");
	const location1 = document.querySelector("#location1");
	const location2 = document.querySelector("#location2");
	const location3 = document.querySelector("#location3");
	const location4 = document.querySelector("#location4");
	const location5 = document.querySelector("#location5");
	const location6 = document.querySelector("#location6");
	const checkbox1 = document.querySelector("#checkbox1");
	const checkbox2 = document.querySelector("#checkbox2");


	function formFirstname () {

		const inputEmpty = "Le champ est vide, veuillez entrer votre prénom";
		const inputNotValid = "Le champ Prénom doit avoir un minimum de 2 caractères";

		if( isNaN( parseInt(firstname.value) ) ) {
			document.querySelector(".formData__firstname").setAttribute("data-error", inputEmpty);
			document.querySelector(".formData__firstname").setAttribute("data-error-visible", true);

			console.log( parseInt(firstname.value), typeof parseInt(firstname.value), inputEmpty );

		} else if ( parseInt(firstname.value) < 2 ) {
			document.querySelector(".formData__firstname").setAttribute("data-error", inputNotValid);
			document.querySelector(".formData__firstname").setAttribute("data-error-visible", true);

			console.log( parseInt(firstname.value), typeof parseInt(firstname.value), inputNotValid );
			
		} else {
			document.querySelector(".formData__firstname").setAttribute("data-error", "");
			document.querySelector(".formData__firstname").setAttribute("data-error-visible", false);

			console.log("Le champ est bien rempli");
			console.log( parseInt(firstname.value), typeof parseInt(firstname.value) );
		}
	}

	firstname.addEventListener("click", formFirstname, true);

	function formLastname (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}

	function formMail (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}

	function formBirthdate (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}

	function formQuantityTournaments (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}

	function formCitys (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}

	function formCheckboxLegal (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}

	function formCheckboxNews (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}

	// Function for form verification before submiting it and submit it in case of conform
	function formCalls () {

		/*
		* Call here all sub-functions for validating the form
		formFirstname();
		formLastname();
		formMail();
		formBirthdate();
		formQuantityTournaments();
		formCitys();
		formCheckboxLegal();
		formCheckboxNews();
		*/

	}

	// Function for verifying clic on submit button
	/*function formSubmit() {
		// Testing if the user clic on submit button
		if () {

		} else {

		}
	}*/

	// Disable default Event (Browser reloading..)
	/*formElement.addEventListener("submit", (event) => {
		event.preventDefault();
	});
	
	button1.addEventListener("click", (event) => {
	// do something...
		e.target.classList.add("disabled");
	});*/

/*** VALIDATE FORM MODAL ***/