const container = document.getElementById("portfolio-grid");

fetch("/assets/js/json/data.json")
    .then(res => res.json())
    .then(portfoys => {
        portfoys.forEach(portfoy => {

            const projectCard = document.createElement("article");
            projectCard.classList.add("project-card");

            projectCard.innerHTML = `
        <img src="${portfoy.img}" alt="${portfoy.title}">

        <div class="project-content">
          <h3>${portfoy.title}</h3>

          <p>${portfoy.description}</p>

          <div class="project-tags">
            ${portfoy.tags.map(tag => `<span>${tag}</span>`).join("")}
          </div>

          <a href="${portfoy.link}" target="_blank" class="project-link">
            Siteyi İncele →
          </a>
        </div>
      `;

            container.appendChild(projectCard);
        });
    })
    .catch(err => console.error("Portfolio yüklenemedi:", err));
