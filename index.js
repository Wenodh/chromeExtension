let myLeads = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com'];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
// console.log(ulEl);
inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value);
    console.log(myLeads);
});
let listItems = '';
for (lead in myLeads) {
    listItems += '<li>' + myLeads[lead] + '</li>';
}
ulEl.innerHTML = listItems;
