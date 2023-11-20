// Import React library to create React components.
import React from 'react';

// Import the UserForm component, Redux Provider, and the Redux store.
import UserForm from './Component/UserForm';
import { Provider } from 'react-redux';
import store from './store';

// Import the ToastContainer component and its styles for displaying notifications.
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the main App component.
function App() {
  return (
    // Wrap the entire application in the Redux Provider, providing access to the Redux store.
    <Provider store={store}>
      {/* Main container for the App */}
      <div className="App">
        {/* Render the UserForm component, which encapsulates the multi-step form logic. */}
        <UserForm />

        {/* Render the ToastContainer for displaying notifications. */}
        <ToastContainer />
      </div>
    </Provider>
  );
}

// Export the App component as the default export for the file.
export default App;







// import React from 'react';
// import UserForm from './Component/UserForm';
// import { Provider } from 'react-redux';
// import store from './store';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
      

        
//         <UserForm />

//         <ToastContainer />
//       </div>
//     </Provider>
//   );
// }

// export default App;
