const identifyBtn = document.getElementById('identifyBtn');
const imageInput = document.getElementById('imageInput');
const resultSection = document.getElementById('result');

identifyBtn.addEventListener('click', async () => {
  if (!imageInput.files.length) {
    alert('Please select an image first.');
    return;
  }
  
  resultSection.textContent = 'Identifying...';
  
  const file = imageInput.files[0];
  const formData = new FormData();
  formData.append('image', file);
  
  // Simulated identification API call
  try {
    // For demo, just fake a response after delay
    await new Promise(res => setTimeout(res, 1500));
    
    // Fake response data
    const species = {
      commonName: 'Rainbow Trout',
      scientificName: 'Oncorhynchus mykiss',
      legalSize: 'Minimum 30 cm',
      nativeRegions: ['North America', 'Introduced in Australia'],
      edible: true,
      notes: 'Popular freshwater sport fish.'
    };
    
    resultSection.innerHTML = `
      <h2>${species.commonName} (<em>${species.scientificName}</em>)</h2>
      <p><strong>Legal Size:</strong> ${species.legalSize}</p>
      <p><strong>Native Regions:</strong> ${species.nativeRegions.join(', ')}</p>
      <p><strong>Edible:</strong> ${species.edible ? 'Yes' : 'No'}</p>
      <p>${species.notes}</p>
    `;
    
  } catch (err) {
    resultSection.textContent = 'Error identifying species. Please try again.';
  }
});