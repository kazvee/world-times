import '@picocss/pico';
import './style.css';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import './clock.js';
document.querySelector('#app').innerHTML = `
<body>
    <main class="container">
        <aside>
        <nav>
            <ul>
                <hgroup>
                    <h1>World Clock</h1>
                    <h2>
                        <ins>
                        Available in selected cities
                        </ins>
                    </h2>
                </hgroup>
            </ul>
        </nav>
        <div class="grid">
        <div>
            <article>
                <header>
                    Calgary
                </header>
                <div id="Calgary">
                </div>
                <footer class="fib fi-ca fi, flag-icon-squared"></footer>
            </article>
        </div>
        <div>
            <article>
                <header>New York</header>
                <div id="New York"></div>
                <footer class="fib fi-us fi, flag-icon-squared"></footer>
            </article>
        </div>
        <div>
            <article>
                <header>Reykjavík</header>
                <div id="Reykjavík"></div>
                <footer class="fib fi-is fi, flag-icon-squared"></footer>
            </article>
        </div>
        <div>
            <article>
                <header>Dublin</header>
                <div id="Dublin"></div>
                <footer class="fib fi-ie fi, flag-icon-squared"></footer>
            </article>
        </div>
        <div>
            <article>
                <header>Berlin</header>
                <div id="Berlin"></div>
                <footer class="fib fi-de fi, flag-icon-squared"></footer>
            </article>
        </div>
        <div>
            <article>
                <header>Tel-Aviv</header>
                <div id="Tel-Aviv"></div>
                <footer class="fib fi-il fi, flag-icon-squared"></footer>
            </article>
        </div>
    </main>
    <footer class="pagefooter">
  <small>
    Made with <a target="_blank" href="https://github.com/kazvee/world-times#readme">❤️</span></a>
  </small>
</footer>
</body>
`;