/*** VALIDATE FORM MODAL ***/

	/*** DOM ELEMENS ***/

		/*** FORM DATA ***/

			const formFirstname = document.querySelector(' .formData[data-input="firstname"] ');
			const formLastname  = document.querySelector(' .formData[data-input="lastname"] ');
			const formMail      = document.querySelector(' .formData[data-input="email"] ');
			const formBirthdate = document.querySelector(' .formData[data-input="birthdate"] ');
			const formQuantity  = document.querySelector(' .formData[data-input="quantity"] ');
			const formLocation1 = document.querySelector(' .formData[data-input="location"] ');
			const formCheckbox1 = document.querySelector(' .formData[data-input="checkbox1"] ');

		/*** FORM DATA ***/

		/*** INPUTS AND BUTTONS ***/

			const firstname = document.querySelector("#firstname");
			const lastname  = document.querySelector("#lastname");
			const mail      = document.querySelector("#email");
			const birthdate = document.querySelector("#birthdate");
			const quantity  = document.querySelector("#quantity");

			// Getting all the inputs checkbox for locations
			const locations = document.querySelectorAll(" .checkbox-input[name='location'] ");

			// Getting the checkboxs for agree and newsletter
			const checkboxs = document.querySelectorAll(" .checkbox-input[type='checkbox'] ");

			// Buttons for submitting form
			const btnSubmit = document.querySelector(".btn-submit");
		
		/*** INPUTS AND BUTTONS ***/

		/*** REGEX ***/

			const regIdentity = /[!@#$%^&*()_+\-=\[\]{};:|,<.>?\/\'\"\d]/g;

			const regMail = /(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@\w+[.-]?\w*\.[a-zA-Z]{2,3}\b/;

			const regBirth = /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/ ;

		/*** REGEX ***/

	
	/*** DOM ELEMENS ***/


	/*** PRINT MESSAGE ***/

		function printMessage(statut, text) {

			let messageToReturn = "";

			switch (statut) {
				case "empty":
					messageToReturn = "Le champ est vide, veuillez entrer votre " + text.toLowerCase() + " ";
					return messageToReturn;
					break;
				case "notvalid":
					messageToReturn = "Le champ " + text + " doit avoir un minimum de 2 caractères";
					return messageToReturn;
					break;
				case "invalid":
					messageToReturn = "Les caractères spéciaux et les chiffres ne sont pas autorisés";
					return messageToReturn;
					break;
				case "valid":
					messageToReturn = "Le champ est bien rempli";
					return messageToReturn;
					break;
				case "other":
					messageToReturn = "Le champ a rencontré une erreur imprévue";
					return messageToReturn;
				case "invalid-birthdate":
					messageToReturn = "Veuillez saisir une date de naissance valide au format jj / mm / aaaa";
					return messageToReturn;
				default:
					break;
			}
		}

	/*** PRINT MESSAGE ***/


	/*** INITIALIZE FIELD ***/

		function initializeField(input, text, formData, message) {
			formData.setAttribute("data-error-visible", true);
			formData.setAttribute("data-valid", false);
			input.setAttribute("data-valid", false);
		}

	/*** INITIALIZE FIELD ***/


	/*** VERIFY IDENTITY ***/

		// function verifyIdentity (inputIdentity, textIdentity, formIdentity) {

		// 	let inputValue = parseInt(inputIdentity.value.length);
		// 	let inputWord = inputIdentity.value;

		// 	initializeField(inputIdentity, textIdentity, formIdentity, "empty");
		// 	formIdentity.setAttribute("data-error", printMessage("empty", textIdentity));

		// 	if ( isNaN( inputValue ) || inputValue === 0 ) {
		// 		formIdentity.setAttribute("data-error", printMessage("empty", textIdentity));
		// 	}
		// 	else if ( inputValue > 0 && inputValue < 2 ) {
		// 		formIdentity.setAttribute("data-error", printMessage("notvalid", textIdentity));
		// 	}
		// 	else if ( inputValue >= 2 ) {

		// 		if ( regIdentity.test(inputWord) ) {
		// 			formIdentity.setAttribute("data-error", printMessage("invalid"));
		// 		}
		// 		else {
		// 			formIdentity.setAttribute("data-error", printMessage("valid"));
		// 			formIdentity.setAttribute("data-valid", true);
		// 			inputIdentity.setAttribute("data-valid", true);
		// 		}
		// 	}
		// 	else {
		// 		formIdentity.setAttribute("data-error", printMessage("other"));
		// 	}
		// }

	/*** VERIFY IDENTITY ***/


	/*** VERIFY MAIL ***/

		function verifyMail (inputIdentity, textIdentity, formIdentity) {

		}

	/*** VERIFY MAIL ***/

	
	/*** VERIFY BIRTHDATE ***/

		// function verifyBirthdate (inputIdentity, textIdentity, formIdentity) {

		// 	let inputLength = inputIdentity.value.length;
		// 	let inputValue = inputIdentity.value;

		// 	initializeField(inputIdentity, textIdentity, formIdentity, "empty");

		// 	if ( inputLength < 10 || inputLength > 10 ) {
		// 		formIdentity.setAttribute("data-error", printMessage("invalid-birthdate", textIdentity));
		// 	}
		// 	else if ( inputLength === 10 ) {

		// 		let newBirthdate = inputValue.split('-').reverse().join('-');

		// 		if ( regBirth.test(newBirthdate) == false ) {
		// 			formIdentity.setAttribute("data-error", printMessage("invalid-birthdate"));
		// 		}
		// 		else {
		// 			formIdentity.setAttribute("data-error", printMessage("valid"));
		// 			formIdentity.setAttribute("data-valid", true);
		// 			inputIdentity.setAttribute("data-valid", true);
		// 		}
		// 	}
		// 	else {
		// 		formIdentity.setAttribute("data-error", printMessage("other"));
		// 	}
			
		// }

	/*** VERIFY BIRTHDATE ***/


	/*** VERIFY QUANTITY TOURNAMENTS ***/
	
		// function verifyQuantityTournaments (input) {
			
		// }

	/*** VERIFY QUANTITY TOURNAMENTS ***/


	/*** VERIFY CITYS ***/

		// function verifyCitys (input) {
		// 	locations.forEach(element => {
		// 		console.log( locationsNumbers[element] );
		// 	});
		// }

	/*** VERIFY CITYS ***/


	/*** VERIFY CHECKBOX LEGAL ***/

		// function verifyCheckboxLegal (input) {
			
		// }

	/*** VERIFY CHECKBOX LEGAL ***/


	/*** VERIFY CHECKBOX NEWSLETTER ***/

		// function verifyCheckboxNews (input) {
			
		// }

	/*** VERIFY CHECKBOX NEWSLETTER ***/


	/*** VERIFY CALLS ***/

		// function verifyCalls () {

		// }

	/*** VERIFY CALLS ***/


	/*** VERIFY FORM SUBMISSION ***/

		// function formSubmit() {

		// 	btnSubmit.addEventListener('submit', function(event) {
		// 		event.preventDefault();
		// 	});
		// }

	/*** VERIFY FORM SUBMISSION  ***/


	/*** CALLS  ***/

		//firstname.addEventListener('input', function(){ verifyIdentity(firstname, 'Prénom', formFirstname) } , true);
		//lastname.addEventListener('input', function(){ verifyIdentity(lastname, 'Nom', formLastname) } , true);
		mail.addEventListener('input', function(){ verifyMail(mail, 'Email', formMail) } , true );
		//birthdate.addEventListener('input', function(){ verifyBirthdate(birthdate, 'Date de naissance', formBirthdate) } , true );

	/*** CALLS  ***/

/*** VALIDATE FORM MODAL ***/