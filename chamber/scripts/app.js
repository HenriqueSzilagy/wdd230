function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-GB", { 
  weekday: 'long', 
  day: '2-digit', 
  month: 'long', 
  year: 'numeric' 
}).format(now);

 datefield.innerHTML = `<em>${fulldate.split(',')[0]}, ${fulldate.split(',')[1]}</em>`;

const copyright = document.querySelector('#copyrightyear')
copyright.textContent = `© ${new Date().getFullYear()} São Bernado do Campo Chamber   `;

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


var currentDay = new Date().getDay();
  if (currentDay === 1 || currentDay === 2) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<div style="margin-bottom: 1em; background-color: #820ad1;  color: white; text-align: center; border: 1px solid #820ad1; padding: 10px 0;">🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</div>'
    );
  }



var time = new Date();
var dateTimeString = time.toISOString();
document.getElementById('load-time').value = dateTimeString;

