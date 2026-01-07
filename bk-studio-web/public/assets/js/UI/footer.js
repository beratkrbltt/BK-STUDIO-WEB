const footer = document.getElementById("site-footer");

fetch("/assets/js/json/footer.json")
    .then(res => res.json())
    .then(data => {
        footer.innerHTML = `
      <div class="site-footer">
        <div class="footer-container">

          <div class="footer-col">
            <p class="footer-title">${data.brand.name}</p>
            <p class="footer-text">${data.brand.description}</p>
          </div>

          <div class="footer-col">
            <p class="footer-title">Bağlantılar</p>
            <ul class="footer-links">
              ${data.links.map(link => `
                <li><a href="${link.link}">${link.text}</a></li>
              `).join("")}
            </ul>
          </div>

          <div class="footer-col">
            <p class="footer-title">İletişim</p>
            <a href="mailto:${data.contact.email}" class="footer-mail">
              ${data.contact.email}
            </a>
          </div>

        </div>

        <div class="footer-bottom">
          <p>
            ${data.bottom.copyright}<br>
            ${data.bottom.note}
          </p>

          <p class="footer-made-by">
            Made by
            <a href="${data.bottom.author.link}" target="_blank">
              <strong>${data.bottom.author.name}</strong>
            </a>
          </p>
        </div>
      </div>
    `;
    });
