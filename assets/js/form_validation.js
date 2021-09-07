/*** VALIDATE FORM MODAL ***/

	/*** DOM ELEMENS ***/

		/*** FORM DATA ***/

			const formFirstname = document.querySelector(' .formData[data-input="firstname"] ');
			const formLastname  = document.querySelector(' .formData[data-input="lastname"] ');
			const formMail      = document.querySelector(' .formData[data-input="mail"] ');
			const formBirthdate = document.querySelector(' .formData[data-input="birthdate"] ');
			const formQuantity  = document.querySelector(' .formData[data-input="quantity"] ');
			const formLocation1 = document.querySelector(' .formData[data-input="location1"] ');
			const formLocation2 = document.querySelector(' .formData[data-input="location2"] ');
			const formLocation3 = document.querySelector(' .formData[data-input="location3"] ');
			const formLocation4 = document.querySelector(' .formData[data-input="location4"] ');
			const formLocation5 = document.querySelector(' .formData[data-input="location5"] ');
			const formLocation6 = document.querySelector(' .formData[data-input="location6"] ');
			const formCheckbox1 = document.querySelector(' .formData[data-input="checkbox1"] ');
			const formCheckbox2 = document.querySelector(' .formData[data-input="checkbox2"] ');

		/*** FORM DATA ***/

		/*** INPUTS ***/

			const firstname = document.querySelector("#firstname");
			const lastname  = document.querySelector("#lastname");
			const mail      = document.querySelector("#email");
			const birthdate = document.querySelector("#birthdate");
			const quantity  = document.querySelector("#quantity");
			const location1 = document.querySelector("#location1");
			const location2 = document.querySelector("#location2");
			const location3 = document.querySelector("#location3");
			const location4 = document.querySelector("#location4");
			const location5 = document.querySelector("#location5");
			const location6 = document.querySelector("#location6");
			const checkbox1 = document.querySelector("#checkbox1");
			const checkbox2 = document.querySelector("#checkbox2");

		/*** INPUTS ***/

		/*** BUTTONS ***/

			const btnSubmit = document.querySelector(".btn-submit");

		/*** BUTTONS ***/
	
	/*** DOM ELEMENS ***/


	/*** VERIFY IDENTITY ***/
	function verifyIdentity (inputIdentity, textIdentity, formIdentity) {

		let inputVerif = inputIdentity;
		let inputText = textIdentity;
		let formVerif = formIdentity;

		const regVerif = /[!@#$%^&*()_+\-=[\]{};:|,.<>?/\'\"]/g;

		const inputEmpty = "Le champ est vide, veuillez entrer votre " + inputText.toLowerCase() + " ";
		const inputNotValid = "Le champ " + inputText + " doit avoir un minimum de 2 caractères";
		const inputValid = "Le champ est bien rempli";
		const inputInvalid = "Les caractères spéciaux ne sont pas autorisés";

		let inputValue = parseInt(inputVerif.value.trim().length);
		let inputWord = toString(inputVerif.value);

		formVerif.setAttribute("data-error-visible", true);
		formVerif.setAttribute("data-valid", false);
		inputVerif.setAttribute("data-valid", false);

		if( isNaN( inputValue ) ) {
			formVerif.setAttribute("data-error", inputEmpty);
		}
		else if ( inputValue > 0 && inputValue < 2 ) {
			formVerif.setAttribute("data-error", inputNotValid);
		}
		else if ( inputValue >= 2 ) {

			//console.log( inputWord.match(regVerif) );

			if ( regVerif.test(inputWord) ) {
				formVerif.setAttribute("data-error", inputValid);
				formVerif.setAttribute("data-valid", true);
				inputVerif.setAttribute("data-valid", true);
			} else {
				formVerif.setAttribute("data-error", inputInvalid);
			}
			
		} else {
			console.log("Erreur sur le champ");
		}

	}

	firstname.addEventListener('keyup', function(){ verifyIdentity(firstname, 'Prénom', formFirstname) } , true);
	lastname.addEventListener('keyup', function(){ verifyIdentity(lastname, 'Nom', formLastname) } , true);



	/*

	function verifyMail (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}

	function verifyBirthdate (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}

	function verifyQuantityTournaments (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}

	function verifyCitys (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}

	function verifyCheckboxLegal (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}

	function verifyCheckboxNews (input) {
		if (input) {

		} else {
			// Afficher le message d'erreur sur l'input
		}
	}*/

	// Function for form verification before submiting it and submit it in case of conform
	//function verifyCalls () {

		/*
		* Call here all sub-functions for validating the form
		*
		*/

	//}

	// Function for verifying clic on submit button
	/*function formSubmit() {
		// Testing if the user clic on submit button
		if () {

		} else {

		}
	}*/

/*** VALIDATE FORM MODAL ***/