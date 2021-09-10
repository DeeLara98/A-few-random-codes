var showCurrentTime = function() {
  var clock = document.getElementById('clock');
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  if (hours >= 12) {
    meridian = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
  clock.innerHTML = clockTime;
};

var showCurrentDate = function() {
  var dateString = document.getElementById('todayDate');
  var currentDate = new Date();
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var day = currentDate.getDate();
  var year = currentDate.getFullYear();
  var dateTime = week[currentDate.getDay()] + ", " + months[currentDate.getMonth()] + " " + day + ", " + year;
  dateString.innerHTML = dateTime;
};

var updateClock = function() {
  var time = new Date().getHours();
  var messageText;
  var timeEventJS = document.getElementById('timeEvent');
  if (time < 12) {
    messageText = "Good morning!";
  }
  else if (time < 18) {
    messageText = "Good afternoon!";
  }
  else if (time < 20) {
    messageText = "Good evening!";
  }
  else {
    messageText = "Good night!";
  }
  console.log(messageText);
  timeEventJS.innerHTML = messageText;
  showCurrentTime();
  showCurrentDate();
};
updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);
