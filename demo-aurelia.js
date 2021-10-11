import { Aurelia, IHttpClient, IRouter, RouterConfiguration, Route, Watch, CustomElement, ValueConverter, LifecycleHooks, bindable } from 'https://unpkg.com/aurelia/dist/native-modules/index.js';
import {$, getTemplateById, DataGrid} from './bundle.js';

const au = new Aurelia();
const AppRoot = CustomElement.define({
  name: 'app-root',
  template: getTemplateById('app-root'),
}, class {
  items = [];
  extraData = [];

  async attached() {
    await this.getResources();
  }
  async getResources() {
    const userRequest = await fetch('https://randomuser.me/api/?nat=us&results=50', {method: 'get'});
    const userResults = await userRequest.json();
    const genders = [
      {name: 'Female', value: 'female'},
      {name: 'Male', value: 'male'}
    ];
    const states = [
      {name: 'Alabama', value: 'Alabama'},
      {name: 'Alaska', value: 'Alaska'},
      {name: 'Arizona', value: 'Arizona'},
      {name: 'Arkansas', value: 'Arkansas'},
      {name: 'California', value: 'California'},
      {name: 'Colorado', value: 'Colorado'},
      {name: 'Connecticut', value: 'Connecticut'},
      {name: 'Delaware', value: 'Delaware'},
      {name: 'Florida', value: 'Florida'},
      {name: 'Georgia', value: 'Georgia'},
      {name: 'Hawaii', value: 'Hawaii'},
      {name: 'Idaho', value: 'Idaho'},
      {name: 'Illinois', value: 'Illinois'},
      {name: 'Indiana', value: 'Indiana'},
      {name: 'Iowa', value: 'Iowa'},
      {name: 'Kansas', value: 'Kansas'},
      {name: 'Kentucky', value: 'Kentucky'},
      {name: 'Louisiana', value: 'Louisiana'},
      {name: 'Maine', value: 'Maine'},
      {name: 'Maryland', value: 'Maryland'},
      {name: 'Massachusetts', value: 'Massachusetts'},
      {name: 'Michigan', value: 'Michigan'},
      {name: 'Minnesota', value: 'Minnesota'},
      {name: 'Mississippi', value: 'Mississippi'},
      {name: 'Missouri', value: 'Missouri'},
      {name: 'Montana', value: 'Montana'},
      {name: 'Nebraska', value: 'Nebraska'},
      {name: 'Nevada', value: 'Nevada'},
      {name: 'New Hampshire', value: 'New Hampshire'},
      // {name: 'New Jersey', value: 'New Jersey'},
      {name: 'New Jersey', value: 'NJ'},
      {name: 'New Mexico', value: 'New Mexico'},
      // {name: 'New York', value: 'New York'},
      {name: 'New York', value: 'NY'},
      {name: 'North Carolina', value: 'North Carolina'},
      {name: 'North Dakota', value: 'North Dakota'},
      {name: 'Ohio', value: 'Ohio'},
      {name: 'Oklahoma', value: 'Oklahoma'},
      {name: 'Oregon', value: 'Oregon'},
      {name: 'Pennsylvania', value: 'Pennsylvania'},
      {name: 'Rhode Island', value: 'Rhode Island'},
      {name: 'South Carolina', value: 'South Carolina'},
      {name: 'South Dakota', value: 'South Dakota'},
      {name: 'Tennessee', value: 'Tennessee'},
      {name: 'Texas', value: 'Texas'},
      {name: 'Utah', value: 'Utah'},
      {name: 'Vermont', value: 'Vermont'},
      {name: 'Virginia', value: 'Virginia'},
      {name: 'Washington', value: 'Washington'},
      {name: 'West Virginia', value: 'West Virginia'},
      {name: 'Wisconsin', value: 'Wisconsin'},
      {name: 'Wyoming', value: 'Wyoming'}
    ];
    this.extraData = [
      {name: 'gender', items: genders, displayMember: 'name', valueMember: 'value', hasDefault: false},
      {name: 'states', items: states, displayMember: 'name', valueMember: 'value', hasDefault: false}
    ];
    //
    // If you set extraData, be sure to set it before items...
    //
    this.items = userResults.results;
  }
  selectRecord(e) {
    const {row, index} = e.detail;
    console.log('vm:selectRecord', e, e.detail);
  }
  unlockRecord(e) {
    const {row, index} = e.detail;
    console.log('vm:unlockRecord', e, e.detail);
  }
  deleteRecord(e) {
    const {row, index} = e.detail;
    console.log('vm:deleteRecord', e, e.detail);
  }
});

au.app({ 
  component: AppRoot,
  host: document.querySelector('app-root')
});
au.start();
