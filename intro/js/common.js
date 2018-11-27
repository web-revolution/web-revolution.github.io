setTimeout (function () {
	document.querySelector(".btn").classList.add("active");
}, 2500);

document.querySelector(".btn").onclick = function () {
	document.querySelector(".wrapper").classList.add("close");
}