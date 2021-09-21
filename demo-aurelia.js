import { Aurelia, IHttpClient, IRouter, RouterConfiguration, Route, Watch, CustomElement, ValueConverter, LifecycleHooks, bindable } from 'https://unpkg.com/aurelia/dist/native-modules/index.js';
import {$, getTemplateById, DataGrid} from '/bundle.js';

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
    this.extraData = [
      {name: 'gender', items: genders, displayMember: 'name', valueMember: 'value', hasDefault: false}
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
