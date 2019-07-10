window.onload = function () {
	var fonts = [
		"Calibri",
		"Candara Light",
		"Papyrus",
		"Edwardian Script ITC",
		"Tahoma",
		"Wingdings",
		"Centaur",
		"Matura MT Script Capitals"
	]
	var i = 0;
	var length = fonts.length - 1;
	console.log(length)
	setInterval(function() {
		if (i > length)
			i = 0
		document.querySelector(".glitch").style.fontFamily = fonts[i]
		i++;
	}, 250)
}