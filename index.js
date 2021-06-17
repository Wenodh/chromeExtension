let myLeads = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const searchBtn = document.getElementById('search-btn');
const ulEl = document.getElementById('ul-el');
const deletBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads) {
    let listItems = '';
    for (i in leads) {
        listItems += `
        <li>
        <a href='https://${leads[i]}' target='_blank' rel='noopener noreferrer'>
           ${leads[i]}
           </a>
           </li>`;
    }
    ulEl.innerHTML = listItems;
}

tabBtn.addEventListener('click', function () {
    //get the current tab url
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url);

        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        render(myLeads);
    });
});

searchBtn.addEventListener('click', () => {
    render(myLeads.filter((it) => it.includes(inputEl.value)));
});

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value);
    // console.log(myLeads);
    inputEl.value = '';
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
});

deletBtn.addEventListener('dblclick', () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});
