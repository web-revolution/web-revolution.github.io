window.onscroll = () => {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > 200) {
			addClass(".cap", "white");
	} else {
			removeClass(".cap", "white");
	}

	if (scrollTop > 2000) {
			addClass(".to-top", "show");
	} else {
			removeClass(".to-top", "show");
	}

	document.querySelector(".header").style.transform = "translate(0% " + scrollTop + "%" 
}

var scroll = new SmoothScroll('.cap a[href*="#"]', {
	offset: 150
});
var scroll = new SmoothScroll('.footer__nav a[href*="#"]', {
	offset: 150
});

var scroll = new SmoothScroll('.to-top');

window.onload = function () {
	addClass(".loader .inner", "hide");
	setTimeout(function() {
		addClass(".loader", "hide");
	}, 1000);
}

document.getElementById("js-size-kitchen").onclick = function () {
	addClass(".overlay", "active");
	addClass(".form-question", "active");
}

document.getElementById("js-send-question").onclick = function () {
	addClass(".overlay", "active");
	addClass(".form-question", "active");
}

document.getElementById("js-answer").onclick = function () {
	addClass(".overlay", "active");
	addClass(".form-question", "active");
}

document.getElementById("js-close-form-question").onclick = function () {
	removeClass(".overlay", "active");
	removeClass(".form-question", "active");
}