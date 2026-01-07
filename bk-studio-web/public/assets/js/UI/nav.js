const header = document.getElementById("site-header");

fetch("/assets/js/json/nav.json")
    .then(res => res.json())
    .then(data => {
        header.innerHTML = `
      <nav class="navbar-main" aria-label="Ana Navigasyon">
        <div class="container">

          <div class="logo-wrapper">
            <img src="${data.logo.img}" class="logo-img" alt="${data.logo.text}">
            <a href="${data.logo.link}" class="logo-title">${data.logo.text}</a>
          </div>

          <div class="hamburger" id="hamburger">
            <span></span><span></span><span></span>
          </div>

          <ul class="menu-wrapper" id="menu">
            ${data.menu.map(item => `
              <li class="menuEl">
                <a href="${item.link}">${item.text}</a>
              </li>
            `).join("")}
          </ul>

        </div>
      </nav>
    `;
        const hamburger = document.getElementById("hamburger");
        const menu = document.getElementById("menu");

        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    });
