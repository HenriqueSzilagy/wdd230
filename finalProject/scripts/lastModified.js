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
lastModified.textContent = `Last Modification: ${new Date(document.lastModified).toLocaleDateString('en-US', options)}`;

var time = new Date();
var dateTimeString = time.toISOString();
document.getElementById('load-time').value = dateTimeString;
