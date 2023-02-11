let cityIds = [
  'Calgary',
  'New York',
  'Reykjavík',
  'Dublin',
  'Berlin',
  'Tel-Aviv',
];
let offsets = [-7, -5, 0, 0, 1, 2];

function displayTime(id, offset) {
  // Create a new date object and set it to UTC time
  let date = new Date();
  date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  // Calculate the time in the specific time zone
  let time = date.getTime();
  time += offset * 60 * 60 * 1000;
  date.setTime(time);

  // Get the clock element and set its inner HTML to the current time in the specific time zone
  let clock = document.getElementById(id);
  let hour = date.getHours();
  let hourString = hour < 10 ? '0' + hour : hour;
  hourString = hour === 24 ? '00' : hourString;
  let timeString = date.toLocaleTimeString('en-CA', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  clock.innerHTML = hourString + timeString.substr(2);
}

// Call the displayTime function every second to update the clocks
setInterval(function () {
  for (let i = 0; i < cityIds.length; i++) {
    displayTime(cityIds[i], offsets[i]);
  }
}, 1000);
