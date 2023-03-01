const url = 'json/data.json';

async function getDirectoryData() {
  const response = await fetch(url);
  const data = await response.json();

  displayDirectory(data.directory);
}

getDirectoryData();

const displayDirectory = (directory) => {
  const cards = document.querySelector('div.d-cards');

  directory.forEach((directory) => {
    let card = document.createElement('section');
    let name = document.createElement('p');
    let portrait = document.createElement('img');
    let address = document.createElement('p');
    let number = document.createElement('p');
    let url2 = document.createElement('a');

    name.textContent = `${directory.name}`;
    address.textContent = `${directory.adress}`;
    number.textContent = `${directory.number}`;
    url2.textContent = `${directory.url}`;

    portrait.setAttribute('src', directory.imagesrc);
    portrait.setAttribute('alt', `Logo of ${directory.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '150');
    portrait.setAttribute('height', '100');
    url2.setAttribute('href', directory.url)
    card.appendChild(name);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(url2);

    cards.appendChild(card);
  });
};

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".d-cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
