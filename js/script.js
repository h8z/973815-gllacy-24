var popup_btn = document.querySelector(".contacts-btn");
var popup = document.querySelector(".feedback");
var overlay = document.querySelector(".overlay");
var popup_close = document.querySelector(".feedback-close-btn");
var form = document.querySelector(".feedback-form");
var name = document.querySelector(".feedback-name-field");
var email = document.querySelector(".feedback-email-field");
var message = document.querySelector(".feedback-message-area");

popup_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-visible");
  overlay.classList.add("overlay-visible");
 });

popup_close.addEventListener("click", function (evt) {
  popup.classList.remove("feedback-visible");
  popup.classList.remove("feedback-error");
  overlay.classList.remove("overlay-visible");
})

form.addEventListener("submit", function (evt) {
  if (name.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("feedback-visible")) {
      evt.preventDefault();
      popup.classList.remove("feedback-visible");
      popup.classList.remove("feedback-error");
      overlay.classList.remove("overlay-visible");
    }
  }
});
