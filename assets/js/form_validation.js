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
			const btnSubmit = document.querySelector(" .btn-submit ");
		
		/*** INPUTS AND BUTTONS ***/

		/*** REGEX ***/

			const regIdentity = /[!@#$%^&*()_+\-=\[\]{};:|,<.>?\/\'\"\d]/g;

			const regMail = /(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@\w+[.-]?\w*\.[a-zA-Z]{2,3}\b/;

			const regBirth = /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/ ;

		/*** REGEX ***/

	
	/*** DOM ELEMENS ***/


	/*** PRINT MESSAGE ***/

		function printMessage(key, text, city) {

			let messageToReturn = {
				"empty": "Le champ est vide, veuillez entrer votre " + text + " ",
				"notvalid": "Le champ " + text + " doit avoir un minimum de 2 caractères",
				"invalid": "Les caractères spéciaux et les chiffres ne sont pas autorisés",
				"valid" : "Le champ est bien rempli",
				"other" : "Le champ a rencontré une erreur imprévue",
				"invalid-birthdate" : "Veuillez saisir une date de naissance valide au format jj / mm / aaaa",
				"invalid-email" : "Veuillez saisir un email au format valide",
				"invalid-quantity" : "Veuillez entrer une valeur numérique pour le nombre de tournois",
				"tohigh-quantity" : "Veuillez entrer un nombre de tournois compris entre 0 et 99",
				"invalid-citys" : "Veuillez choisir une ville",
				"valid-citys" : "Votre choix de ville a été retenu",
				"invalid-checkbox" : "Vous devez cocher la validation des conditions d'utilisation",
				"valid-checkbox" : "La case de validation des conditions d'utilisation est bien cochée",
				"valid-newsletter" : "La case de newsletter a bien été cochée",
				"invalid-newsletter" : "La case de newsletter a bien été decochée",
				"error-script" : "Erreur de script"
			};

			return messageToReturn[key];
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
					return true;
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
					return true;
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
					return true;
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
				return true;
			}
			else {
				formIdentity.setAttribute("data-error", printMessage("other"));
			}

		}

	/*** VERIFY QUANTITY TOURNAMENTS ***/


	/*** VERIFY CITYS ***/

		function verifyCitys (inputIdentity, textIdentity, formIdentity) {

			locations.forEach(element => {

				element.addEventListener("change", function(event) {

					var city = event.target.value;

					formIdentity.setAttribute("data-error-visible", true);

					if ( city !== undefined || city !== false || city !== null ) {
						formIdentity.setAttribute("data-valid", true);
						formIdentity.setAttribute("data-error", printMessage("valid-citys"));
						return true;
					}
					else {
						formIdentity.setAttribute("data-error-visible", true);
						formIdentity.setAttribute("data-error", printMessage("invalid-citys", textIdentity));
						return false;
					}

				});

			});
			
		}

	/*** VERIFY CITYS ***/


	/*** VERIFY CHECKBOXS ***/

		function verifyCheckboxs (inputIdentity, formIdentity) {

			checkboxs.forEach(element => {

				element.addEventListener("change", function(event) {

					formIdentity.setAttribute("data-error-visible", true);

					// Testing if the current checkbox is the legal checkbox
					if ( element.getAttribute("id") == "checkbox1" ) {

						if ( element.checked == true ) {
							formIdentity.setAttribute("data-valid", true);
							formIdentity.setAttribute("data-error", printMessage("valid-checkbox"));
							return true;
						}
						else {
							formIdentity.setAttribute("data-valid", false);
							formIdentity.setAttribute("data-error", printMessage("invalid-checkbox"));
							element.checked == false;
						}
					}

					//Testing if the current checkbox is the newsletter checkbox
					else if ( element.getAttribute("id") == "checkbox2" ) {

						if ( element.checked == true ) {
							formIdentity.setAttribute("data-valid", true);
							formIdentity.setAttribute("data-error", printMessage("valid-newsletter"));
						}
						else {
							formIdentity.setAttribute("data-valid", false);
							formIdentity.setAttribute("data-error", printMessage("invalid-newsletter"));
							element.checked == false;
						}
					}

					// Testing if you have error on script
					else {
						console.log( printMessage("error-script") );
					}
				});

			});

		}

	/*** VERIFY CHECKBOXS ***/


	/*** CALLS ***/

		let verifFirstname = firstname.addEventListener('input', function(){ verifyIdentity(firstname, 'Prénom', formFirstname) } );
		let verifLastname = lastname.addEventListener('input', function(){ verifyIdentity(lastname, 'Nom', formLastname) } );
		let verifMail = mail.addEventListener('input', function(){ verifyMail(mail, 'Email', formMail) } );
		let verifBirth = birthdate.addEventListener('input', function(){ verifyBirthdate(birthdate, 'Date de naissance', formBirthdate) } );
		let verifQuantity = quantity.addEventListener('input', function(){ verifyQuantityTournaments(quantity, 'Nombre de tournois', formQuantity) } );
		let verifCitys = verifyCitys(locations, "Villes" , formLocation);
		let verifCheckboxs = verifyCheckboxs(checkboxs, formCheckbox);

	/*** CALLS ***/


	/*** VERIFY CALLS ***/

		function verifyCalls() {

			if( verifFirstname == true && verifLastname == true && verifMail == true && verifBirth == true && verifQuantity == true && verifCitys == true && verifCheckboxs == true ) {
				console.log("All functions are true, let's go ! ");
				return true;
			}
			else {
				console.log("Very bad ! An error as appeared !");
				return false;
			}
		}

	/*** VERIFY CALLS ***/


	/*** VERIFY FORM SUBMISSION ***/

		function formSubmit() {

			btnSubmit.addEventListener('click', function(event) {

				event.preventDefault();
				event.stopPropagation();

				let calls = verifyCalls();

				// Test pour vérifier que toutes les fonctions renvoient bien true
				if ( calls == true ) {
					console.log("Submit this form");
				}
				else {
					console.log("Don't submit this form");
				}
			});
		}

	/*** VERIFY FORM SUBMISSION  ***/

	formSubmit();

/*** VALIDATE FORM MODAL ***/