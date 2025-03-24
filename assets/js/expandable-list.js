document.addEventListener("DOMContentLoaded", function() {
  // Sample data for list entries
  const entries = [
    {
      title: "Skatelligence",
      description: "AI Powered Figure Skating Analysis",
      img: "images/Skatelligence_logo_icon.png",
      ctaText: "Repository",
      ctaLink: "https://github.com/nsmartinx/Skatelligence",
      extra: "lorem ipsum"
    },
    {
      title: "Rubik's Cube Robot",
      description: "Custom built 3x3x3 Rubik's Cube Solver",
      img: "images/rubikscube.png",
      ctaText: "Repository",
      ctaLink: "https://github.com/nsmartinx/3x3x3RubiksCubeRobot",
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

  // Only include the top two items
  entries.slice(0, 2).forEach((entry, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="item-header">
        <img src="${entry.img}" alt="${entry.title}">
        <div class="item-info">
          <div class="item-title">${entry.title}</div>
          <div class="item-description"><em>${entry.description}</em></div>
        </div>
        ${ (entry.ctaLink && entry.ctaText) ? `
          <ul class="actions" style="display: flex; justify-content: center;">
            <li><a href="${entry.ctaLink}" target="_blank" class="button primary">${entry.ctaText}</a></li>
          </ul>
        ` : '' }
      </div>
    `;

    // If a CTA link exists, make the whole li clickable.
    if (entry.ctaLink) {
      li.style.cursor = "pointer";
      li.addEventListener("click", function(e) {
        // If the click originated on an anchor inside, let that behavior occur.
        if (e.target.closest('a')) return;
        window.location.href = entry.ctaLink;
      });
    }

    ul.appendChild(li);
  });

  listContainer.appendChild(ul);
});
