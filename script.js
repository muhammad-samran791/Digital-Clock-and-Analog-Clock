//////////// Analog Clock /////////////

let clockTime = new Date();

let monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let DayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let clockSecond = clockTime.getSeconds() + 1;
let secondDegree = clockSecond * 6;
document.getElementById("second-needle").style.transform =
  `rotate(${secondDegree}deg)`;

let clockMinute = clockTime.getMinutes();
let minutDegree = clockMinute * 6 + clockSecond * 0.1;
document.getElementById("minut-needle").style.transform =
  `rotate(${minutDegree}deg)`;

let clockHour = clockTime.getHours();
let hourDegree = clockHour * 30 + clockMinute * 0.5;
document.getElementById("hour-needle").style.transform =
  `rotate(${hourDegree}deg)`;

setInterval(function () {
  let clockTime = new Date();
  let clockSecond = clockTime.getSeconds() + 1;
  let secondDegree = clockSecond * 6;
  document.getElementById("second-needle").style.transform =
    `rotate(${secondDegree}deg)`;

  let clockMinute = clockTime.getMinutes();
  let minutDegree = clockMinute * 6 + clockSecond * 0.1;
  document.getElementById("minut-needle").style.transform =
    `rotate(${minutDegree}deg)`;

  let clockHour = clockTime.getHours();
  let hourDegree = clockHour * 30 + clockMinute * 0.5;
  document.getElementById("hour-needle").style.transform =
    `rotate(${hourDegree}deg)`;
}, 1000);

//////////// Digital Clock /////////////

let creatTime = new Date();

let month = creatTime.getMonth();
let monthName = monthList[month];
document.getElementsByClassName("month")[0].innerHTML = monthName;
document.getElementsByClassName("month")[1].innerHTML = monthName;

let date = creatTime.getDate();
document.getElementsByClassName("date")[0].innerHTML = date + ",";
document.getElementsByClassName("date")[1].innerHTML = date + ",";

let year = creatTime.getFullYear();
document.getElementsByClassName("year")[0].innerHTML = year;
document.getElementsByClassName("year")[1].innerHTML = year;

let day = creatTime.getDay();
let dayName = DayList[day];
document.getElementsByClassName("day")[0].innerHTML = dayName;
document.getElementsByClassName("day")[1].innerHTML = dayName;

let second = creatTime.getSeconds();
document.getElementsByClassName("second")[0].innerHTML = second
  .toString()
  .padStart(2, "0");

let minute = creatTime.getMinutes();
document.getElementsByClassName("minute")[0].innerHTML = minute
  .toString()
  .padStart(2, "0");

let hour = creatTime.getHours() % 12 || 12;
document.getElementsByClassName("hour")[0].innerHTML = hour
  .toString()
  .padStart(2, "0");
hour >= 12
  ? (document.getElementById("ampm").innerHTML = "AM")
  : (document.getElementById("ampm").innerHTML = "PM");

setInterval(function () {
  let creatTime = new Date();

  let month = creatTime.getMonth();
  let monthName = monthList[month];
  document.getElementsByClassName("month")[0].innerHTML = monthName;
  document.getElementsByClassName("month")[1].innerHTML = monthName;

  let date = creatTime.getDate();
  document.getElementsByClassName("date")[0].innerHTML = date + ",";
  document.getElementsByClassName("date")[1].innerHTML = date + ",";

  let year = creatTime.getFullYear();
  document.getElementsByClassName("year")[0].innerHTML = year;
  document.getElementsByClassName("year")[1].innerHTML = year;

  let day = creatTime.getDay();
  let dayName = DayList[day];
  document.getElementsByClassName("day")[0].innerHTML = dayName;
  document.getElementsByClassName("day")[1].innerHTML = dayName;

  let second = creatTime.getSeconds() + 1;
  document.getElementsByClassName("second")[0].innerHTML = second
    .toString()
    .padStart(2, "0");
  if (second == 60) {
    document.getElementsByClassName("second")[0].innerHTML = "00";
  }

  let minute = creatTime.getMinutes();
  document.getElementsByClassName("minute")[0].innerHTML = minute
    .toString()
    .padStart(2, "0");
  if (minute == 60) {
    document.getElementsByClassName("minute")[0].innerHTML = "00";
  }

  let hour = creatTime.getHours() % 12 || 12;
  document.getElementsByClassName("hour")[0].innerHTML = hour
    .toString()
    .padStart(2, "0");
  hour >= 12
    ? (document.getElementById("ampm").innerHTML = "AM")
    : (document.getElementById("ampm").innerHTML = "PM");
}, 1000);
