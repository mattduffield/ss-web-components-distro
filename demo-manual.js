import {$} from '/bundle.js';

const userRequest = await fetch('https://randomuser.me/api/?nat=us&results=150', {method: 'get'});
const userResults = await userRequest.json();
const users = userResults.results;
const genders = [
  {name: 'Female', value: 'female'},
  {name: 'Male', value: 'male'}
];
const fixedGrid = $('#fixedGrid');
if (fixedGrid) {
  fixedGrid.addEventListener('filter', async (e) => {
    console.log('vm:fixedGrid filter - ', e);
    const request = await fetch('https://randomuser.me/api/?nat=us&gender=female&results=150', {method: 'get'});
    const results = await request.json();
    const data = results.results;
    fixedGrid.items = data;
  });
  fixedGrid.addEventListener('unlockRecord', unlockRecord);
  fixedGrid.addEventListener('deleteRecord', deleteRecord);
  fixedGrid.addEventListener('selectRecord', selectRecord);
  fixedGrid.extraData = [
    {name: 'gender', items: genders, displayMember: 'name', valueMember: 'value', hasDefault: false}
  ];
  //
  // If you set extraData, be sure to set it before items...
  //
  fixedGrid.items = users;
}

function selectRecord(e) {
  const {row, index} = e.detail;
  console.log('vm:selectRecord', e, e.detail);
}
function unlockRecord(e) {
  const {row, index} = e.detail;
  console.log('vm:unlockRecord', e, e.detail);
}
function deleteRecord(e) {
  const {row, index} = e.detail;
  console.log('vm:deleteRecord', e, e.detail);
}
