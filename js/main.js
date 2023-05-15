"use strict"

const seats = document.querySelectorAll(".seat");

// for(let seat of seats) {
seats.forEach(seat => {
    seat.addEventListener('click', function (evt) {
            seat.classList.toggle("bg-success");    
    });
});
