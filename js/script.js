var popup = document.querySelector(".popup__wrapper");
var openButton = document.querySelector(".contacts__link");
var closeButton = popup.querySelector(".popup__close");

openButton.addEventListener("click", function(){
  popup.classList.add("popup__wrapper--open");
})

closeButton.addEventListener("click", function(){
  popup.classList.remove("popup__wrapper--open");
})
