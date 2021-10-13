
const timeDays = document.querySelector('.days')
const timeHours = document.querySelector('.hours')
const timeMinutes = document.querySelector('.minutes')
const timeSeconds = document.querySelector('.seconds')
const textBacg = document.querySelector('.text_two')

let days = 5;
let hours = 8;
let minutes = 11;
let seconds = 15;

const Time = () => {

  timeSeconds.innerHTML = seconds += -1;
  if (seconds === 0) {
    seconds = 60;
    timeMinutes.innerHTML = minutes += -1;
  } if (minutes === 0) {
    minutes = 60;
    timeHours.innerHTML = hours += -1;
  } if (hours <= 1) {
    hours = 24;
    timeDays.innerHTML = days += -1;
  }
};
setInterval(Time, 1000)



timeDays.innerHTML = days;
timeHours.innerHTML = hours;
timeMinutes.innerHTML = minutes;
timeSeconds.innerHTML = seconds;


const addBacg = () => {
  textBacg.style.transition = '1s cubic-bezier(1, 0.6, 0.54, 0.18) 0s'
  textBacg.style.background = '#A20E2B'
}

setTimeout(addBacg, 1000);

const arrow = document.querySelector('.left')

let tumble = true
const smartFilter = (check) => {
  none = check.children[0].children[0];
  if (tumble == true) {
    none.style.display = 'block';
    tumble = false;
  } else {
    none.style.display = 'none';
    tumble = true;

  }

};
const loading = document.querySelector('.loading')


let load = 0;
window.addEventListener("scroll", function (event) {
  let x = this.oldScroll > this.scrollY
  this.oldScroll = this.scrollY;
  var y = window.scrollY
  if (y >= 3000) {
    load = 100;
  }
  if (y <= 10) {
    load = 1;
  }
  if (y === 1750) {
    load = 50;
  }
  if (x == false) {
    load += +0.5;
    loading.style.width = load + `%`;
  } else {
    load += -0.5;
    loading.style.width = load + `%`;
  }
  console.log(y)
});