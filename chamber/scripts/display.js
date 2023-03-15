fetch('json/data.json')
  .then(response => response.json())
  .then(data => {
    // Filter companies with silver or gold status
    const spotlightCompanies = data.directory.filter(company => company.membershipLevel === 'silver' || company.membershipLevel === 'Gold');
    
    // Randomly select 2 companies
    const randomCompanies = [];
    while (randomCompanies.length < 3) {
      const index = Math.floor(Math.random() * spotlightCompanies.length);
      if (!randomCompanies.includes(index)) {
        randomCompanies.push(index);
      }
    }
    
    // Populate the spotlight section with data from the randomly selected companies
    const spotlight1 = document.querySelector('.spotlight1');
    const spotlight2 = document.querySelector('.spotlight2');
    const spotlight3 = document.querySelector('.spotlight3');

    spotlight1.querySelector('#spotlight1-title').textContent = spotlightCompanies[randomCompanies[0]].name;
    spotlight1.querySelector('#spotlight1-image').src = spotlightCompanies[randomCompanies[0]].imagesrc;
    spotlight1.querySelector('#spotlight1-subtitle').textContent = spotlightCompanies[randomCompanies[0]].url;
    spotlight1.querySelector('#spotlight1-contact').textContent = `Contact: ${spotlightCompanies[randomCompanies[0]].number}`;

    spotlight2.querySelector('#spotlight2-title').textContent = spotlightCompanies[randomCompanies[1]].name;
    spotlight2.querySelector('#spotlight2-image').src = spotlightCompanies[randomCompanies[1]].imagesrc;
    spotlight2.querySelector('#spotlight2-subtitle').textContent = spotlightCompanies[randomCompanies[1]].url;
    spotlight2.querySelector('#spotlight2-contact').textContent = `Contact: ${spotlightCompanies[randomCompanies[1]].number}`;
    
    if (spotlightCompanies.length >= 3) {
      spotlight3.querySelector('#spotlight3-title').textContent = spotlightCompanies[randomCompanies[2]].name;
      spotlight3.querySelector('#spotlight3-image').src = spotlightCompanies[randomCompanies[2]].imagesrc;
      spotlight3.querySelector('#spotlight3-subtitle').textContent = spotlightCompanies[randomCompanies[2]].url;
      spotlight3.querySelector('#spotlight3-contact').textContent = `Contact: ${spotlightCompanies[randomCompanies[2]].number}`;
    } else {
      spotlight3.style.display = 'none';
    }
  })
  .catch(error => console.error(error));