window.onload = function () {
	var fonts = [
		"Calibri",
		"Arial",
		"Papyrus",
		"Times New Roman",
		"Tahoma",
		"Wingdings",
		"Centaur",
		"Viner Hand ITC"
	]
	var i = 0;
	setInterval(function() {
		if (i > fonts.length)
			i = 0
		document.querySelector(".glitch").style.fontFamily = fonts[i]
		i++;
	}, 250)
}