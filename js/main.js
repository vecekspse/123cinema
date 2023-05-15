"use strict"

const seats = document.querySelectorAll(".seat");

// for(let seat of seats) { ... }
seats.forEach(seat => {
    seat.addEventListener("click", function (evt) {    
        seat.classList.toggle("bg-success");
    });
})

const reset = document.querySelector(".reset");

reset.addEventListener("click", function () {
    document.querySelectorAll(".seats .seat.bg-success")
    .forEach(seat => seat.classList.remove("bg-success"));
});


