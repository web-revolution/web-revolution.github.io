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
	addClass(".loader img", "hide");
	setTimeout(function() {
		addClass(".loader", "hide");
	}, 1000);
}