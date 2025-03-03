document.addEventListener("DOMContentLoaded", function() {
    // Sample data for list entries
    const entries = [
      {
        title: "Summertime Sadness",
        description: "Lana Del Rey",
        img: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        extra: "Lana Del Rey is known for her melancholic style and cinematic music. Her songs often explore themes of tragic romance and melancholia."
      },
      {
        title: "Mitran Di Chhatri",
        description: "Babbu Maan",
        img: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        extra: "Babbu Maan is a legendary Punjabi singer famous for his soulful voice and profound lyrics."
      },
      {
        title: "For Whom The Bell Tolls",
        description: "Metallica",
        img: "https://assets.aceternity.com/demos/metallica.jpeg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        extra: "Metallica is an iconic heavy metal band renowned for their powerful sound and intense live performances."
      },
      {
        title: "Stairway To Heaven",
        description: "Led Zeppelin",
        img: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        extra: "Led Zeppelin is celebrated for their innovative sound and lasting influence on rock music."
      },
      {
        title: "Toh Phir Aao",
        description: "Mustafa Zahid",
        img: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        extra: "\"Aawarapan\" is a Bollywood hit known for its intense storyline and powerful performances."
      }
    ];
  
    // Get the container where the list should be injected
    const listContainer = document.getElementById("expandableList");
  
    if (!listContainer) return;
  
    // Create a ul element for the expandable list
    const ul = document.createElement("ul");
    ul.className = "expandable-list";
  
    // Create and append each list item
    entries.forEach(entry => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="item-header">
          <img src="${entry.img}" alt="${entry.title}">
          <div class="item-title">${entry.title} <small>– ${entry.description}</small></div>
          <a class="item-button" href="${entry.ctaLink}" target="_blank">${entry.ctaText}</a>
        </div>
        <div class="item-extra">
          <p>${entry.extra}</p>
        </div>
      `;
      ul.appendChild(li);
    });
  
    listContainer.appendChild(ul);
  });
  