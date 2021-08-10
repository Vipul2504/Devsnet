import { createStore } from 'redux';
import counterReducer from './reducers/couter';
import rootReducer from './reducers';


 
const store=createStore(rootReducer)

export default store