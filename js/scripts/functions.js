function toggleClass (el, className) {
	document.querySelector(el).classList.toggle(className)
}

function addClass (el, className) {
	document.querySelector(el).classList.add(className)
}

function removeClass (el, className) {
	if (document.querySelector(el).classList.contains(className))
		document.querySelector(el).classList.remove(className)
	else
		return false
}

function click (className, ret) {
	if (className === Object) {
		for (nameClass in className)
			document.querySelector(className[nameClass]).onclick = ret;
	} else
		document.querySelector(className).onclick = ret;
}



function openRequest () {
	addClass(".overlay", "active");
	addClass(".form-question", "active");
}

function closeRequest () {
	removeClass(".overlay", "active");
	removeClass(".form-question", "active");
}