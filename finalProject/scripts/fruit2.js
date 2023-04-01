const fruitUrl = 'json/fruit.json';
let data; // Declare the variable outside the function
const drinkCountElement = document.getElementById('drinkCount');
let drinkCount = 0;

// Retrieve the drink count from local storage, if it exists
const storedCount = localStorage.getItem('drinkCount');
if (storedCount !== null) {
  drinkCount = parseInt(storedCount);
}

// Update the drink count element on the page
drinkCountElement.textContent = drinkCount.toString();
// Load the other HTML file and extract the drinkCount value
fetch('other.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(html, 'text/html');
    const drinkCountElement = dom.getElementById('drinkCount');
    if (drinkCountElement) {
      const count = parseInt(drinkCountElement.textContent);
      if (!isNaN(count)) {
        drinkCount = count;
      }
    }
  });

async function getFreshData() {
  const response = await fetch(fruitUrl);
  data = await response.json(); // Assign the value inside the function

  displayFresh(data.fresh, document.getElementById("FirstFruit"));
  displayFresh(data.fresh, document.getElementById("SecondFruit"));
  displayFresh(data.fresh, document.getElementById("ThirdFruit"));
}

const displayFresh = (fresh, select) => {
  let options = "";
  for (const fruit of fresh) {
    options += `<option value="${fruit.name}">${fruit.name}</option>`;
  }
  select.innerHTML += options;
}

getFreshData();

const personalInformation = document.getElementById("personalInformation");
const form = document.getElementById("order");
const customerOrder = document.getElementById("customerOrder");
const nutritionalInfo = document.getElementById("nutritionalInfo");
const output = document.getElementById("output");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

customerOrder.style.display = "none";
nutritionalInfo.style.display = "none";

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const firstName = document.querySelector("#fname").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const firstfruit = document.querySelector("#FirstFruit").value;
  const secondfruit = document.querySelector("#SecondFruit").value;
  const thirdfruit = document.querySelector("#ThirdFruit").value;
  const specialinstructions = document.querySelector("#special-instructions").value;
  const orderDate = new Date().toLocaleString("en-US", { 
    timeZone: "America/Los_Angeles",
    hourCycle: "h23",
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });

  const selectedFruits = [firstfruit, secondfruit, thirdfruit];
  let totalCarbs = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;

  for (const fruit of selectedFruits) {
    const fruitData = data.fresh.find(item => item.name === fruit);
    if (fruitData) {
      totalCarbs += fruitData.nutritions.carbohydrates;
      totalProtein += fruitData.nutritions.protein;
      totalFat += fruitData.nutritions.fat;
      totalSugar += fruitData.nutritions.sugar;
      totalCalories += fruitData.nutritions.calories;
    }
  }

  // Increment the drink count
  drinkCount++;

  // Store the updated drink count in local storage
  localStorage.setItem('drinkCount', drinkCount.toString());
  
  // Update the drink count element on the page
  drinkCountElement.textContent = drinkCount.toString();

  
    // Insert customer order section
    customerOrder.insertAdjacentHTML("afterbegin", "<h1>Customer Order:</h1>");
    output.innerHTML = `<strong>Name:</strong> ${firstName}`;
    output.innerHTML += `<br><strong>Email:</strong> ${email}`;
    output.innerHTML += `<br><strong>Phone:</strong> ${phone}`;
    output.innerHTML += `<br><strong>First Fruit:</strong> ${firstfruit}`;
    output.innerHTML += `<br><strong>Second Fruit:</strong> ${secondfruit}`;
    output.innerHTML += `<br><strong>Third Fruit:</strong> ${thirdfruit}`;
    output.innerHTML += `<br><strong>Special Instructions:</strong> ${specialinstructions}`;
    output.innerHTML += `<br><strong>Order Date:</strong> ${orderDate}`;
  
    // Insert nutritional information section
    nutritionalInfo.insertAdjacentHTML("afterbegin", "<h1>Nutritional Information:</h1>");
    output2.innerHTML += `<p>Total Carbohydrates: ${totalCarbs.toFixed(1)} g</p>`;
    output2.innerHTML += `<p>Total Protein: ${totalProtein.toFixed(1)} g</p>`;
    output2.innerHTML += `<p>Total Fat: ${totalFat.toFixed(1)} g</p>`;
    output2.innerHTML += `<p>Total Sugar: ${totalSugar.toFixed(1)} g</p>`;
    output2.innerHTML += `<p>Total Calories: ${totalCalories.toFixed(1)}</p>`;

    customerOrder.style.display = "block";
    nutritionalInfo.style.display = "block";
    personalInformation.style.gridColumn = "1/2";
    output.appendChild(nutritionalInfo);
    
  });
 

