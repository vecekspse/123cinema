"use strict"

const seats = document.querySelectorAll(".seat");

// for(let seat of seats) {
seats.forEach(seat => {
    seat.addEventListener('click', function (evt) {
            seat.classList.toggle("bg-success");    
    });
});

const reset = document.querySelector(".reset");

reset.addEventListener("click", function (evt) {
    seats.forEach(seat => seat.classList.remove("bg-success"));
    /*
    for(let seat of seats) {
        seat.classList.remove("bg-success");
    }
    */
});


