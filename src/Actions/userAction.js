

import axios from 'axios';






// // Action creator function to update a specific field in the user data.
// Takes 'field' representing the field to update and 'value' representing the new value.
export const updateUserField = (field, value) => {
  return { type: 'UPDATE_USER_FIELD', field, value };
};

// Action creator function to fetch states based on the provided country code.
// Takes 'countryCode' representing the code of the selected country.
// Dispatches success or error actions based on the API response.
export const fetchStates = (countryCode) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.example.com/states?country=${countryCode}`);
      const states = response.data;
      dispatch({ type: 'FETCH_STATES_SUCCESS', states });
    } catch (error) {
      dispatch({ type: 'FETCH_STATES_ERROR', error });
    }
  };
};

// Action creator function to fetch cities based on the provided state code.
// Takes 'stateCode' representing the code of the selected state.
// Dispatches success or error actions based on the API response.
export const fetchCities = (stateCode) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.example.com/cities?state=${stateCode}`);
      const cities = response.data;
      dispatch({ type: 'FETCH_CITIES_SUCCESS', cities });
    } catch (error) {
      dispatch({ type: 'FETCH_CITIES_ERROR', error });
    }
  };
};

// Action creator function to save user information to the server.
// Takes 'userData' representing the user data to be saved.
// Dispatches success or error actions based on the API response.
export const saveUserInformation = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:9292/api/user-information/add', userData);
      const savedUser = response.data;
      dispatch({ type: 'SAVE_USER_SUCCESS', savedUser });
    } catch (error) {
      dispatch({ type: 'SAVE_USER_ERROR', error });
    }
  };
};
