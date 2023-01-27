function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

const datefield = document.querySelector(".date");



const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);


datefield.innerHTML = `<em>${fulldate}</em>`;


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

