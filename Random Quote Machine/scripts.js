document.addEventListener("DOMContentLoaded", function(event) {
	var painText;
	var colors = ['#16a085',
    '#27ae60', "#73A857",
    '#2c3e50', '#f39c12', '#e74c3c', 
    '#9b59b6', '#FB6964', '#342224',
    "#472E32", "#BDBB99", "#77B1A9"
	];
	var button = document.querySelector('.btn');
	var author = document.querySelector('.author');
	var wrapper = document.querySelector('.wrapper');
	var textForQuote = document.querySelector('.text');
	var req = new XMLHttpRequest();
	req.open('GET', 'quotes.json');
	req.onload = function() {
    	var quote = "";
    	painText = JSON.parse(req.responseText);
    	generate();
	}
	req.send();

	function generate(){
		var quote = painText.quotes[Math.floor(Math.random() * painText.quotes.length)];
		textForQuote.innerHTML = quote.quote;
		author.innerHTML = quote.author;
		wrapper.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		button.style.backgroundColor = wrapper.style.backgroundColor;
	}
	
	button.addEventListener("click", generate);
});


