

const currentDate = new Date();


const lastVisited = localStorage.getItem('lastVisited');


if (lastVisited) {
  const differenceInTime = currentDate.getTime() - Date.parse(lastVisited);
  const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
  document.getElementById('last-visited').textContent = differenceInDays;
}


localStorage.setItem('lastVisited', currentDate.toISOString());
