document.addEventListener("DOMContentLoaded", function() {
    // Sample data for list entries
    const entries = [
      {
        title: "Skatelligence",
        description: "AI Powered Figure Skating Analysis",
        img: "images/personal_image_0.jpg",
        ctaText: "More",
        ctaLink: "skatelligence.html",
        extra: "lorem ipsum"
      },
      {
        title: "3x3x3 Rubik's Cube Solving Robot",
        description: "lorem ipsum",
        img: "images/personal_image_0.jpg",
        ctaText: "More",
        ctaLink: "rubikscube.html",
        extra: "lorem ipsum"
      },
      {
        title: "Refashion",
        description: "Wardrobe Organizing Smart Mirror",
        img: "images/personal_image_0.jpg",
        ctaText: "More",
        ctaLink: "skatelligence.html",
        extra: "lorem ipsum"
      },
      {
        title: "Gravotron",
        description: "lorem ipsum",
        img: "images/personal_image_0.jpg",
        ctaText: "More",
        ctaLink: "skatelligence.html",
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
    entries.forEach(entry => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="item-header">
            <img src="${entry.img}" alt="${entry.title}">
            <div class="item-info">
              <div class="item-title">${entry.title}</div>
              <div class="item-description"><em>${entry.description}</em></div>
            </div>
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
  