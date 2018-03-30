import { createStore } from '../simple-redux';
import rootReducer from '../reducers';

export default initialState => createStore(rootReducer, initialState);
