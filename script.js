let cardSeconds = document.querySelector(".card-seconds");
let digitSeconds = document.querySelector(".digit-seconds");
let secBack = document.querySelector(".card-back-seconds");
let secFront = document.querySelector(".card-face-front-seconds");

let cardMinu = document.querySelector(".card-minute");
let digitMinu = document.querySelector(".digit-minute");
let minuBack = document.querySelector(".card-back-minute");
let minuFront = document.querySelector(".card-face-front-minute");

let cardHour = document.querySelector(".card-hour");
let digitHour = document.querySelector(".digit-hour");
let hourBack = document.querySelector(".card-back-hour");
let hourFront = document.querySelector(".card-face-front-hour");

let cardDay = document.querySelector(".card-day");
let digitDay = document.querySelector(".digit-day");
let dayBack = document.querySelector(".card-back-day");
let dayFront = document.querySelector(".card-face-front-day");

let timer = 691200;
let days;
let hour;
let minu;
let sec;

function calc(time) {
  days = Math.floor(time / 86400);
  hour = Math.floor((time - days * 86400) / 3600);
  minu = Math.floor((time - days * 86400 - hour * 3600) / 60);
  sec = time - days * 86400 - hour * 3600 - minu * 60;

  console.log(sec);
}

setInterval(() => {
  timer--;
  calc(timer);
  /* segundos---------------------- */
  if (sec < 100) {
    cardSeconds.classList.toggle("flipped");
    setTimeout(() => {
      cardSeconds.classList.toggle("flipped");
    }, 800);
  }

  digitSeconds.setAttribute(
    "data-digit-before",
    sec.toString().padStart(2, "0")
  );
  digitSeconds.setAttribute(
    "data-digit-after",
    sec.toString().padStart(2, "0")
  );
  secBack.innerText = sec.toString().padStart(2, "0");
  secFront.innerText = sec.toString().padStart(2, "0");

  /* minutes----------------------- */
  if (minu<=minu|| sec == 0) {
    cardMinu.classList.add("flipped");
  } else {
    cardMinu.classList.remove("flipped");
  }

  digitMinu.setAttribute("data-digit-before", minu.toString().padStart(2, "0"));
  digitMinu.setAttribute("data-digit-after", minu.toString().padStart(2, "0"));
  minuBack.innerText = minu.toString().padStart(2, "0");
  minuFront.innerText = minu.toString().padStart(2, "0");
  /* hour ----------------------- */

  digitHour.setAttribute("data-digit-before", hour.toString().padStart(2, "0"));
  digitHour.setAttribute("data-digit-after", hour.toString().padStart(2, "0"));
  hourBack.innerText = hour.toString().padStart(2, "0");
  hourFront.innerText = hour.toString().padStart(2, "0");

  if (hour <= hour|| minu==0) {
    cardHour.classList.add("flipped");
  } else {
    cardHour.classList.remove("flipped");
  }


  /* days------------------------ */

  digitDay.setAttribute("data-digit-before", days.toString().padStart(2, "0"));
  digitDay.setAttribute("data-digit-after", days.toString().padStart(2, "0"));
  dayBack.innerText = days.toString().padStart(2, "0");
  dayFront.innerText = days.toString().padStart(2, "0");

  if (days <= days || hour==0) {
    cardDay.classList.add("flipped");
  } else {
    cardDay.classList.remove("flipped");
  }

}, 1000);