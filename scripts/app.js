const copyright = document.querySelector('#copyrightyear')
copyright.textContent = `© ${new Date().getFullYear()} | BYU-Idaho | WDD 230 - Winter 2023`;

const lastModified = document.querySelector('#lastmodified');

const options = {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};
lastModified.insertAdjacentHTML('beforebegin', '<br>');
lastModified.textContent = `Last Update: ${new Date(document.lastModified).toLocaleDateString('en-US', options)}`;