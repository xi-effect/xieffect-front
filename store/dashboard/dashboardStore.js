import {
  action,
  observable,
  makeObservable,
} from "mobx";

class DashboardStore {
  isEditing = false

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      isEditing: observable,
      setIsEditing: action
    });
  }
  
}


export default DashboardStore