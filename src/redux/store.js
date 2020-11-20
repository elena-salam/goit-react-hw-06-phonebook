import {configureStore} from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducers';


const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    }
});


export default store;

// my version:
// import {createStore, combineReducers} from 'redux';
// import contactsReducer from './contacts/contactsReducers';

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
// });

// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;