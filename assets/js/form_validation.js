/*** VALIDATE FORM MODAL ***/

	/*** DOM ELEMENS ***/

		/*** FORM DATA ***/

			const formFirstname = document.querySelector(' .formData[data-input="firstname"] ');
			const formLastname  = document.querySelector(' .formData[data-input="lastname"] ');
			const formMail      = document.querySelector(' .formData[data-input="email"] ');
			const formBirthdate = document.querySelector(' .formData[data-input="birthdate"] ');
			const formQuantity  = document.querySelector(' .formData[data-input="quantity"] ');
			const formLocation  = document.querySelector(' .formData[data-input="locations"] ');
			const formCheckbox  = document.querySelector(' .formData[data-input="checkbox"] ');

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
					break;
				case "invalid-birthdate":
					messageToReturn = "Veuillez saisir une date de naissance valide au format jj / mm / aaaa";
					return messageToReturn;
					break;
				case "invalid-email":
					messageToReturn = "Veuillez saisir un email au format valide";
					return messageToReturn;
					break;
				case "invalid-quantity":
					messageToReturn = "Veuillez entrer une valeur numérique pour le nombre de tournois";
					return messageToReturn;
					break;
				case "tohigh-quantity":
					messageToReturn = "Veuillez entrer un nombre de tournois compris entre 0 et 99";
					return messageToReturn;
					break;
				case "invalid-citys":
					messageToReturn = "Veuillez choisir une ville";
					return messageToReturn;
					break;
				case "invalid-checkbox":
					messageToReturn = "Vous devez cocher la validation des conditions d'utilisation";
					return messageToReturn;
					break;
				case "valid-citys":
					messageToReturn = "Votre choix de ville a été retenu";
					return messageToReturn;
					break;
				case "valid-checkbox":
					messageToReturn = "La case de validation des conditions d'utilisation est bien cochée";
					return messageToReturn;
					break;
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

		// When i use toString on inputWord enter data, the if else test with regIdentity don't work correctly
		function verifyIdentity (inputIdentity, textIdentity, formIdentity) {

			let inputValue = parseInt(inputIdentity.value.length);
			let inputWord = inputIdentity.value;

			initializeField(inputIdentity, textIdentity, formIdentity, "empty");
			formIdentity.setAttribute("data-error", printMessage("empty", textIdentity));

			if ( isNaN( inputValue ) || inputValue === 0 ) {
				formIdentity.setAttribute("data-error", printMessage("empty", textIdentity));
			}
			else if ( inputValue > 0 && inputValue < 2 ) {
				formIdentity.setAttribute("data-error", printMessage("notvalid", textIdentity));
			}
			else if ( inputValue >= 2 ) {

				if ( regIdentity.test(inputWord) ) {
					formIdentity.setAttribute("data-error", printMessage("invalid"));
				}
				else {
					formIdentity.setAttribute("data-error", printMessage("valid"));
					formIdentity.setAttribute("data-valid", true);
					inputIdentity.setAttribute("data-valid", true);
				}
			}
			else {
				formIdentity.setAttribute("data-error", printMessage("other"));
			}
		}

	/*** VERIFY IDENTITY ***/


	/*** VERIFY MAIL ***/

		function verifyMail (inputIdentity, textIdentity, formIdentity) {

			let inputLength = parseInt(inputIdentity.value.length);
			let inputValue = inputIdentity.value;

			initializeField(inputIdentity, textIdentity, formIdentity, "empty");

			if ( isNaN( inputLength ) || inputLength === 0 ) {
				formIdentity.setAttribute("data-error", printMessage("empty", textIdentity));
			}
			else if ( inputLength > 0 ) {

				if ( !regMail.test(inputValue) ) {
					formIdentity.setAttribute("data-error", printMessage("invalid-email"));
				}
				else {
					formIdentity.setAttribute("data-error", printMessage("valid"));
					formIdentity.setAttribute("data-valid", true);
					inputIdentity.setAttribute("data-valid", true);
				}
			}
			else {
				formIdentity.setAttribute("data-error", printMessage("other"));
			}
		}

	/*** VERIFY MAIL ***/

	
	/*** VERIFY BIRTHDATE ***/

		function verifyBirthdate (inputIdentity, textIdentity, formIdentity) {

			let inputLength = inputIdentity.value.length;
			let inputValue = inputIdentity.value;

			initializeField(inputIdentity, textIdentity, formIdentity, "empty");
			formIdentity.setAttribute("data-error", printMessage("empty", textIdentity));

			if ( inputLength < 10 || inputLength > 10 ) {
				formIdentity.setAttribute("data-error", printMessage("invalid-birthdate", textIdentity));
			}
			else if ( inputLength === 10 ) {

				let newBirthdate = inputValue.split('-').reverse().join('-');

				if ( regBirth.test(newBirthdate) == false ) {
					formIdentity.setAttribute("data-error", printMessage("invalid-birthdate"));
				}
				else {
					formIdentity.setAttribute("data-error", printMessage("valid"));
					formIdentity.setAttribute("data-valid", true);
					inputIdentity.setAttribute("data-valid", true);
				}
			}
			else {
				formIdentity.setAttribute("data-error", printMessage("other"));
			}
			
		}

	/*** VERIFY BIRTHDATE ***/


	/*** VERIFY QUANTITY TOURNAMENTS ***/
	
		function verifyQuantityTournaments (inputIdentity, textIdentity, formIdentity) {

			let inputLength = inputIdentity.value.length;
			let inputValue = parseInt(inputIdentity.value.trim());

			initializeField(inputIdentity, textIdentity, formIdentity, "empty");

			if ( inputLength < 0 || isNaN(inputValue)  ) {
				formIdentity.setAttribute("data-error", printMessage("empty", textIdentity));
			}
			else if ( inputValue > 99 ) {
				formIdentity.setAttribute("data-error", printMessage("tohigh-quantity"));
			}
			else if ( 0 <= inputValue <= 99 ) {
				formIdentity.setAttribute("data-error", printMessage("valid"));
				formIdentity.setAttribute("data-valid", true);
				inputIdentity.setAttribute("data-valid", true);
			}
			else {
				formIdentity.setAttribute("data-error", printMessage("other"));
			}

		}

	/*** VERIFY QUANTITY TOURNAMENTS ***/


	/*** VERIFY CITYS ***/

		function verifyCitys (inputIdentity, textIdentity, formIdentity) {

			if (formIdentity != null || formIdentity != undefined) {

				locations.forEach(element => {

					element.addEventListener("change", function(event) {

						if ( element.indeterminate = true ) {
							formIdentity.setAttribute("data-error-visible", true);
							formIdentity.setAttribute("data-error", printMessage("invalid-citys", textIdentity));
						}
						else {
							formIdentity.setAttribute("data-valid", true);
							formIdentity.setAttribute("data-error", printMessage("valid-citys"));
						}

					});

				});

			}
			
		}

	/*** VERIFY CITYS ***/


	/*** VERIFY CHECKBOXS ***/

		function verifyCheckboxs (inputIdentity, formIdentity) {

			checkboxs.forEach(element => {

				element.addEventListener("change", function(event) {
					
					let checkbox1 = document.querySelector("checkbox1");
					let checkbox2 = document.querySelector("checkbox2");

					formIdentity.setAttribute("data-error-visible", true);

					// Testing if the current checkbox is unchecked
					if ( !this.checked ) {

						// Testing if the current checkbox is the legal checkbox
						if ( this.getAttribute("id") == "checkbox1" ) {
							formIdentity.setAttribute("data-error", printMessage("invalid-checkbox"));
						}
						else {
							formIdentity.setAttribute("data-error", printMessage("invalid-checkbox"));
							return this;
						}
					}

					// Testing if the current checkbox is checked
					else {

						// Testing if the current checkbox is the legal checkbox
						if ( this.getAttribute("id") == "checkbox1" ) {
							formIdentity.setAttribute("data-error", printMessage("valid-checkbox"));
							this.checked == true;
							return this;
						}
						else {
							formIdentity.setAttribute("data-error", printMessage("invalid-checkbox"));
							this.checked == true;
							return this;
						}
					}
				});

			});

		}

	/*** VERIFY CHECKBOXS ***/


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

		firstname.addEventListener('input', function(){ verifyIdentity(firstname, 'Prénom', formFirstname) } , true);
		lastname.addEventListener('input', function(){ verifyIdentity(lastname, 'Nom', formLastname) } , true);
		mail.addEventListener('input', function(){ verifyMail(mail, 'Email', formMail) } , true );
		birthdate.addEventListener('input', function(){ verifyBirthdate(birthdate, 'Date de naissance', formBirthdate) } , true );
		quantity.addEventListener('input', function(){ verifyQuantityTournaments(quantity, 'Nombre de tournois', formQuantity) } , true );
		verifyCitys(locations, "Villes" , formLocation);
		verifyCheckboxs(checkboxs, formCheckbox);


	/*** CALLS  ***/

/*** VALIDATE FORM MODAL ***/