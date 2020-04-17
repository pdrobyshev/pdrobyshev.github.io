"use strict";

(function() {
	const modalOverlay = document.querySelector(".modal-overlay");
	const questionModal = document.querySelector(".modal--question");
	const questionButton = document.querySelector("#question-modal-button");
	const questionCloseButton = document.querySelector("#question-modal-close-button");

	const questionButtonClickHandler = () => {
		if (document.documentElement.clientWidth < 600) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}

		modalOverlay.classList.remove("modal-hide");
		questionModal.classList.remove("modal-hide");

		questionCloseButton.addEventListener("click", questionCloseButtonClickHandler);
		modalOverlay.addEventListener("click", questionCloseButtonClickHandler);
		document.addEventListener("keydown", evt => escapePressHandler(evt));
	};

	const questionCloseButtonClickHandler = (e) => {
		e.preventDefault();
		modalOverlay.classList.add("modal-hide");
		questionModal.classList.add("modal-hide");

		questionCloseButton.removeEventListener("click", questionCloseButtonClickHandler);
		modalOverlay.removeEventListener("click", questionCloseButtonClickHandler);
		document.removeEventListener("keydown", evt => escapePressHandler(evt));
	};

	const escapePressHandler = (evt) => {
		if (evt.keyCode === 27) {
			modalOverlay.classList.add("modal-hide");
			questionModal.classList.add("modal-hide");
		}
	};

	questionButton.addEventListener("click", questionButtonClickHandler);
})();
