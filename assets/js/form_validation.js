/*** VALIDATE FORM MODAL ***/

	/*** DOM ELEMENS ***/

		/*** FORM DATA ***/

			const formFirstname = document.querySelector(' .formData[data-input="firstname"] ');
			const formLastname  = document.querySelector(' .formData[data-input="lastname"] ');
			const formMail      = document.querySelector(' .formData[data-input="email"] ');
			const formBirthdate = document.querySelector(' .formData[data-input="birthdate"] ');
			const formQuantity  = document.querySelector(' .formData[data-input="quantity"] ');
			const formLocation1 = document.querySelector(' .formData[data-input="location1"] ');
			const formCheckbox1 = document.querySelector(' .formData[data-input="checkbox1"] ');

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

			// Déclarer une seule variable avec tableau pour boucler dessus

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

			//const regVerif = /[!@#$%^&*()_+\-=\[\]{};:|,.<>?\/\'\"]/g;

			const inputEmpty = "Le champ est vide, veuillez entrer votre " + inputText.toLowerCase() + " ";
			const inputNotValid = "Le champ " + inputText + " doit avoir un minimum de 2 caractères";
			const inputValid = "Le champ est bien rempli";
			const inputInvalid = "Les caractères spéciaux ne sont pas autorisés";

			let inputValue = parseInt(inputVerif.value.trim().length);
			let inputWord = toString(inputVerif.value);

			formVerif.setAttribute("data-error-visible", true);
			formVerif.setAttribute("data-error", inputEmpty);
			formVerif.setAttribute("data-valid", false);
			inputVerif.setAttribute("data-valid", false);

			if ( isNaN( inputValue ) ) {
				formVerif.setAttribute("data-error", inputEmpty);
			}
			else if ( inputValue > 0 && inputValue < 2 ) {
				formVerif.setAttribute("data-error", inputNotValid);
			}
			else if ( inputValue >= 2 ) {

				if ( regVerif.test(inputWord) ) {
					formVerif.setAttribute("data-error", inputValid);
					formVerif.setAttribute("data-valid", true);
					inputVerif.setAttribute("data-valid", true);
				}
				else {
					formVerif.setAttribute("data-error", inputInvalid);
				}
			}
			else {
				//console.log("Erreur sur le champ");
			}
		}

	/*** VERIFY IDENTITY ***/


	/*** VERIFY MAIL ***/

		function verifyMail (inputIdentity, textIdentity, formIdentity) {

			let inputVerif = inputIdentity;
			let inputText = textIdentity;
			let formVerif = formIdentity;

			const regVerif = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

			console.log(regVerif, typeof regVerif);

			const inputEmpty = "Le champ est vide, veuillez entrer votre " + inputText.toLowerCase() + " ";
			const inputValid = "Le champ est bien rempli";
			const inputInvalid = "Les caractères spéciaux ne sont pas autorisés";

			let inputValue = inputIdentity.value;

			let inputWord = toString(inputVerif.value);

			if ( regVerif.test(inputWord) ) {
				formVerif.setAttribute("data-error", inputValid);
				formVerif.setAttribute("data-valid", true);
				inputVerif.setAttribute("data-valid", true);
			}
			else {
				formVerif.setAttribute("data-error", inputInvalid);
			}

			console.log(inputValue, typeof inputValue);
		}

	/*** VERIFY MAIL ***/

	/*

	function verifyBirthdate (input) {
		// 
	}

	function verifyQuantityTournaments (input) {
		// 
	}

	function verifyCitys (input) {
		// 
	}

	function verifyCheckboxLegal (input) {
		// 
	}

	function verifyCheckboxNews (input) {
		// 
	}

	function verifyCalls () {
		//
	}

	function formSubmit() {

		btnSubmit.addEventListener('submit', function(event) {
			event.preventDefault();
		});
	}

	*/

	firstname.addEventListener('input', function(){ verifyIdentity(firstname, 'Prénom', formFirstname) } , true);
	lastname.addEventListener('input', function(){ verifyIdentity(lastname, 'Nom', formLastname) } , true);
	mail.addEventListener('input', function(){ verifyMail(mail, 'Email', formMail) } , true );

/*** VALIDATE FORM MODAL ***/