var btn_contacts = document.querySelector(".contacts-btn");
var popup = document.querySelector(".feedback");
var overlay = document.querySelector(".overlay");

btn_contacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-visible");
  overlay.classList.add("overlay-visible");
 });

var close_popup = document.querySelector(".feedback-close-btn");

close_popup.addEventListener("click", function (evt) {
  popup.classList.remove("feedback-visible");
  overlay.classList.remove("overlay-visible");
})
