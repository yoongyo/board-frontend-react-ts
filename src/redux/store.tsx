import { createStore } from 'redux';

import setCommentsReducer from './comment/reducer';

const store = createStore(setCommentsReducer)


export default store;