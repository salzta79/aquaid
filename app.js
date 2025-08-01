const identifyBtn = document.getElementById("identifyBtn");
const imageInput = document.getElementById("imageInput");
const resultSection = document.getElementById("result");
const gallery = document.getElementById("gallery");

const fishData = [
  {
    name: "Barramundi",
    sci: "Lates calcarifer",
    size: "Min 55 cm",
    regions: "Northern Australia, Southeast Asia",
    edible: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Barramundi.jpg",
    notes: "Popular sportfish and table fish in Australia."
  },
  {
    name: "Snapper",
    sci: "Pagrus auratus",
    size: "Min 35 cm",
    regions: "Australia, New Zealand",
    edible: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Snapper_fish.jpg",
    notes: "Highly prized table fish, found in coastal waters."
  },
  {
    name: "Rainbow Trout",
    sci: "Oncorhynchus mykiss",
    size: "Min 30 cm",
    regions: "North America, introduced worldwide",
    edible: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/5/53/Rainbow_trout.jpg",
    notes: "Common freshwater game fish."
  }
];

// Display gallery
fishData.forEach(f => {
  gallery.innerHTML += `
    <div class="gallery-item">
      <img src="${f.img}" alt="${f.name}" />
      <p><strong>${f.name}</strong></p>
    </div>
  `;
});

// Fake identification
identifyBtn.addEventListener("click", async () => {
  if (!imageInput.files.length) {
    alert("Please upload a photo first!");
    return;
  }
  resultSection.innerHTML = "<p>Identifying...</p>";

  await new Promise(res => setTimeout(res, 1200));

  // Random fish result
  const fish = fishData[Math.floor(Math.random() * fishData.length)];

  resultSection.innerHTML = `
    <h2>${fish.name} (<em>${fish.sci}</em>)</h2>
    <img src="${fish.img}" alt="${fish.name}" style="max-width:200px;border-radius:6px;"/>
    <p><strong>Legal Size:</strong> ${fish.size}</p>
    <p><strong>Regions:</strong> ${fish.regions}</p>
    <p><strong>Edible:</strong> ${fish.edible ? "Yes" : "No"}</p>
    <p>${fish.notes}</p>
  `;
});