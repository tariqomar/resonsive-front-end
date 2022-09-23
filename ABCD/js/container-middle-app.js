$(function () {
	$(".menu-link-container-apps-middle").click(function () {
	 $(".menu-link-container-apps-middle").removeClass("is-active-container-apps-middle");
	 $(this).addClass("is-active-container-apps-middle");
	});
   });
   
   $(function () {
	$(".main-header-link-container-apps-middle").click(function () {
	 $(".main-header-link-container-apps-middle").removeClass("is-active-container-apps-middle");
	 $(this).addClass("is-active-container-apps-middle");
	});
   });
   
   const dropdowns = document.querySelectorAll(".dropdown-container-apps-middle");
   dropdowns.forEach((dropdown) => {
	dropdown.addEventListener("click", (e) => {
	 e.stopPropagation();
	 dropdowns.forEach((c) => c.classList.remove("is-active-container-apps-middle"));
	 dropdown.classList.add("is-active-container-apps-middle");
	});
   });
   
   $(".search-bar input")
	.focus(function () {
	 $(".header-container-apps-middle").addClass("wide-container-apps-middle");
	})
	.blur(function () {
	 $(".header-container-apps-middle").removeClass("wide-container-apps-middle");
	});
   
   $(document).click(function (e) {
	var container = $(".status-button-container-apps-middle");
	var dd = $(".dropdown-container-apps-middle");
	if (!container.is(e.target) && container.has(e.target).length === 0) {
	 dd.removeClass("is-active-container-apps-middle");
	}
   });
   
   $(function () {
	$(".dropdown-container-apps-middle").on("click", function (e) {
	 $(".content-wrapper-container-apps-middle").addClass("overlay-container-apps-middle");
	 e.stopPropagation();
	});
	$(document).on("click", function (e) {
	 if ($(e.target).is(".dropdown-container-apps-middle") === false) {
	  $(".content-wrapper-container-apps-middle").removeClass("overlay-container-apps-middle");
	 }
	});
   });
   
   $(function () {
	$(".status-button-container-apps-middle:not(.open-container-apps-middle)").on("click", function (e) {
	 $(".overlay-app-container-apps-middle").addClass("is-active-container-apps-middle");
	});
	$(".pop-up-container-apps-middle .close-container-apps-middle").click(function () {
	 $(".overlay-app-container-apps-middle").removeClass("is-active-container-apps-middle");
	});
   });
   
   $(".status-button-container-apps-middle:not(.open-container-apps-middle)").click(function () {
	$(".pop-up-container-apps-middle").addClass("visible-container-apps-middle");
   });
   
   $(".pop-up-container-apps-middle .close-container-apps-middle").click(function () {
	$(".pop-up-container-apps-middle").removeClass("visible-container-apps-middle");
   });
   
   const toggleButton = document.querySelector('.dark-light-container-apps-middle');
   
   toggleButton.addEventListener('click', () => {
	 document.body.classList.toggle('light-mode-container-apps-middle');
   });