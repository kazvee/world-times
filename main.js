import '@picocss/pico';
import './style.css';
import './clock.js';

document.querySelector('#app').innerHTML = `
<main class="container">
<nav>
  <ul>
    <li><strong>World Clock</strong></li>
  </ul>
 </nav>

<div class="grid">
  <div>
    <article>
    <header>Calgary</header>
      <div id="Calgary"></div>
    </article>
  </div>

  <div>
    <article>
    <header>New York</header>
      <div id="New York"></div>
    </article>
  </div>

  <div>
    <article>
    <header>Reykjavík</header>
      <div id="Reykjavík"></div>
    </article>
  </div>

  <div>
    <article>
    <header>Dublin</header>
      <div id="Dublin"></div>
    </article>
  </div>

  <div>
    <article>
    <header>Berlin</header>
      <div id="Berlin"></div>
    </article>
  </div>

  <div>
    <article>
    <header>Tel-Aviv</header>
      <div id="Tel-Aviv"></div>
    </article>
  </div>

  </div>

  </main>
`;
