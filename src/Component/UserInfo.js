import { FaUserAlt } from "react-icons/fa";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserField, fetchStates } from '../Actions/userAction';
import { setCurrentStep } from '../Actions/stepAction';

// UserInformationStep component represents the first step of the multi-step form.
const UserInformationStep = () => {
  // Retrieve user data and dispatch function from Redux store.
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // State for validation error messages.
  const [validationMessages, setValidationMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Handle the next button click to proceed to the next step.
  const handleNext = () => {
    // Validation logic
    const firstNameRegex = /^[A-Z][a-zA-Z]*$/;
    const lastNameRegex = /^[A-Z][a-zA-Z]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newValidationMessages = {
      firstName: '',
      lastName: '',
      email: '',
    };

    // Validate first name
    if (!user.firstName.match(firstNameRegex)) {
      newValidationMessages.firstName = 'First Name should start with a capital letter.';
    }

    // Validate last name
    if (!user.lastName.match(lastNameRegex)) {
      newValidationMessages.lastName = 'Last Name should start with a capital letter.';
    }

    // Check length of first name
    if (user.firstName.length > 12) {
      newValidationMessages.firstName = 'First Name cannot exceed 12 characters.';
    }

    // Check length of last name
    if (user.lastName.length > 12) {
      newValidationMessages.lastName = 'Last Name cannot exceed 12 characters.';
    }

    // Validate email
    if (!user.email.match(emailRegex)) {
      newValidationMessages.email = 'Please enter a valid email address.';
    }

    // Check if any validation errors
    if (
      newValidationMessages.firstName ||
      newValidationMessages.lastName ||
      newValidationMessages.email
    ) {
      // If there are validation errors, update the state to show error messages
      setValidationMessages(newValidationMessages);
    } else {
      // If no validation errors, proceed to the next step and fetch states.
      dispatch(fetchStates(user.countryCode));
      dispatch(setCurrentStep(2));
    }
  };

  // Handle first name input change
  const handleFirstNameChange = (e) => {
    const newValue = e.target.value;

    // Validation check for first name on keypress
    if (newValue && newValue.length === 1 && newValue.toLowerCase() === newValue) {
      setValidationMessages({ ...validationMessages, firstName: 'First Name should start with a capital letter.' });
    } else {
      setValidationMessages({ ...validationMessages, firstName: '' });
    }

    // Limit the input to 12 characters
    if (newValue.length > 12) {
      e.preventDefault();
      setValidationMessages({ ...validationMessages, firstName: 'First Name cannot exceed 12 characters.' });
      return;
    }

    // Update the state
    dispatch(updateUserField('firstName', newValue));
  };

  // Handle last name input change
  const handleLastNameChange = (e) => {
    const newValue = e.target.value;

    // Validation check for last name on keypress
    if (newValue && newValue.length === 1 && newValue.toLowerCase() === newValue) {
      setValidationMessages({ ...validationMessages, lastName: 'Last Name should start with a capital letter.' });
    } else {
      setValidationMessages({ ...validationMessages, lastName: '' });
    }

    // Limit the input to 12 characters
    if (newValue.length > 12) {
      e.preventDefault();
      setValidationMessages({ ...validationMessages, lastName: 'Last Name cannot exceed 12 characters.' });
      return;
    }

    // Update the state
    dispatch(updateUserField('lastName', newValue));
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const newValue = e.target.value;

    // Validation check for email on keypress
    if (newValue && !newValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setValidationMessages({ ...validationMessages, email: 'Please enter a valid email address.' });
    } else {
      setValidationMessages({ ...validationMessages, email: '' });
    }

    // Update the state
    dispatch(updateUserField('email', newValue));
  };

  // Render the component JSX
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114605.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700092800&semt=ais)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-3xl font-bold mb-4 text-center">Multi-Step Form Wizard</h1>
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md border border-solid border-blue-500">
        <h2 className="flex items-center text-2xl font-bold mb-4">
          <FaUserAlt className="text-3xl mr-2" />
          User Information
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">First Name:</label>
            <input
              type="text"
              value={user.firstName}
              onKeyPress={handleFirstNameChange}
              onChange={(e) => dispatch(updateUserField('firstName', e.target.value))}
              className={`mt-1 p-2 w-full border ${
                validationMessages.firstName ? 'border-red-500' : 'border-gray-300'
              } rounded focus:outline-none focus:ring focus:border-blue-300`}
            />
            {validationMessages.firstName && (
              <div className="text-red-500 text-sm mt-1">{validationMessages.firstName}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Last Name:</label>
            <input
              type="text"
              value={user.lastName}
              onKeyPress={handleLastNameChange}
              onChange={(e) => dispatch(updateUserField('lastName', e.target.value))}
              className={`mt-1 p-2 w-full border ${
                validationMessages.lastName ? 'border-red-500' : 'border-gray-300'
              } rounded focus:outline-none focus:ring focus:border-blue-300`}
            />
            {validationMessages.lastName && (
              <div className="text-red-500 text-sm mt-1">{validationMessages.lastName}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              value={user.email}
              onChange={handleEmailChange}
              className={`mt-1 p-2 w-full border ${
                validationMessages.email ? 'border-red-500' : 'border-gray-300'
              } rounded focus:outline-none focus:ring focus:border-blue-300`}
            />
            {validationMessages.email && (
              <div className="text-red-500 text-sm mt-1">{validationMessages.email}</div>
            )}
          </div>
          <button
            type="button"
            onClick={handleNext} 
            className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mt-4 mx-auto"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

// Export the UserInformationStep component.
export default UserInformationStep;



