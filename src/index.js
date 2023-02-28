import "./styles.css";
const clockEl = document.getElementById("clock");
const sleectEl = document.querySelectorAll("select");
const btn = document.querySelector(".btn");

for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;

  let option = `<option value="${i}">${i}</option>`;
  sleectEl[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;

  let option = `<option value="${i}">${i}</option>`;
  sleectEl[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
  let ampm = i === 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  sleectEl[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

function showTime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = "AM";
  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var time = `${hour}:${minute}:${seconds} ${ampm}`;
  clockEl.innerHTML = time;
}
setInterval(showTime, 1000);
