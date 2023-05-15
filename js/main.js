"use strict"

const seat = document.querySelector(".seat");

seat.addEventListener("click", function (evt) {
    seat.classList.add("bg-success");
});