document.addEventListener("DOMContentLoaded", function(event) {
	let painText;
	let colors = ['#16a085',
    '#27ae60', "#73A857",
    '#2c3e50', '#f39c12', '#e74c3c', 
    '#9b59b6', '#FB6964', '#342224',
    "#472E32", "#BDBB99", "#77B1A9"
	];
	let button = document.querySelector('.btn');
	let author = document.querySelector('.author');
	let wrapper = document.querySelector('.wrapper');
	let textForQuote = document.querySelector('.text');
	let req = new XMLHttpRequest();
	req.open('GET', 'quotes.json');
	req.onload = function() {
    	let quote = "";
    	painText = JSON.parse(req.responseText);
    	generate();
	}
	req.send();

	function generate(){
		let quote = painText.quotes[Math.floor(Math.random() * painText.quotes.length)];
		textForQuote.classList.remove("animate");
		void textForQuote.offsetWidth;
		textForQuote.classList.add("animate");
		textForQuote.innerHTML = quote.quote;
		author.innerHTML = quote.author;
		author.classList.remove("animate");
		void author.offsetWidth;
		author.classList.add("animate");
		let color = wrapper.style.backgroundColor;
		wrapper.style.backgroundColor = generateColor(color);
		button.style.backgroundColor = wrapper.style.backgroundColor;
	}

	function generateColor(e){
		let currentColor = e;
		let newColor = colors[Math.floor(Math.random() * colors.length)];	
		if (currentColor != newColor) {
			return newColor;
		}
		else {
			generateColor(e);
		}
	}
	
	button.addEventListener("click", generate);
});


