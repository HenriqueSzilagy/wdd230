const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
  
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); 
  
    prophets.forEach((prophet, index) => {

      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p')
      let p2 = document.createElement('p')
      let portrait = document.createElement('img');
        
      let prophetPosition = index + 1;
      let suffix;
      switch (prophetPosition){
          case 1:
              suffix = 'st';
              break;
          case 2:
              suffix = 'nd';
              break;
          case 3:
              suffix = 'rd';
              break;
          default:
              suffix = 'th'
      }
   
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      p.textContent = `Date of Birth: ${prophet.birthdate}`;
      p2.textContent = `Place of Birth: ${prophet.birthplace}`;

      
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} ${prophetPosition}${suffix} Latter-day President`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
    
      card.appendChild(h2);
      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(p2);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    })
}
