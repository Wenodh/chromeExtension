let myLeads = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
// console.log(ulEl);

let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
if (leadsFromLocalStorage) renderLeads;
inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value);
    // console.log(myLeads);
    inputEl.value = '';
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    renderLeads();
});

function renderLeads() {
    let listItems = '';
    for (i in myLeads) {
        listItems += `
        <li>
        <a href='https://${myLeads[i]}' target='_blank' rel='noopener noreferrer'>
           ${myLeads[i]}
           </a>
           </li>`;
    }
    ulEl.innerHTML = listItems;
}
