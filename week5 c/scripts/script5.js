// JavaScript demonstration
/*
function doDemo (button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "#fa4";
    button.setAttribute("disabled", "true");
    setTimeout(clearDemo, 2000, button);
  }
  
  function clearDemo (button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "transparent";
    button.removeAttribute("disabled");
  }
  */

  const input = document.querySelector('#favchap');
  const button = document.querySelector('button');
  const list = document.querySelector('#list');
  
  button.addEventListener('click', function() {
    if (input.value.trim() === '') {
      return;
    }
    
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    
    li.appendChild(deleteButton);
    list.appendChild(li);
    
    deleteButton.addEventListener('click', function() {
      li.remove();
    });
    
    input.focus();
    input.value = '';
  });
  