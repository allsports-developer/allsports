import AdminStore from './admin';

class RootStore {
	constructor() {
    	this.adminStore = new AdminStore(this);
	}
}

export default RootStore;