document.addEventListener("DOMContentLoaded", function (event) {
	"use strict";
	var telephone_text = document.querySelector('.contacts__text');
	function myFunction(x) {
		if (x.matches) {
			telephone_text.innerText = "телефон";
		}
		else {
			telephone_text.innerText = "контактный телефон*";
		}
	}
	var x = window.matchMedia("(min-width: 1200px)")
	myFunction(x);
	x.addListener(myFunction);
	let form = document.querySelector(".form-information__fields");
	let window_fail = document.querySelector(".form-validation-fail");
	let window_success = document.querySelector(".form-validation-success");
	let overlay = document.querySelector(".overlay");
	let wrapper = document.querySelector(".wrapper");
	let window_success_button = document.querySelector(".form-validation-success__close-button");
	let window_fail_button = document.querySelector(".form-validation-fail__close-button");
	form.addEventListener("submit", function (e) {
		var values = Array.from(document.querySelectorAll("input"));
		var name = values[0];
		var lastName = values[1];
		var secondaryName = values[2];
		var phone = values[3];
		var mail = values[4];
		name.style.border = "";
		lastName.style.border = "";
		secondaryName.style.border = "";
		phone.style.border = "";
		mail.style.border = "";

		if (name.value.length == 0) {
			name.style.border = "2px solid red";
		}
		if (lastName.value.length == 0) {
			lastName.style.border = "2px solid red";
		}

		if (secondaryName.value.length == 0) {
			secondaryName.style.border = "2px solid red";
		}
		if (phone.value.length == 0) {
			phone.style.border = "2px solid red";
		}

		if (mail.value.length == 0) {
			mail.style.border = "2px solid red";
		}

		if ((name.value.length == 0) || (lastName.value.length == 0)
			|| (secondaryName.value.length == 0) || (phone.value.length == 0)
			|| phone.value.length == 0 || mail.value.length == 0) {

			overlay.classList.remove("hidden");
			window_fail.classList.remove("hidden");
			wrapper.style.filter = "blur(5px)";
		}
		else {
			overlay.classList.remove("hidden");
			wrapper.style.filter = "blur(5px)";
			window_success.classList.remove("hidden");
		}
		e.preventDefault();
	})

	window_fail_button.addEventListener("click", function (e) {
		overlay.classList.add("hidden");
		window_fail.classList.add("hidden");
		wrapper.style.filter = "";
	})

	window_success_button.addEventListener("click", function (e) {
		overlay.classList.add("hidden");
		window_success.classList.add("hidden");
		wrapper.style.filter = "";
	});

});

