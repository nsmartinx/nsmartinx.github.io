document.addEventListener("DOMContentLoaded", function() {
    // Sample data for list entries
    const entries = [
      {
        title: "Skatelligence",
        description: "AI Powered Figure Skating Analysis",
        img: "images/SkatelligenceLogo.png",
        ctaText: "More Info",
        ctaLink: "skatelligence.html",
        extra: "lorem ipsum"
      },
      {
        title: "Rubik's Cube Robot",
        description: "Custom built 3x3x3 Rubik's Cube Solver",
        img: "images/rubikscube.png",
        ctaText: "More Info",
        ctaLink: "rubikscube.html",
        extra: "lorem ipsum"
      },
      {
        title: "Refashion",
        description: "Wardrobe Organizing Smart Mirror",
        img: "images/refashion.png",
        extra: "lorem ipsum"
      },
      {
        title: "Gravotron",
        description: "Gravity Flipping 3D Platformer",
        img: "images/gravotron.png",
        extra: "lorem ipsum"
      },
    ];
  
    // Get the container where the list should be injected
    const listContainer = document.getElementById("expandableList");
  
    if (!listContainer) return;
  
    // Create a ul element for the expandable list
    const ul = document.createElement("ul");
    ul.className = "expandable-list";
  
    // Create and append each list item
    entries.forEach((entry, index) => {
      const li = document.createElement("li");
      // Only include the button if the entry is not one of the last two
      let buttonHTML = "";
      if (index < entries.length - 2) {
        buttonHTML = `
          <ul class="actions" style="display: flex; justify-content: center;">
            <li><a href="${entry.ctaLink}" target="_blank" class="button primary">${entry.ctaText}</a></li>
          </ul>
        `;
      }
      li.innerHTML = `
        <div class="item-header">
          <img src="${entry.img}" alt="${entry.title}">
          <div class="item-info">
            <div class="item-title">${entry.title}</div>
            <div class="item-description"><em>${entry.description}</em></div>
          </div>
          ${buttonHTML}
        </div>
        <div class="item-extra">
          <p>${entry.extra}</p>
        </div>
      `;
      ul.appendChild(li);
    });
      
      
  
    listContainer.appendChild(ul);
  });
  