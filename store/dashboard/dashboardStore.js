import {
  observable,
  makeObservable,
} from "mobx";

class DashboardStore {
  shapes = [];


  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      shapes: observable,
    });
  }
  
}


export default DashboardStore;