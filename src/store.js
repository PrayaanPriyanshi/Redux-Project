// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import userReducer from './Reducers/userReducer'; // Adjust the path to your userReducer
// import stepReducer from './Reducers/stepReducer'; // Adjust the path to your stepReducer
// import thunk from 'redux-thunk'; // Import Redux Thunk middleware

// const rootReducer = combineReducers({
//   user: userReducer,
//   step: stepReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;




// Import necessary functions and libraries from Redux.
import { createStore, applyMiddleware, combineReducers } from 'redux';

// Import userReducer and stepReducer to combine them into the rootReducer.
import userReducer from './Reducers/userReducer'; // Adjust the path to your userReducer
import stepReducer from './Reducers/stepReducer'; // Adjust the path to your stepReducer

// Import Redux Thunk middleware for handling asynchronous actions.
import thunk from 'redux-thunk';

// Combine multiple reducers into a single rootReducer using combineReducers.
const rootReducer = combineReducers({
  user: userReducer, // Combine the userReducer into the rootReducer under 'user' state.
  step: stepReducer, // Combine the stepReducer into the rootReducer under 'step' state.
});

// Create the Redux store, applying the rootReducer and middleware (thunk).
const store = createStore(rootReducer, applyMiddleware(thunk));

// Export the configured Redux store as the default export for the file.
export default store;
