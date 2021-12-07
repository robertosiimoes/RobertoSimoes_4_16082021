/*** VALIDATE FORM MODAL ***/

	var arrValidation = []; 

	/*** DOM ELEMENS ***/

		/*** FORM DATA ***/

			let formFirstname = document.querySelector(' .formData[data-input="firstname"] ');
			let formLastname  = document.querySelector(' .formData[data-input="lastname"] ');
			let formMail      = document.querySelector(' .formData[data-input="email"] ');
			let formBirthdate = document.querySelector(' .formData[data-input="birthdate"] ');
			let formQuantity  = document.querySelector(' .formData[data-input="quantity"] ');
			let formLocation  = document.querySelector(' .formData[data-input="locations"] ');
			let formCheckbox  = document.querySelector(' .formData[data-input="checkbox"] ');

		/*** FORM DATA ***/

		/*** INPUTS AND BUTTONS ***/

			let firstname = document.querySelector(' #firstname ');
			let lastname  = document.querySelector(' #lastname ');
			let mail      = document.querySelector(' #email ');
			let birthdate = document.querySelector(' #birthdate ');
			let quantity  = document.querySelector(' #quantity ');

			// Getting all the inputs checkbox for locations
			let locations = document.querySelectorAll(' .checkbox-input[name="location"] ');

			// Getting the checkboxs for agree and newsletter
			let checkboxs = document.querySelectorAll(' .checkbox-input[type="checkbox"] ');

			// Buttons for submitting form
			let btnSubmit = document.querySelector(' .btn-submit ');
		
		/*** INPUTS AND BUTTONS ***/

		/*** REGEX ***/

			const regIdentity = /[!@#$%^&*()_+\-=\[\]{};:|,<.>?\/\'\"\d]/g;

			const regMail = /(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@\w+[.-]?\w*\.[a-zA-Z]{2,3}\b/;

			const regBirth = /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/;

		/*** REGEX ***/

	
	/*** DOM ELEMENS ***/


	/*** PRINT MESSAGE ***/

		function printMessage(key, text) {

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
				"error-script" : "Erreur de script",
				"error-submit" : "Veuillez remplir le champ correctement"
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
					arrValidation.push(true);
				}
			}
			else {
				formIdentity.setAttribute("data-error", printMessage("other"));
			}
		}

	/*** VERIFY IDENTITY ***/


	/*** VERIFY FIRSTNAME ***/

		function verifyFirstname(inputIdentity, textIdentity, formIdentity) {

			firstname.addEventListener('input', function(event) {

				verifyIdentity(inputIdentity, textIdentity, formIdentity);

			}, true);

		}

	/*** VERIFY FIRSTNAME ***/


	/*** VERIFY LASTNAME ***/

		function verifyLastname(inputIdentity, textIdentity, formIdentity) {

			lastname.addEventListener('input', function(event) {

				verifyIdentity(inputIdentity, textIdentity, formIdentity);

			}, true);

		}

	/*** VERIFY LASTNAME ***/


	/*** VERIFY MAIL ***/

		function verifyMail (inputIdentity, textIdentity, formIdentity) {

			mail.addEventListener('input', function(event) {

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
						arrValidation.push(true);
					}
				}
				else {
					formIdentity.setAttribute("data-error", printMessage("other"));
				}

			}, true);
		}

	/*** VERIFY MAIL ***/

	
	/*** VERIFY BIRTHDATE ***/

		function verifyBirthdate (inputIdentity, textIdentity, formIdentity) {

			birthdate.addEventListener('input', function(event) {

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
						arrValidation.push(true);
					}
				}
				else {
					formIdentity.setAttribute("data-error", printMessage("other"));
				}

			}, true);
			
		}

	/*** VERIFY BIRTHDATE ***/


	/*** VERIFY QUANTITY TOURNAMENTS ***/
	
		function verifyQuantityTournaments (inputIdentity, textIdentity, formIdentity) {

			quantity.addEventListener('input', function(event) {

				let inputLength = inputIdentity.value.length;
				let inputValue = parseInt(inputIdentity.value.trim());
	
				initializeField(inputIdentity, textIdentity, formIdentity, "empty");
	
				if ( inputLength < 0 || isNaN(inputValue) ) {
					formIdentity.setAttribute("data-error", printMessage("empty", textIdentity));
				}
				else if ( inputValue > 99 ) {
					formIdentity.setAttribute("data-error", printMessage("tohigh-quantity"));
				}
				else if ( 0 <= inputValue <= 99 ) {
					formIdentity.setAttribute("data-error", printMessage("valid"));
					formIdentity.setAttribute("data-valid", true);
					inputIdentity.setAttribute("data-valid", true);
					arrValidation.push(true);
				}
				else {
					formIdentity.setAttribute("data-error", printMessage("other"));
				}

			}, true);

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
						arrValidation.push(true);
					}
					else {
						formIdentity.setAttribute("data-error-visible", true);
						formIdentity.setAttribute("data-error", printMessage("invalid-citys", textIdentity));
					}

				}, true);

			});
			
		}

	/*** VERIFY CITYS ***/


	/*** VERIFY CHECKBOXS ***/

		function verifyCheckboxs (inputIdentity, formIdentity) {

			checkboxs.forEach(element => {

				element.addEventListener("change", function(event) {

					formIdentity.setAttribute("data-error-visible", true);
					formIdentity.setAttribute("data-valid", false);

					// Testing if the current checkbox is the legal checkbox
					if ( element.getAttribute("id") == "checkbox1" ) {

						if ( element.checked == true ) {
							formIdentity.setAttribute("data-valid", true);
							formIdentity.setAttribute("data-error", printMessage("valid-checkbox"));
							arrValidation.push(true);
						}
						else {
							formIdentity.setAttribute("data-valid", false);
							formIdentity.setAttribute("data-error", printMessage("invalid-checkbox"));
							element.checked = false;
						}
					}

					//Testing if the current checkbox is the newsletter checkbox
					else if ( element.getAttribute("id") == "checkbox2" ) {

						if ( element.checked == true ) {
							formIdentity.setAttribute("data-valid", true);
							formIdentity.setAttribute("data-error", printMessage("valid-newsletter"));
						}
						else {
							formIdentity.setAttribute("data-error", printMessage("invalid-newsletter"));
							element.checked = false;
						}
					}

					// Testing if you have error on script
					else {
						console.log( printMessage("error-script") );
					}
				}, true);

			});

		}

	/*** VERIFY CHECKBOXS ***/


	/*** VERIFY CALLS ***/

		let verifFirstname = verifyFirstname(firstname, 'Prénom', formFirstname);
		let verifLastname  = verifyLastname(lastname, 'Nom', formLastname);
		let verifMail      = verifyMail(mail, 'Email', formMail);
		let verifBirth     = verifyBirthdate(birthdate, 'Date de naissance', formBirthdate);
		let verifQuantity  = verifyQuantityTournaments(quantity, 'Nombre de tournois', formQuantity);
		let verifCitys     = verifyCitys(locations, 'Villes' , formLocation);
		let verifCheckboxs = verifyCheckboxs(checkboxs, formCheckbox);

	/*** VERIFY CALLS ***/


	/*** VERIFY FORM SUBMISSION ***/

		function formSubmit() {

			btnSubmit.addEventListener('click', function(event) {
				
				event.preventDefault();
				event.stopPropagation();

				let dataFirstname = formFirstname.dataset.valid;
				let dataLastname  = formLastname.dataset.valid;
				let dataMail      = formMail.dataset.valid;
				let dataBirthdate = formBirthdate.dataset.valid;
				let dataQuantity  = formQuantity.dataset.valid;
				let dataLocation  = formLocation.dataset.valid;
				let dataCheckbox  = formCheckbox.dataset.valid;

				//let arrData = [dataFirstname, dataLastname, dataMail, dataBirthdate, dataQuantity, dataLocation, dataCheckbox];

				let arrData2 = [formFirstname, formLastname, formMail, formBirthdate, formQuantity, formLocation, formCheckbox];

				let formConfirm = document.querySelector(" .form-confirm ");
				let formModal = document.querySelector(" .form-modal ");

				function isDataValid() {
					return true;
				}

				let condition = arrValidation.every(isDataValid);


				if ( arrValidation.length >= 7 && condition == true ) {
					console.log("Done");

					formConfirm.style.opacity = 1;
					formConfirm.style.zIndex = 1;
					formConfirm.style.display = "flex";

					formModal.style.opacity = 0;
					formModal.style.zIndex = 0;
				}
				else {
					console.log('Error');

					arrData2.forEach(element => {

						element.setAttribute("data-error-visible", true);

						if ( element == false || element == undefined ) {
							element.setAttribute("data-valid", false);
							element.setAttribute("data-error", printMessage("error-submit"));
						}
						else {
							element.setAttribute("data-valid", true);
							element.setAttribute("data-error", printMessage("valid"));
						}

					});
				}

			});
		}

	/*** VERIFY FORM SUBMISSION  ***/


/*** VALIDATE FORM MODAL ***/