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

new SmoothScroll('.cap a[href*="#"]', {
	offset: 150
})

new SmoothScroll('.footer__nav a[href*="#"]', {
	offset: 150
})

new SmoothScroll('.to-top');

window.onload = function () {
	addClass(".loader .inner", "hide");
	setTimeout(function() {
		addClass(".loader", "hide");
	}, 1000);
}

click ("#js-size-kitchen", function () {
	openRequest();
})

click ("#js-answer", function () {
	openRequest();
})

click ("#js-send-question", function () {
	openRequest();
})

click ("#js-contact-query", function () {
	openRequest();
})

click ("#js-close-form-question", function () {
	closeRequest();
})

click ("#js-send-question-query", function () {
	removeClass(".form-question", "active");
	addClass(".notify", "active");
	setTimeout(function() {
		removeClass(".notify", "active");
		removeClass(".overlay", "active");
	}, 2000)
})

click ("#js-send-query-question", function () {
	addClass(".overlay", "active");
	addClass(".notify", "active");
	setTimeout(function() {
		removeClass(".notify", "active");
		removeClass(".overlay", "active");
	}, 2000)
})