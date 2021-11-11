//IBG

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();


//STEPS-CAROUSEL
let mainElement = document.documentElement;
let stepItems = document.querySelectorAll('.cards-steps__item');
let stepsNext = document.querySelector('.steps__button--filled');
let stepsPrev = document.querySelector('.steps__button--transparent');
let stepsTrack = document.querySelector('.content-steps__track');
let stepsSlides = document.querySelectorAll('.content-steps__item');
let stepsProgressBar = document.querySelector('.steps__progressbar');
let stepsLine = document.querySelector('.steps__line');
let stepsLineWidth = 0;
let stepsSlideWidth = stepsSlides[0].offsetWidth;
let stepsCurrentSlide = 0;
let stepsPosition = 0;

let stepItemsFixed = [];

stepItemsFixed[0] = stepItems[0];
stepItemsFixed[1] = stepItems[5];
stepItemsFixed[2] = stepItems[1];
stepItemsFixed[3] = stepItems[6];
stepItemsFixed[4] = stepItems[2];
stepItemsFixed[5] = stepItems[7];
stepItemsFixed[6] = stepItems[3];
stepItemsFixed[7] = stepItems[8];
stepItemsFixed[8] = stepItems[4];


stepsNext.addEventListener("click", function () {
	if (stepsCurrentSlide < (stepItemsFixed.length - 1)) {
		stepsCurrentSlide++;
	}
	stepItemsFixed[stepsCurrentSlide].classList.add('active');
	position = -(stepsSlideWidth * stepsCurrentSlide);
	stepsTrack.style.transform = `translateX(${position}px)`;
	stepsLineWidth = stepsProgressBar.offsetWidth / stepItemsFixed.length * (stepsCurrentSlide + 1);
	stepsLine.style.width = stepsLineWidth + "px";
});

stepsPrev.addEventListener("click", function () {
	if (stepsCurrentSlide > 0) {
		stepItemsFixed[stepsCurrentSlide].classList.remove('active');
		stepsCurrentSlide--;
	}
	position = -(stepsSlideWidth * stepsCurrentSlide);
	stepsTrack.style.transform = `translateX(${position}px)`;
	stepsLineWidth = stepsProgressBar.offsetWidth / stepItemsFixed.length * (stepsCurrentSlide + 1);
	stepsLine.style.width = stepsLineWidth + "px";
});


for (let i = 0; i < stepItemsFixed.length; i++) {
	stepItemsFixed[i].addEventListener("click", function () {
		stepItemsFixed[i].classList.add('active');
		stepsCurrentSlide = i;
		position = -(stepsSlideWidth * stepsCurrentSlide);
		stepsTrack.style.transform = `translateX(${position}px)`;

		for (let k = 0; k < i; k++) {
			stepItemsFixed[i - k].classList.add('active');
		}

		for (let k = 1; k < (stepItemsFixed.length - i); k++) {
			stepItemsFixed[i + k].classList.remove('active');
		}

		stepsLineWidth = stepsProgressBar.offsetWidth / stepItemsFixed.length * (stepsCurrentSlide + 1);
		stepsLine.style.width = stepsLineWidth + "px";
	});
}

let userWidth = 0;

window.addEventListener("load", function () {
	userWidth = mainElement.clientWidth;
});

window.addEventListener("resize", function () {
	userWidth = mainElement.clientWidth;
});


let widthToScroll = 0;

if (userWidth < 1050) {
	stepsNext.addEventListener("click", function () {
		let stepsCards = document.querySelector('.steps__cards');

		if (widthToScroll < (1130 - userWidth)) {
			widthToScroll += 105;
			console.log(widthToScroll);
		}

		stepsCards.style.transform = `translateX(-${widthToScroll}px)`;
	});

	stepsPrev.addEventListener("click", function () {
		let stepsCards = document.querySelector('.steps__cards');

		if (widthToScroll > 0) {
			widthToScroll = widthToScroll - 100;
		}
		stepsCards.style.transform = `translateX(-${widthToScroll}px)`;
		console.log(widthToScroll);

	});
}

//QUIZ

let buttonNext = document.querySelector('.popup-quiz__button--next');
let buttonPrev = document.querySelector('.popup-quiz__button--prev');
let buttonDone = document.querySelector('.popup-quiz__button--done');
let callBtn = document.querySelector('.popup-call__btn');
let position = 0;
let items = document.querySelectorAll('.popup-quiz__item');
let track = document.querySelector('.popup-quiz__track');
let slide = document.querySelector('.slide-popup');
let i = 0;
let slideWidth = slide.offsetWidth;
let slidesArray = document.querySelectorAll('.slide-popup');
let currentSlide = 0;


buttonPrev.addEventListener("click", function () {
	slideWidth = slide.offsetWidth;

	if (currentSlide > 0) {
		currentSlide--;
	}

	if (position < 0) {
		position = -(slideWidth * currentSlide);
	}


	console.log(currentSlide);

	window.addEventListener("resize", function () {
		slideWidth = slide.offsetWidth;
		position = -(slideWidth * currentSlide);
		console.log(position);
		track.style.transform = `translateX(${position}px)`;
	});

	track.style.transform = `translateX(${position}px)`;

	if (i > 0) {
		i--;
	}

	items[i + 1].classList.remove('active');
});

buttonNext.addEventListener("click", function () {
	slideWidth = slide.offsetWidth;

	if (currentSlide < slidesArray.length) {
		currentSlide++;
	}

	if (position > -(slideWidth * 5)) {
		position = -(slideWidth * currentSlide);
	}

	window.addEventListener("resize", function () {
		slideWidth = slide.offsetWidth;
		position = -(slideWidth * currentSlide);
		console.log(position);
		track.style.transform = `translateX(${position}px)`;
	});

	track.style.transform = `translateX(${position}px)`;
	if (i < 5) {
		i++;
	}

	console.log(currentSlide);

	items[i].classList.add('active');

	if (i == 5) {
		buttonPrev.style.display = "none";
		buttonNext.style.display = "none";
		buttonDone.style.display = "inline-block";
	}
});

buttonDone.addEventListener("click", function () {
	i = 0;
	console.log(i);
});

callBtn.addEventListener("click", function () {
	position = 0;
	currentSlide = 0;
	i = 0;

	for (k = 0; k < items.length; k++) {
		items[k].classList.remove('active');
	}

	items[0].classList.add('active');

	track.style.transform = `translateX(${position}px)`;
});



//QUIZ-COUNTER

let counter = document.querySelectorAll('.slide-popup__counter');
let counterMinus = document.querySelectorAll('.slide-popup__minus');
let counterPlus = document.querySelectorAll('.slide-popup__plus');

for (let i = 0; i < counterPlus.length; i++) {
	counterPlus[i].addEventListener("click", function () {
		let currentParent = counterPlus[i].closest('.slide-popup__counter');
		let currentNumber = currentParent.querySelector('.slide-popup__number');
		if (currentNumber.textContent < 10) {
			currentNumber.textContent++;
		}
	});
}

for (let i = 0; i < counterMinus.length; i++) {
	counterMinus[i].addEventListener("click", function () {
		let currentParent = counterPlus[i].closest('.slide-popup__counter');
		let currentNumber = currentParent.querySelector('.slide-popup__number');
		if (currentNumber.textContent > 0) {
			currentNumber.textContent--;
		}
	});
}


//BURGER

const burgerMenu = document.querySelector('.burger');
if (burgerMenu) {
	const menuList = document.querySelector('.menu');
	const header = document.querySelector('.header');
	burgerMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		burgerMenu.classList.toggle('active');
		menuList.classList.toggle('active');
		header.classList.toggle('active');
	});
}


//HEADER-SCROLL

window.addEventListener("scroll", function () {
	const header = document.querySelector('.header');
	const logo = document.querySelector('.header__image');
	let scrollPos = window.pageYOffset;
	//   console.log(scrollPos);
	if (scrollPos) {
		header.style.paddingTop = "2px";
		header.style.paddingBottom = "2px";
		header.style.background = "#232323";
	} else {
		header.style.paddingTop = "19px";
		header.style.paddingBottom = "19px";
		header.style.background = "transparent";
	}
});


//POPUP

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

const stylesSlider = new Swiper('.styles__slider', {

	slidesPerView: 1,
	spaceBetween: 30,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

});

const portfolioSlider = new Swiper('.portfolio__slide', {

	slidesPerView: 1,
	spaceBetween: 30,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {

		991.02: {
			slidesPerView: 6,
			spaceBetween: 0,
		},
	}

});