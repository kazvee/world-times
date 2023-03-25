import { DateTime } from 'luxon';

let cities = [
  { name: 'Calgary', zone: 'America/Edmonton' },
  { name: 'New York', zone: 'America/New_York' },
  { name: 'Reykjavík', zone: 'Atlantic/Reykjavik' },
  { name: 'Dublin', zone: 'Europe/Dublin' },
  { name: 'Berlin', zone: 'Europe/Berlin' },
  { name: 'Tel-Aviv', zone: 'Asia/Jerusalem' },
];

function displayTime(city) {
  const now = DateTime.now().setZone(city.zone);

  const hourString = now.toFormat('HH');
  const timeString = now.toFormat(':mm:ss');

  const clock = document.getElementById(city.name);
  clock.innerHTML = hourString + timeString;
}

setInterval(() => {
  for (const city of cities) {
    displayTime(city);
  }
}, 1000);
