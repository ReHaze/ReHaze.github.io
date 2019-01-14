			var link = document.querySelector(".login");
			var modal = document.querySelector(".pop-up");
			var close = document.querySelector(".close");
			var login = modal.querySelector("[name=login]");
			var password = modal.querySelector("[name=password]")
			var form = modal.querySelector("form");
			var storage = localStorage.getItem("login");
			var mapLink = document.querySelector(".map-link");
			var map = document.querySelector(".modal-map");
			var mapClose = document.querySelector(".close-map");
			var overlay = document.querySelector(".overlay");


			link.addEventListener("click", function(e){
				e.preventDefault();	
				modal.classList.add("show-modal");
				if (storage) {
					login.value = storage;
					password.focus();
				}
				else {
					login.focus();
				}
			})

			close.addEventListener("click", function(e){
				e.preventDefault();
				modal.classList.remove("show-modal");
				modal.classList.remove("modal-error");
			})

			window.addEventListener("keydown", function(e){
				if (e.keyCode === 27) {
					if (modal.classList.contains("show-modal")) {
							modal.classList.remove("show-modal");
							modal.classList.remove("modal-error");
					}					
				}
			})

			form.addEventListener("submit", function(e){
				if (!login.value || !password.value) {
					e.preventDefault();
					console.log("нужно ввести пароль");
					modal.classList.add("modal-error");
				}
				else {
					localStorage.setItem("login", login.value);
				}
			})

			mapLink.addEventListener("click", function(e){
				e.preventDefault();
				map.classList.add("map-show");
				overlay.classList.add("overlay-show");
			})

			mapClose.addEventListener("click", function(e){
				map.classList.remove("map-show");
				overlay.classList.remove("overlay-show");		

			})