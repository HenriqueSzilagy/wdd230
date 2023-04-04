const drinkCountElement = document.getElementById('drinkCount');
let drinkCount = 0;

const storedCount = localStorage.getItem('drinkCount');
if (storedCount !== null) {
  drinkCount = parseInt(storedCount);
}

if (drinkCountElement !== null) {
  drinkCountElement.textContent = drinkCount.toString();
}

fetch('fresh.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(html, 'text/html');
    const newDrinkCountElement = dom.getElementById('drinkCount');
    if (newDrinkCountElement) {
      const count = parseInt(newDrinkCountElement.textContent);
      if (!isNaN(count)) {
        drinkCount = count;
        if (drinkCountElement !== null) {
          drinkCountElement.textContent = drinkCount.toString();
        }
      }
    }
  });

