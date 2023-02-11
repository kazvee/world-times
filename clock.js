// Function to display the current time in a specific time zone
function displayTime(id, offset) {
  // Create a new date object
  let date = new Date();

  // Calculate the time in the specific time zone
  let time = date.getTime();
  time += date.getTimezoneOffset() * 60 * 1000;
  time += offset * 60 * 60 * 1000;
  date.setTime(time);

  // Get the clock element and set its inner HTML to the current time in the specific time zone
  let clock = document.getElementById(id);
  let timeString = date.toLocaleTimeString('en-CA', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
    hour12: false,
  });
  clock.innerHTML = timeString;
}

// Call the displayTime function every second to update the clocks
setInterval(function () {
  displayTime('Calgary', -7);
  displayTime('New York', -5);
  displayTime('Reykjavík', +0);
  displayTime('Dublin', +0);
  displayTime('Berlin', +1);
  displayTime('Tel-Aviv', +2);
}, 1000);
