//////////// Analog & Digital Clock /////////////

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

function updateClock() {
  let clockTime = new Date();

  let clockSecond = clockTime.getSeconds();
  let clockMinute = clockTime.getMinutes();
  let clockHour = clockTime.getHours();

  let secondDegree = (clockSecond + 1) * 6;
  document.getElementById("second-needle").style.transform =
    `rotate(${secondDegree}deg)`;

  let minutDegree = clockMinute * 6 + clockSecond * 0.1;
  document.getElementById("minut-needle").style.transform =
    `rotate(${minutDegree}deg)`;

  let hourDegree = (clockHour % 12) * 30 + clockMinute * 0.5;
  document.getElementById("hour-needle").style.transform =
    `rotate(${hourDegree}deg)`;

  let month = clockTime.getMonth();
  let monthName = monthList[month];
  let date = clockTime.getDate();
  let year = clockTime.getFullYear();
  let day = clockTime.getDay();
  let dayName = DayList[day];

  const months = document.getElementsByClassName("month");
  const dates = document.getElementsByClassName("date");
  const years = document.getElementsByClassName("year");
  const days = document.getElementsByClassName("day");

  for (let i = 0; i < 2; i++) {
    if (months[i]) months[i].innerHTML = monthName;
    if (dates[i]) dates[i].innerHTML = date + ",";
    if (years[i]) years[i].innerHTML = year;
    if (days[i]) days[i].innerHTML = dayName;
  }

  document.getElementsByClassName("second")[0].innerHTML = clockSecond
    .toString()
    .padStart(2, "0");

  document.getElementsByClassName("minute")[0].innerHTML = clockMinute
    .toString()
    .padStart(2, "0");

  let displayHour = clockTime.getHours() % 12 || 12;
  document.getElementsByClassName("hour")[0].innerHTML = displayHour
    .toString()
    .padStart(2, "0");

  let ampmStatus = clockTime.getHours() >= 12 ? "PM" : "AM";
  document.getElementById("ampm").innerHTML = ampmStatus;
}

updateClock();

setInterval(updateClock, 1000);
