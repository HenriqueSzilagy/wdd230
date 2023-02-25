const currentDate = new Date();


const lastVisited = localStorage.getItem('lastVisited');


if (lastVisited) {
  const differenceInTime = currentDate.getTime() - Date.parse(lastVisited);
  const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
  if(differenceInDays === 0){
    document.getElementById('last-visited').textContent = "You have never visited this page before"; 
  } else {
  
  document.getElementById('last-visited').textContent = `You last visited this page ${differenceInDays} days ago`;
}
}
localStorage.setItem('lastVisited', currentDate.toISOString());
