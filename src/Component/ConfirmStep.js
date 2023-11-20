import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviousStep, setCurrentStep } from '../Actions/stepAction';
import { saveUserInformation } from '../Actions/userAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ConfirmationStep component for the confirmation step in the multi-step form.
const ConfirmationStep = () => {
  // Retrieve user data and dispatch function from Redux store.
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Handler for the "Confirm" button click.
  const handleConfirm = async () => {
    try {
      // Dispatch the action to save user information
      await dispatch(saveUserInformation(user));
      // Show a success notification
      toast.success('User information saved successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      // Set to the next step or the final step.
      dispatch(setCurrentStep(4));
    } catch (error) {
      console.error('Error saving user:', error);
      // Show an error notification
      toast.error('Error saving user information!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // Handler for the "Previous" button click.
  const handlePrevious = () => {
    dispatch(setPreviousStep());
  };

  // Render the component structure.
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${require('../Component/Vector-Flower-High-Definition-Wallpapers-29363.jpg')})` }}>
      <div className="max-w-md mx-auto p-8 bg-opacity-75 bg-white rounded-lg shadow-md border border-solid border-blue-500 p-4">
        <h2 className="text-2xl font-bold mb-4">Confirmation</h2>

        {/* Display user information */}
        <div className="mb-4">
          <strong>First Name:</strong> {user.firstName}
        </div>
        <div className="mb-4">
          <strong>Last Name:</strong> {user.lastName}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="mb-4">
          <strong>Street Address:</strong> {user.streetAddress}
        </div>
        <div className="mb-4">
          <strong>City:</strong> {user.city}
        </div>
        <div className="mb-4">
          <strong>State:</strong> {user.state}
        </div>
        <div className="mb-4">
          <strong>Zip Code:</strong> {user.zipCode}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrevious}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mr-2"
        >
          Previous
        </button>
        <button
          onClick={handleConfirm}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

// Export the ConfirmationStep component.
export default ConfirmationStep;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setPreviousStep, setCurrentStep } from '../Actions/stepAction';
// import { saveUserInformation } from '../Actions/userAction';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ConfirmationStep = () => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const handleConfirm = async () => {
//     try {
//       // Dispatch the action to save user information
//       await dispatch(saveUserInformation(user));
//       // Show a success notification
//       toast.success('User information saved successfully!', {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//       // Set to the next step or the final step.
//       dispatch(setCurrentStep(4));
//     } catch (error) {
//       console.error('Error saving user:', error);
//       // Show an error notification
//       toast.error('Error saving user information!', {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     }
//   };

//   const handlePrevious = () => {
//     dispatch(setPreviousStep());
//   };

//   return (
//   <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${require('../Component/Vector-Flower-High-Definition-Wallpapers-29363.jpg')})` }}>
//        <div className="max-w-md mx-auto p-8 bg-opacity-75 bg-white rounded-lg shadow-md   border border-solid border-blue-500 p-4">
//          <h2 className="text-2xl font-bold mb-4">Confirmation</h2>

//          <div className="mb-4">
//           <strong>First Name:</strong> {user.firstName}
//         </div>
//         <div className="mb-4">
//           <strong>Last Name:</strong> {user.lastName}
//         </div>
//         <div className="mb-4">
//           <strong>Email:</strong> {user.email}
//         </div>
//         <div className="mb-4">
//           <strong>Street Address:</strong> {user.streetAddress}
//         </div>
//         <div className="mb-4">
//           <strong>City:</strong> {user.city}
//         </div>
//         <div className="mb-4">
//           <strong>State:</strong> {user.state}
//         </div>
//         <div className="mb-4">
//           <strong>Zip Code:</strong> {user.zipCode}
//         </div>
//         <button
//           onClick={handlePrevious}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mr-2"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleConfirm}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
//         >
//           Confirm
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationStep;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setPreviousStep, setCurrentStep } from '../Actions/stepAction';
// import { saveUserInformation } from '../Actions/userAction';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ConfirmationStep = () => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const handleConfirm = async () => {
//     try {
//       // Dispatch the action to save user information
//       await dispatch(saveUserInformation(user));
//       // Show a success notification
//       toast.success('User information saved successfully!', {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//       // Set to the next step or the final step.
//       dispatch(setCurrentStep(4));
//     } catch (error) {
//       console.error('Error saving user:', error);
//       // Show an error notification
//       toast.error('Error saving user information!', {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     }
//   };

//   const handlePrevious = () => {
//     dispatch(setPreviousStep());
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${require('../Component/Vector-Flower-High-Definition-Wallpapers-29363.jpg')})` }}>
//       <div className="max-w-md mx-auto p-8 bg-opacity-75 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
//         <p className="mb-4">Review and confirm your information:</p>
//         {/* Rest of the content */}
//         <button
//           onClick={handlePrevious}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mr-2"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleConfirm}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
//         >
//           Confirm
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationStep;

