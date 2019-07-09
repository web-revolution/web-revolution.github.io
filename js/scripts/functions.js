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