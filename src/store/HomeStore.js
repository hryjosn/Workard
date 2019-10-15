import { action, extendObservable } from 'mobx';
import storeAction from './storeAction';

const initState = {
  click: 7,
};

class HomeStore extends storeAction {
  constructor() {
    super();
    extendObservable(this, initState);
  }

  @action plus = () => {
    this.updateData('click', 8888)
    console.log('click times',this.click);
  };
}
const store = new HomeStore();
export default store;
